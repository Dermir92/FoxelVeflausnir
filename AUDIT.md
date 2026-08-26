# Foxel Veflausnir — Site Audit

**Date:** 2026-08-26
**Audited:** `origin/master` @ `4768267` (= what is live at https://foxel-veflausnir.vercel.app/)
**Method:** source read at `origin/master`, plus live DOM measurement of the production site.
**Status:** Phase 1 — audit only. No code changed.

---

## ⛔ Blocker 0 — Your local repo is NOT the site that is live

This has to be resolved before any code work, or fixes will silently revert production.

There are **three different versions** of this site in play:

| Version | What it is | Sections | Words | Has legal pages |
|---|---|---|---|---|
| `origin/master` @ `4768267` | **Live in production** | 9 | 1,022 | ✅ yes |
| local `master` @ `0b502c2` | 1 commit **behind** | 12 | 1,467 | ❌ no |
| local working tree | 14 modified files, **uncommitted** | 12 | 1,467 | ❌ no |

Facts:

- `origin/master` has a commit local does not: **`4768267 "Improve site UX and add legal pages (#1)"`**. There is also an unmerged remote branch `origin/codex/ux-legal-pages`.
- That commit **cut three sections** from `page.tsx` (`NoTechSection`, `AudienceSection`, `FeaturesSection`), rewrote most copy, added `/skilmalar` and `/personuvernd`, and unified CTA wording. Production is already a slimmer, better-written site than anything on your disk.
- Your working tree has 14 uncommitted files — accessibility and structure edits made **on top of the older `0b502c2` code**. They touch the same files `4768267` rewrote.

**Consequence:** if you commit the working tree and push, you will re-add the three deleted sections, revert the improved Icelandic copy, and delete the two legal pages. `git pull` will conflict across ~10 files.

**Fix, in this order:**

1. `git stash -u` (or commit to a throwaway branch) to bank the uncommitted a11y work.
2. `git pull` to get `4768267`.
3. Re-apply only the still-relevant a11y fixes onto the new base — most are still needed (see High-3). Do **not** replay the copy or section changes.
4. Decide what to do with `origin/codex/ux-legal-pages`; delete it if `4768267` superseded it.

Everything below describes **production** (`origin/master`), since that is what visitors see and what your brief describes.

---

## Section inventory (production, in order)

Measured from the live DOM. Desktop = 1280×720 viewport.

| # | Component | Heading | Words | Height |
|---|---|---|---|---|
| 1 | `Hero` | Vefsíður fyrir lítil fyrirtæki sem vilja líta faglega út á netinu | 60 | 674 px |
| 2 | `ProblemSection` | Facebook er ekki heimasíða | 139 | 590 px |
| 3 | `SolutionSection` | Við byggjum síðuna í kringum það sem viðskiptavinurinn þarf að vita | 152 | 784 px |
| 4 | `PortfolioSection` | Hvernig gæti síðan þín litið út? | 92 | 782 px |
| 5 | `PackagesSection` | Veldu pakka sem hentar þér | 120 | 894 px |
| 6 | `AddOnsSection` | Hægt er að bæta við meira | 111 | 682 px |
| 7 | `ProcessSection` | Ferlið í stuttu máli | 159 | 934 px |
| 8 | `FAQSection` | Algengar spurningar | 52 (≈250 expanded) | 764 px |
| 9 | `ContactSection` | Segðu okkur frá verkefninu | 137 | 1,073 px |
| — | `Footer` | — | 44 | 401 px |

**Totals:** 9 sections · 1,022 words in `<main>` · **7,769 px = 10.8 screens** desktop · **13,663 px = 16.8 screens** mobile (375×812).

Your instinct is correct, and the number is the argument: **a visitor must scroll ~17 phone screens to get from the headline to the form.** For a landing page whose entire job is "understand the offer, then make contact," that is roughly 3× too long.

---

## CRITICAL

### C1 — Four "setja inn síðar" placeholders are live in the footer

`Footer.tsx` ships literal placeholder text to production:

```
Kennitala: setja inn síðar
Heimilisfang: setja inn síðar
Netfang: setja inn síðar
Sími: setja inn síðar
```

`ContactSection.tsx` ships two more, under the headings **Netfang** and **Sími**:

```
Setja inn síðar
```

**Why it matters:** this is the single most credibility-destroying thing on the site, and it sits in the two places a buyer looks when they have decided to trust you. A small-business owner reading "Netfang: setja inn síðar" concludes the company does not exist yet. It also means **there is no way to contact Foxel except a form that goes nowhere** (see C2).

**Fix:** put the real email in (`foxel@foxel.is`) as a `mailto:` link. If there is no phone or registered address yet, **delete those rows entirely** — an absent field reads as "small company," a placeholder reads as "unfinished website." Kennitala is only legally expected once you are invoicing; omit until then rather than announcing its absence.

### C2 — The contact form submits nowhere; every inquiry is silently lost

`ContactForm.tsx` still contains:

```js
// TODO: Connect to Formspree, Resend or an API route
await new Promise((r) => setTimeout(r, 800));
setFormState("success");
```

It waits 800 ms, then shows **"Takk fyrir fyrirspurnina!"** — a success screen for a submission that was never sent anywhere. There is no API route in the repo and no form service configured.

**Why it matters:** this is worse than a broken form. A broken form makes people try again or phone you. A form that lies makes them wait for a reply that will never come, and conclude you ignored them. Combined with C1 (no email, no phone anywhere on the site) **the site currently has no working contact path at all.** Every lead since launch is gone.

**Fix (highest priority on the whole list):** wire it to Resend or Formspree, and set `formState("error")` on a non-2xx response — the `error` branch already exists in the component but is unreachable. Until it is wired, replace the form with a plain `mailto:` link; that is strictly better than a form that discards input.

### C3 — Both legal pages carry visible "draft" banners and defer the company identity

`/skilmalar` and `/personuvernd` exist and are substantively written (14 and 10 sections respectively, real prose, not skeletons). But both render a visible amber banner to users:

> "Þetta eru hagnýt drög að þjónustuskilmálum. Þau ætti að yfirfara með lögfræðingi áður en þau eru notuð sem bindandi samningsskilmálar."

> "Þessi texti er hagnýt fyrstu útgáfa og ætti að yfirfara með lögfræðingi áður en vefurinn fer í fulla notkun…"

And the privacy policy's controller section defers its own core content:

> "Upplýsingar um kennitölu, heimilisfang, netfang og síma verða settar inn þegar þær liggja fyrir."

**Why it matters:** you are telling visitors your own terms are not binding. Under GDPR the privacy policy is also **not serviceable**: it grants data-subject rights in §8 but gives no email, address, or kennitala to exercise them against. It never names **Vercel** as a processor despite hosting there, and does not mention US/third-country transfer.

Both pages are also **indexable** — no `robots` directive, no `robots.ts` — so Google can index pages that describe themselves as unreviewed drafts.

**Fix:** fill in the controller block; name Vercel (and Resend/Formspree once C2 lands) as processors; add concrete retention (e.g. 7 years for accounting records); add the data-request email. Then remove the banners. Until reviewed, add `robots: { index: false }` to both pages' `metadata`. Both files also hardcode `"Síðast uppfært: 13. maí 2026"` — ~3 months stale; drive it from a constant.

### C4 — Add-on cards are invisible: identical background to their section

`AddOnsSection.tsx` renders `bg-slate-50` cards inside a `bg-slate-50` section. Verified on the live DOM — section and card background compute to the **same** value:

```
sectionBg: lab(98.1434 -0.369519 -1.05966)
cardBg:    lab(98.1434 -0.369519 -1.05966)   ← identical
```

Only the 1 px `border-slate-100` distinguishes them, and that border is itself near-invisible on slate-50. A regression from `4768267`, which changed the section to `bg-slate-50` but left the cards `bg-slate-50`.

**Fix:** `bg-white` on the cards (matches the pattern every other section already uses). Moot if you cut the section per IA-2 below.

---

## HIGH

### H1 — Three lists say the same thing (verified, near-verbatim)

The single largest source of bloat. Three separate "what you get" lists:

| `SolutionSection` → "Algengt innihald" | `ProcessSection` → "Hvað fær þú?" |
|---|---|
| Tengiliðaupplýsingar og fyrirspurnarform | Fyrirspurnarform og tengiliðaupplýsingar ← **same words, reversed** |
| Grunnstillingar fyrir leitarvélar | Grunnstillingar svo Google skilji síðuna |
| Forsíða með skýrri kynningu | Skýr kynning á þjónustu þinni |
| Þjónustukaflar eða þjónustusíður | *(in Pakkar instead)* |

**4 of 6 bullets are duplicates**, one of them literally the same phrase with the words swapped. And `PackagesSection`'s "Fyrirtækjasíða" features list overlaps both (Forsíða, Þjónustusíður eða þjónustukaflar, Myndir eða verkefni, Hafðu samband).

**Strongest version:** `SolutionSection`'s "Algengt innihald" — it is concrete and framed as "what's typically included." **Fix:** keep exactly one such list, relocated under the packages grid as the shared baseline (`"Allir pakkar innihalda"`), and delete `ProcessSection`'s "Hvað fær þú?" box entirely. Saves ~60 words and a whole card.

### H2 — "Aukavalkostir" duplicates the "Sérlausn" package (5 of 6 items)

| `AddOnsSection` | in `Sérlausn` features? |
|---|---|
| Bókunarkerfi | ✅ "Bókunarform" |
| Spjallbox | ✅ "Spjallbox" |
| Spjallvélmenni | ✅ "Spjallvélmenni fyrir algengar spurningar" |
| Netverslun | ✅ "Netverslunarlending" |
| Viðhald og uppfærslur | ✅ "Viðhald og uppfærslur" |
| Endurgerð eldri síðu | ❌ only unique item |

Your suspicion is right and it is near-total. A 111-word, 682 px section exists to restate a card the visitor read 40 seconds earlier, adding exactly one new idea.

**Fix:** delete the section. Add "Endurgerð eldri síðu" and "Fleiri tungumál" to the Sérlausn card, and put a one-line chip row under the packages grid:

> Aukavalkostir: bókunarkerfi · spjallbox · spjallvélmenni · netverslun · fleiri tungumál · viðhald · endurgerð eldri síðu

**111 words → ~20.** The FAQ already answers the chatbot question in more depth, so nothing is lost.

### H3 — "Vandinn" spends three paragraphs to reach its point

The section's actual thesis is the **third** paragraph:

> "Góð vefsíða vinnur þá vinnu fyrir þig: hún kynnir fyrirtækið, svarar helstu spurningum og leiðir fólk í næsta skref."

Paragraphs 1 and 2 build up to it, and paragraph 2 largely restates the second half of paragraph 1 ("people shouldn't have to scroll through posts"). It does **not** earn three paragraphs.

Additionally, 2 of its 3 benefit cards duplicate `SolutionSection`'s 4 outcome cards:

- "Betri fyrsti snertipunktur" ≈ "Fyrsta sýn sem vinnur með þér"
- "Minna vesen fyrir viðskiptavininn" ≈ "Upplýsingar sem fólk finnur fljótt"

**Fix — merge "Vandinn" + "Þjónustan" into one section.** Keep the heading, which is the best line on the site (`"Facebook er ekki heimasíða"` — concrete, arguable, memorable). Replace three paragraphs with one lead that states the conclusion first:

> **Facebook er ekki heimasíða**
>
> Facebook og Instagram halda sambandi við þá sem þekkja þig þegar. Heimasíða segir nýjum viðskiptavinum strax hvað þú gerir, hvar þú starfar og hvernig hægt er að hafa samband — án þess að þeir þurfi að fletta í gegnum færslur.

Then keep **one** set of three cards (Vandinn's are tighter) and delete `SolutionSection`'s four `outcomes` cards. **291 words across two sections → ~120 in one.**

### H4 — The form asks 9 questions to start a conversation

`name`, `email`, `phone`, `company`, `business`, `hasWebsite`\*, `needs`\*, `timeline`\*, `message` — with three **required** dropdowns.

Only three things are needed to reply to a first inquiry: **who you are, how to reach you, what you want.** Everything else is a question you can ask in the reply email, where it costs you nothing and costs the visitor nothing.

Required dropdowns are the worst offenders — `hasWebsite`, `needs`, and `timeline` each force a decision before the visitor has decided to talk to you at all, and `needs` has seven options that require reading the whole page to answer confidently.

**Fix — 9 fields → 4, 3 required:**

| Keep | Move to the reply email |
|---|---|
| Nafn * | `company` — usually in the signature or the message |
| Netfang * | `business` — folds into the message placeholder |
| Sími (optional) | `hasWebsite` * — ask in reply |
| Segðu okkur frá verkefninu * (textarea) | `needs` * — ask in reply |
| | `timeline` * — ask in reply |

Prompt for the cut information with the placeholder instead of a field:

> T.d. „Ég er pípari á höfuðborgarsvæðinu, er ekki með síðu og vil einfalda síðu með þjónustu og sambandsformi, sem fyrst."

That one placeholder elicits `business`, `hasWebsite`, `needs` **and** `timeline` in the visitor's own words — more useful than four dropdown values.

Also: the form has no spam protection of any kind. Add a honeypot field or Cloudflare Turnstile when wiring C2.

### H5 — Four different CTA labels for one destination

Every primary button goes to `#samband`, labelled four different ways:

| Label | Where |
|---|---|
| "Hafa samband" | header, hero secondary, footer |
| "Hafðu samband" | header nav, footer nav |
| "Senda fyrirspurn" | ×3 package cards + form submit |
| "Ræða verkefnið" | Ferlið box |

Plus the hero **primary** is "Skoða lausnir" → `#pakkar`, so the most prominent button on the page does not lead to the conversion point.

**Why it matters:** a repeated identical button teaches the visitor "this is the one action here." Four labels read as four different things and dilute the ask.

**Fix:** one label for the primary action everywhere. Recommend **"Fá tilboð"** — it names the value the visitor receives, rather than the chore they perform ("senda", "hafa samband"). Keep nav links as "Hafðu samband". Make the hero primary go to `#samband`, and demote "Skoða lausnir" to the secondary slot.

### H6 — 16 WCAG AA contrast failures

Measured on the live DOM with a canvas-based sRGB resolver (sanity-checked: `text-slate-600` on white = 7.56 ✓). 16 failing text nodes, 10 distinct patterns:

| Element | Class | Ratio | Needs |
|---|---|---|---|
| "Þjónusta frá Foxel" (footer) | `text-slate-600` on slate-900 | **2.35** | 4.5 |
| Mock URL "www.pipari.is" | `text-slate-400` on slate-100 | **2.40** | 4.5 |
| "Þrifafyrirtæki" | `text-green-600` on green-50 | **3.08** | 4.5 |
| "*" required markers | `text-red-500` | **3.64** | 4.5 |
| © line | `text-slate-500` on slate-900 | **3.74** | 4.5 |
| "Vinsælast" badge | white on `bg-blue-500` | **3.76** | 4.5 |
| "Snyrtistofa" | `text-rose-600` on rose-50 | **4.12** | 4.5 |
| Package card body | `text-blue-100` on blue-600 | **4.30** | 4.5 |

**Fix:** footer `slate-600`→`slate-400` and `slate-500`→`slate-400`; badge `bg-blue-500`→`bg-blue-700`; category labels →`-700`; required marker `red-500`→`red-600`; package description `blue-100`→`blue-50`.

---

## MEDIUM

### M1 — Zero visual relief across nine sections

Verified section backgrounds, top to bottom:

```
white → slate-50 → white → slate-50 → white → slate-50 → white → slate-50 → white
```

Perfect mechanical alternation, and those are the **only two** background values on the page. Worse, every section is the identical shape: eyebrow label → heading → subtitle → card grid. Nine times.

`4768267` deleted `NoTechSection`, which was `bg-blue-600` — the page's **only** full-bleed color break. Cutting it was right for length but removed the one visual anchor, so the page now reads as one undifferentiated ribbon and the eye gets no rest.

**Fix:** give exactly one section a saturated full-bleed treatment as a mid-page punctuation mark — the packages section is the natural choice, since it is the decision point. Vary the section shapes too: the FAQ and process sections do not need eyebrow + heading + subtitle + grid.

### M2 — Icon systems are mixed three ways

- **Hero mockup:** geometric glyphs `⚙ ▣ ⌖ ✉` — then `📍`, a full-color emoji, in the same card
- **Aukavalkostir:** full-color emoji `📅 💬 🤖 🛒 🔧 ♻️`
- **Everywhere else:** 53 inline stroked SVG icons (Heroicons-style, `stroke-width: 2`)

Emoji render in each OS's own style, so they will not match your palette on any platform and will look different on Windows, macOS, iOS and Android. The `▣`/`⌖` glyphs also have poor font coverage and may fall back to a different typeface or a box.

**Fix:** standardise on the stroked SVG set that already covers most of the site — it is on-brand, recolourable, and renders identically everywhere. Replace the 6 add-on emoji and the 5 hero-mockup glyphs. Since H2 deletes the add-ons section, this is mostly a hero-mockup fix. Consider adding `lucide-react` rather than hand-inlining more paths (see M5).

### M3 — Line length is fine; small type is the real issue

Prose max-width is well controlled (`max-w-2xl` / `max-w-xl` ≈ 65–70 characters — correct). But there is a lot of 12 px body text: `text-xs` on mock content, category labels, footer meta, and the tag chips. 12 px is below comfortable reading size and drives half the contrast failures in H6.

Section padding is `py-20 sm:py-24` (80/96 px) on **all nine** sections, uniformly. That is ~1,500 px of vertical padding alone — roughly 2 phone screens of pure whitespace. It is not adding clarity, because it never varies to signal relationship or hierarchy.

**Fix:** raise `text-xs` body copy to `text-sm`. Reduce base section padding to `py-14 sm:py-20` and reserve the larger value for the two or three sections that genuinely open a new idea.

### M4 — Footer link tap targets are 18 px tall

Measured on the live DOM at 375 px wide:

```
a "Þjónustan"        64 × 18
a "Ferlið"           35 × 18
a "Spurt og svarað" 101 × 18
a "Skilmálar"       ~70 × 18
button "Opna valmynd" 40 × 40
```

WCAG 2.5.5 asks for 44 × 44 CSS px; iOS HIG says 44 pt. An 18 px-tall link in a `space-y-2.5` list is a genuine mis-tap risk on mobile, and it is the only place the legal pages are reachable.

**Fix:** `py-2` on footer links (`space-y-2.5` → `space-y-1` to compensate), and `p-2.5` on the mobile menu button to clear 44 px.

### M5 — Four near-identical card-grid implementations

`ProblemSection`, `SolutionSection`, `AddOnsSection`, and (in the dead `FeaturesSection`/`AudienceSection`) all hand-roll the same structure: `rounded-xl border border-slate-100` + icon chip + `h3` + `p`, inside a `grid ... gap-N`. Only the paddings and icon-chip sizes differ, and they differ **arbitrarily** — `p-5` vs `p-6`, `w-10 h-10` vs `w-11 h-11`, `rounded-lg` vs `rounded-xl` — which is why the page looks subtly inconsistent up close.

`SectionHeading`, `PackageCard`, and `ProcessStep` are already correctly extracted; the card grid is the one that got away.

**Fix:** one `<FeatureCard icon title text />` plus one `<CardGrid cols>`. Collapses four implementations into one and makes the padding/radius scale consistent by construction. Do this **after** the IA cuts, so you only migrate the cards that survive.

### M6 — All copy is hardcoded in JSX

Packages, FAQs, process steps, add-ons, portfolio demos, and both nav lists are inline `const` arrays inside component files. `navLinks` is **duplicated verbatim** in `Header.tsx` and `Footer.tsx` — and they have already drifted (the footer additionally carries `legalLinks`).

Since every future change to this site is a copy change, and the copy is Icelandic — where a typo is easy to introduce and hard for a non-speaker to spot — this is the highest-leverage structural fix.

**Fix:** `src/content/` with `packages.ts`, `faq.ts`, `process.ts`, `nav.ts`. Single source of truth for `navLinks`. The `4768267` commit changed one nav label and had to touch two files to do it.

### M7 — SEO: no metadataBase, no sitemap, no robots, no OG image, no structured data

Verified missing at `origin/master`:

| Item | State | Consequence |
|---|---|---|
| `metadataBase` | absent | OG/Twitter URLs do not resolve absolutely |
| `og:image` | absent | link shares render as a bare text card |
| `robots.ts` | absent | draft legal pages are indexable (see C3) |
| `sitemap.ts` | absent | 3 pages, no sitemap |
| canonical | absent | `vercel.app` URL is the canonical by default |
| JSON-LD | absent | no `LocalBusiness` / `Organization` |
| analytics | absent | **conversion is unmeasurable** |

**Domain risk:** the site is on `foxel-veflausnir.vercel.app`. Adding `metadataBase`, canonical, or JSON-LD `url` now bakes that hostname into your metadata; when you move to `foxel.is` you must revisit every one. **Fix:** put the origin in a single `src/lib/site.ts` constant (`export const SITE_URL = ...`) and reference it everywhere, so the migration is a one-line change. Do not hardcode the vercel.app host in more than one place.

`LocalBusiness` JSON-LD is a strong fit for an Icelandic service business and directly helps local search — but it **requires** the address, phone and kennitala that C1 says do not exist yet. Sequence it after C1.

**Analytics is the notable gap:** you cannot tell whether the length problem is costing you conversions, because nothing is measured. Vercel Analytics or Plausible is cookieless and privacy-clean — note that `/personuvernd` currently states the site uses no analytics cookies, so adding any tracker means updating that page.

---

## NICE-TO-HAVE

- **N1 — Dead code.** `AudienceSection.tsx`, `FeaturesSection.tsx`, `NoTechSection.tsx` exist at `origin/master` but are imported **nowhere** (verified: 0 references each). Delete them — git has the history if you want the copy back.
- **N2 — Unused boilerplate assets.** `public/file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` — 0 references each. `create-next-app` leftovers.
- **N3 — README is untouched boilerplate.** Still the generic Next.js "Getting Started" text. For a client-facing business repo, one paragraph on what this is and how to deploy.
- **N4 — FAQ accordion could drop its client JS.** `FAQItem` is `"use client"` purely to toggle one boolean. Native `<details>/<summary>` gives correct keyboard and screen-reader behaviour for free and makes the whole section a server component. Currently only 3 client components (`Header`, `ContactForm`, `FAQItem`) — this removes one.
- **N5 — FAQ accordion missing `aria-controls`.** Verified on production: `aria-expanded` present ✓, `aria-controls` absent ✗. The button does not point at the panel it controls. Moot if you adopt `<details>` per N4. *(Your uncommitted local work already fixes this — worth re-applying after the pull.)*
- **N6 — Heading order is clean.** Verified: exactly one `h1`, no skipped levels across 57 headings. No action.
- **N7 — Font subsetting is correct.** `Geist` with `subsets: ["latin"]` covers all Icelandic characters (þ ð æ ö á é í ó ú ý all fall in U+00C0–00FF). No action — noting it so nobody "fixes" it later.
- **N8 — `next.config.ts` is empty.** Fine for now. Only images from `/public` are used, so no `remotePatterns` needed.
- **N9 — Stale hardcoded date.** Both legal pages hardcode `"Síðast uppfært: 13. maí 2026"`. Drive from a constant next to the content.
- **N10 — No pricing anywhere.** See Decision D2.

---

## Honest assessment: the "Dæmi" section

You asked me to be straight about this one, so: **as built, it hurts you more than it helps.**

Current state — three cards with invented company names (`"Björn Pípulagning"`, `"Hárverk Snyrtistofa"`, `"Hreint & Gott"`), a mock preview made of **grey placeholder bars** rather than any actual design, and a subtitle that says:

> "Þau sýna uppbyggingu, ekki tilbúin viðskiptaverkefni."

Three problems compound:

1. **The heading promises a portfolio.** "Hvernig gæti síðan þín litið út?" sets up the visitor to see work. The disclaimer immediately retracts it. Setting up an expectation and withdrawing it in the next sentence reads as evasive, even though the disclaimer is the honest part.
2. **Invented company names read as fake testimonials.** A visitor skimming sees three business names and assumes clients; the fine print then says otherwise. That is the exact shape of a site trying to look more established than it is — which is the opposite of the trust you are selling.
3. **The mock shows nothing.** Grey bars do not demonstrate design ability. The section occupies 782 px and 92 words to prove nothing at all. It is the weakest possible evidence, and its presence *advertises* that you have no work to show.

The disclaimer is honest. The framing around it is not, and honest-but-buried loses you the credit for the honesty.

**Strongest honest framing — two options, in order of preference:**

**Option A (best): build one real demo site and link it.** One complete, clickable, real page at `demo.foxel.is` beats three fictional cards absolutely. It is real work, it is verifiable, and it is exactly the thing the buyer wants to see before hiring you. This converts the page's weakest section into its strongest. You are a web design shop — the demo *is* the portfolio, and it can double as your own testing ground.

**Option B (do now, cheap): drop the fake names and sell the structure honestly.** Reframe from "here are sites" to "here is how we'd structure yours." Remove the invented business names — use the industry as the title:

> **Uppbygging**
> ### Svona byggjum við upp síðu
> Þrjú dæmi um uppbyggingu fyrir ólíkar þjónustur — hvernig efnið raðast og hvað er sett fremst.

...with card titles `Pípulagningamaður` / `Snyrtistofa` / `Þrifafyrirtæki` and no personal names. Same information, no implied client list, nothing to retract. Then replace it with Option A as soon as you have one real demo.

**Do not** simply delete the section — a services site with no visual evidence at all is weaker still. Fix the framing, then upgrade to real work.

---

## Proposed slimmed-down page structure

**9 sections → 7. ~1,022 words → ~600. ~17 mobile screens → ~9.**

| # | Section | Action | Target words | Notes |
|---|---|---|---|---|
| 1 | **Hero** | Keep, sharpen | 45 | Primary CTA → `#samband`, not `#pakkar`. "Skoða lausnir" becomes secondary. |
| 2 | **Af hverju heimasíða?** | **Merge** Vandinn + Þjónustan | 120 | Keep `"Facebook er ekki heimasíða"`. 3 paragraphs → 1 conclusion-first lead. Keep Vandinn's 3 cards; **cut** Þjónustan's 4 outcome cards (H3). |
| 3 | **Uppbygging** (was Dæmi) | Keep, reframe | 70 | Drop invented company names (see above). Move **up** — visual proof early. |
| 4 | **Pakkar** | Keep + absorb | 150 | Absorb "Algengt innihald" as `"Allir pakkar innihalda"`. Absorb add-ons as a one-line chip row (H2). |
| 5 | **Ferlið** | Trim | 90 | Keep the 5 steps. **Delete** the "Hvað fær þú?" box (H1) — pure duplication. |
| 6 | **Spurt og svarað** | Keep | 45 visible | Already collapsed by default — the right pattern. Native `<details>` (N4). |
| 7 | **Samband** | Keep, cut fields | 80 | 9 fields → 4 (H4). Real email, no placeholders (C1). |
| — | **Footer** | Fix | 45 | Real contact or omit. Bigger tap targets (M4). |

**Cut outright:** `AddOnsSection` (→ chip row), `ProcessSection`'s "Hvað fær þú?" box, `SolutionSection`'s 4 outcome cards, and the 3 already-orphaned components.

**Recommended order:** the merged "why" section earns its place at #2 because a cold visitor needs one reason to care. But **proof before price** — that is why Uppbygging moves ahead of Pakkar. Currently a visitor meets the price structure before seeing any evidence you can build anything.

**Two structural notes:**

- **Add a sticky mobile CTA bar.** Even at 9 screens, a visitor who decides at screen 3 must scroll to 9 to act. A persistent bottom bar on mobile ("Fá tilboð") makes page length far less costly and is the single highest-leverage conversion fix on this list.
- **Everything cut can come back behind a click.** Ferlið's detail and the add-ons list are legitimate content for a `/thjonusta` subpage once you have more than one page. Cutting from the landing page is not deleting from the site.

---

## Suggested order of work

**Phase 0 — unblock (do first, ~15 min)**
1. Stash/branch the uncommitted a11y work, `git pull` to get `4768267`, re-apply the a11y fixes onto the new base. Nothing else can proceed safely until local matches production. *(Blocker 0)*

**Phase 1 — stop the bleeding (this week)**
2. **Wire up the contact form** — or replace it with `mailto:`. Every day it stays up, leads vanish. *(C2)*
3. Real contact info in footer + contact section; delete rows you cannot fill. *(C1)*
4. Fix the invisible add-on cards, or delete the section as part of step 7. *(C4)*
5. `robots: { index: false }` on both legal pages until reviewed. *(C3)*

**Phase 2 — the length problem (your main concern)**
6. Merge Vandinn + Þjónustan; 3 paragraphs → 1 conclusion-first lead. *(H3)*
7. Delete `AddOnsSection`; absorb into Sérlausn + chip row. *(H2)*
8. Delete "Hvað fær þú?"; keep one contents list under Pakkar. *(H1)*
9. Reorder: proof (Uppbygging) before price (Pakkar); reframe the demo cards.
10. Cut the form to 4 fields. *(H4)*
11. Unify CTA labels on "Fá tilboð"; hero primary → `#samband`. *(H5)*
12. Add the sticky mobile CTA bar.

**Phase 3 — polish**
13. Contrast fixes. *(H6)*
14. One full-bleed color section for rhythm; vary section padding. *(M1, M3)*
15. Single icon system; drop emoji and the `▣`/`⌖` glyphs. *(M2)*
16. Footer tap targets. *(M4)*

**Phase 4 — structure (after the cuts, so you migrate less)**
17. Extract `FeatureCard` + `CardGrid`. *(M5)*
18. Move copy to `src/content/`; de-duplicate `navLinks`. *(M6)*
19. Delete dead components and unused assets; rewrite README. *(N1–N3)*
20. `src/lib/site.ts` with `SITE_URL`; add `sitemap.ts`, `robots.ts`, OG image, `metadataBase`. *(M7)*
21. Add analytics — so Phase 2's effect is measurable. *(M7)*
22. `LocalBusiness` JSON-LD — **after** C1 supplies the real business details. *(M7)*

**Phase 5 — the real fix for credibility**
23. Build one real demo site; replace the fictional cards. *(Dæmi, Option A)*
24. Complete the legal pages, remove the draft banners, un-noindex. *(C3)*

---

## Decisions I need from you

**D1 — Which version is the source of truth?** I have assumed `origin/master` (production) is canonical and your local working-tree edits are to be re-applied on top. Confirm — if any of your local copy changes were deliberate improvements over production, tell me which and I will preserve them rather than discard them. Also: is `origin/codex/ux-legal-pages` dead, or is there work on it to keep?

**D2 — Pricing.** There is no price or price range anywhere on the site. For a small-business buyer comparing options, no price anchor is significant friction — many will not send an inquiry precisely because they cannot tell whether you are 80k or 800k. Do you want a "Frá X kr." anchor on the packages? This is a business decision, not a code one, but it likely affects conversion more than everything in Phase 3 combined.

**D3 — Phone number and address.** Do these exist yet? Determines whether C1 fills the rows or deletes them, and whether `LocalBusiness` JSON-LD is viable.

**D4 — Custom domain.** Is `foxel.is` coming, and roughly when? If soon, I will route all metadata through one `SITE_URL` constant now and skip anything that would need redoing.

**D5 — Form backend.** Resend (you own the sending domain, needs an API route) or Formspree (fastest, no backend)? Determines how C2 gets fixed, and which processor to name in the privacy policy.

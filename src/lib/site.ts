/**
 * Single source of truth for the business details behind Heimasíðan.
 *
 * These appear in several places (footer, contact section, contact form error
 * fallback, and in LocalBusiness structured data). Keeping them here stops one
 * of them drifting out of date, which is how the site ended up shipping
 * "setja inn síðar" in four places.
 */

/**
 * Rekstraraðili Heimasíðunnar.
 *
 * Þetta er ekki ófrágengið: Heimasíðan er vörumerki Foxel ehf. og sami
 * lögaðili stendur að baki, staðfest af eiganda. Nafnið og kennitalan hér
 * fyrir neðan eiga því alltaf að fylgjast að. Aldrei breyta öðru án hins.
 */
export const LEGAL_NAME = "Foxel ehf.";

/** Icelandic company registration number (kennitala) for LEGAL_NAME. */
export const KENNITALA = "500925-0270";

/** Public contact address. Do not use a personal address here. */
export const CONTACT_EMAIL = "heimasidan@heimasidan.is";

/**
 * Canonical production origin. Still the Vercel host: change this the moment
 * heimasidan.is resolves, since canonical tags and the sitemap are built on it.
 */
export const SITE_URL = "https://foxel-veflausnir.vercel.app";

export const SITE_NAME = "Heimasíðan";

export const SITE_DESCRIPTION =
  "Skýrar vefsíður á föstu verði fyrir íslensk iðnaðar- og þjónustufyrirtæki.";

/** Merkið. Ljósa útgáfan er fyrir dökkan grunn (fótinn). */
export const LOGO_SRC = "/logo-heimasidan.png";
export const LOGO_LIGHT_SRC = "/logo-heimasidan-light.png";

/** Náttúruleg stærð merkisins eftir að bakgrunnurinn var klipptur af. */
export const LOGO_SIZE = { width: 1753, height: 524 } as const;

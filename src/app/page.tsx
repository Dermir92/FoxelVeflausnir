import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SolutionSection from "@/components/SolutionSection";
import PackagesSection from "@/components/PackagesSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import {
  CONTACT_EMAIL,
  KENNITALA,
  LEGAL_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: LEGAL_NAME,
  alternateName: SITE_NAME,
  identifier: KENNITALA,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  email: CONTACT_EMAIL,
  description: SITE_DESCRIPTION,
  priceRange: "129.000 kr. án vsk.",
  areaServed: {
    "@type": "Country",
    name: "Ísland",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="flex-1">
        <Hero />
        <SolutionSection />
        <PortfolioSection />
        <PackagesSection />
        <ProcessSection />
        <FAQSection />
        <ContactSection />
      </main>
    </>
  );
}

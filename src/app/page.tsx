import type { Metadata } from "next";
import { CapabilityShowcase } from "@/components/home/CapabilityShowcase";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { ServiceAreaPreview } from "@/components/home/ServiceAreaPreview";
import { VeteranOwned } from "@/components/home/VeteranOwned";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Technology Support, Business IT & Software Solutions",
  description:
    "Computer support, business technology, networking, automation, and software solutions from Collinsville for Northeast Alabama.",
};

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: business.name,
    description: business.positioning,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Collinsville",
      addressRegion: "AL",
      addressCountry: "US",
    },
    areaServed: "Northeast Alabama",
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        // Static business facts only; contact details remain omitted until supplied.
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Next.js JSON-LD pattern with static, escaped data.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <VeteranOwned />
      <ServiceAreaPreview />
      <CapabilityShowcase />
      <FinalCTA />
    </main>
  );
}

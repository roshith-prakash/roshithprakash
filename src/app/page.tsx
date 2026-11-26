import type { Metadata } from "next";
import PortalNav from "@/components/PortalNav";
import PortalHero from "@/components/portal/PortalHero";
import StatementFold from "@/components/portal/StatementFold";
import ProjectDeck from "@/components/portal/ProjectDeck";
import SkillsAndExp from "@/components/portal/SkillsAndExp";
import CloseFold from "@/components/portal/CloseFold";
import { SITE_URL } from "@/data/caseStudies";
import { languages } from "@/data/languages";

export const metadata: Metadata = {
  title: "Roshith Prakash — Full Stack Developer",
  description:
    "Full Stack Developer based in Mumbai, India. Building scalable applications with React, Next.js, TypeScript, Node.js, Express, MongoDB, SQL, Prisma ORM, and AWS.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Roshith Prakash",
    url: SITE_URL,
    jobTitle: "Full Stack Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    email: "mailto:roshithprakash07@gmail.com",
    sameAs: [
      "https://github.com/roshith-prakash",
      "https://www.linkedin.com/in/roshith-prakash/",
    ],
    knowsAbout: languages.map((skill) => skill.name),
  };

  return (
    <main
      className="relative w-full min-h-screen text-[#EDE7DC] font-sora selection:bg-[#E8913C] selection:text-[#0A0C0E]"
      style={{
        backgroundColor: "var(--ground)",
        color: "var(--ink)",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <PortalNav />
      <PortalHero />
      <StatementFold />
      <ProjectDeck />
      <SkillsAndExp />
      <CloseFold />
    </main>
  );
}

import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Roshith Prakash via LinkedIn, Email, or GitHub for full-stack software engineering roles, collaborations, and technical inquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — Roshith Prakash",
    description:
      "Connect with Roshith Prakash for software engineering roles and technical collaborations.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}

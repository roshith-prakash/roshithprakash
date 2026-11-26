import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Roshith Prakash — Full Stack Developer from Mumbai, India. Background in MERN stack development, experience at WhatCode, and MCA & BSc.IT education.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — Roshith Prakash",
    description:
      "Full Stack Developer from Mumbai, India. Experience at WhatCode, MCA at NMIMS MPSTME, and MERN Stack expertise.",
    url: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}

import type { Metadata, Viewport } from "next";
import { Syne, Sora, Inter, DM_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_URL } from "@/data/caseStudies";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0C0E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Roshith Prakash — Full Stack Developer",
    template: "%s — Roshith Prakash",
  },
  description:
    "Portfolio of Roshith Prakash, a Full Stack Developer based in Mumbai, India, specializing in React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Prisma ORM, and scalable web applications.",
  keywords: [
    "Roshith Prakash",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Mumbai Software Engineer",
    "Web Developer Portfolio",
    "Node.js",
    "Prisma ORM",
  ],
  authors: [{ name: "Roshith Prakash", url: SITE_URL }],
  creator: "Roshith Prakash",
  publisher: "Roshith Prakash",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Roshith Prakash",
    title: "Roshith Prakash — Full Stack Developer",
    description:
      "Full Stack Developer based in Mumbai, India. Crafting scalable web applications, AI platforms, and refined user experiences.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Roshith Prakash — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roshith Prakash — Full Stack Developer",
    description:
      "Full Stack Developer based in Mumbai, India. Crafting scalable web applications, AI platforms, and refined user experiences.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${sora.variable} ${inter.variable} ${dmSans.variable}`}
    >
      <body
        className="font-sora antialiased selection:bg-[#E8913C] selection:text-[#0A0C0E]"
        style={{
          backgroundColor: "var(--ground)",
          color: "var(--ink)",
        }}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

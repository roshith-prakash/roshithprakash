import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { caseStudies, getCaseStudyBySlug, SITE_URL } from "@/data/caseStudies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${study.title} — Case Study`,
    description: study.oneLiner,
    alternates: {
      canonical: `/projects/${study.slug}`,
    },
    openGraph: {
      title: `${study.title} — Case Study | Roshith Prakash`,
      description: study.oneLiner,
      url: `${SITE_URL}/projects/${study.slug}`,
      type: "article",
      images: [
        {
          url: study.imageSrc,
          width: 1860,
          height: 920,
          alt: study.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} — Case Study`,
      description: study.oneLiner,
      images: [study.imageSrc],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: study.title,
    description: study.oneLiner,
    image: study.imageSrc,
    url: study.siteLink || `${SITE_URL}/projects/${study.slug}`,
    applicationCategory: "WebApplication",
    author: {
      "@type": "Person",
      name: "Roshith Prakash",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <CaseStudyLayout
        title={study.title}
        oneLiner={study.oneLiner}
        techChipText={study.techChipText}
        siteLink={study.siteLink}
        imageSrc={study.imageSrc}
        imageAlt={study.imageAlt}
        overview={study.overview}
        note={study.note}
        features={study.features}
        techStack={study.techStack}
        extraSections={study.extraSections}
      />
    </>
  );
}

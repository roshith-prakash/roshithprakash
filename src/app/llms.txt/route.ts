import { NextResponse } from "next/server";
import { caseStudies, SITE_URL } from "@/data/caseStudies";
import { languages } from "@/data/languages";

export const dynamic = "force-static";

export function GET() {
  const skillsList = languages.map((s) => s.name).join(", ");
  const projectLinks = caseStudies
    .map(
      (cs) =>
        `- [${cs.title}](${SITE_URL}/projects/${cs.slug}): ${cs.oneLiner} (${cs.techChipText})`
    )
    .join("\n");

  const content = `# Roshith Prakash — Full Stack Developer

> Personal portfolio of Roshith Prakash, a Full Stack Developer based in Mumbai, India, specializing in React, Next.js, TypeScript, Node.js, Express.js, MongoDB, SQL, Prisma ORM, AWS, and AI-powered web applications.

- Full-context version for LLMs: [llms-full.txt](${SITE_URL}/llms-full.txt)
- Resume (PDF): [roshithprakash_resume.pdf](${SITE_URL}/roshithprakash_resume.pdf)
- Email: roshithprakash07@gmail.com
- GitHub: https://github.com/roshith-prakash
- LinkedIn: https://www.linkedin.com/in/roshith-prakash/

## Core Pages

- [Home](${SITE_URL}/): Interactive portal landing page featuring philosophy, project deck, technical stack, and experience.
- [About](${SITE_URL}/about): Detailed biography, work experience at WhatCode, MCA & BSc.IT academic background, and personal info.
- [Projects](${SITE_URL}/projects): Curated portfolio of full-stack web applications, AI tools, component libraries, and IoT systems.
- [Contact](${SITE_URL}/contact): Direct contact channels via LinkedIn, Email, and GitHub.

## Technical Skills

${skillsList}

## Case Studies

${projectLinks}
- [Re-use-it! CLI](https://www.npmjs.com/package/reuseit): CLI to integrate Re-use-it! components & snippets directly into your project.
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

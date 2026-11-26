import { NextResponse } from "next/server";
import { caseStudies, SITE_URL } from "@/data/caseStudies";
import { languages } from "@/data/languages";

export const dynamic = "force-static";

export function GET() {
  const skillsSection = languages
    .map((s, i) => `${i + 1}. ${s.name}${s.category ? ` (${s.category})` : ""}`)
    .join("\n");

  const projectsSection = caseStudies
    .map((cs) => {
      const overviewText = Array.isArray(cs.overview)
        ? cs.overview.join("\n\n")
        : cs.overview;
      const featuresText = cs.features.map((f) => `- ${f}`).join("\n");
      const stackText = cs.techStack
        .map((t) => `- ${t.name}${t.category ? ` (${t.category})` : ""}`)
        .join("\n");
      const extrasText = cs.extraSections
        ? cs.extraSections
            .map(
              (sec) =>
                `#### ${sec.title}\n${sec.items.map((item) => `- ${item}`).join("\n")}`
            )
            .join("\n\n")
        : "";

      return `### ${cs.title}
- Case Study URL: ${SITE_URL}/projects/${cs.slug}
- Live URL: ${cs.siteLink || "Offline / Dismantled"}
- Stack Summary: ${cs.techChipText}
- Summary: ${cs.oneLiner}

#### Overview
${overviewText}${cs.note ? `\n\n*${cs.note}*` : ""}

#### Key Features
${featuresText}

#### Tech Stack
${stackText}${extrasText ? `\n\n${extrasText}` : ""}`;
    })
    .join("\n\n---\n\n");

  const content = `# Roshith Prakash — Full Stack Developer (Full Context)

> Complete machine-readable portfolio of Roshith Prakash, a Full Stack Developer based in Andheri, Mumbai, Maharashtra, India.

## Contact & Profiles

- Website: ${SITE_URL}
- Email: roshithprakash07@gmail.com
- LinkedIn: https://www.linkedin.com/in/roshith-prakash/
- GitHub: https://github.com/roshith-prakash
- Resume PDF: ${SITE_URL}/roshithprakash_resume.pdf
- Location: Andheri, Mumbai, Maharashtra, India
- Languages Spoken: English, Hindi, Marathi, Malayalam
- Interests & Hobbies: Writing, Football, Formula 1, Gaming

---

## Biography

Hi, I am an avid learner and full stack developer who uses the MERN Stack to develop exciting web applications. I aspire to learn each and every day, for to live is to learn. Seeking opportunities where skills can be creatively utilized to develop interesting solutions while being resourceful and attaining professional growth.

---

## Experience

### MERN Developer — WhatCode (Oct 2023 – Mar 2024)
- Developed interactive and responsive front-end applications using React and Tailwind CSS.
- Built backend web servers and API endpoints with Node.js and Express.
- Implemented data persistence with MongoDB and Prisma ORM, integrating Firebase Authentication.

---

## Education

- **MCA (Master of Computer Applications)** — NMIMS MPSTME, Mumbai (2025 – 2027 · Ongoing) · CGPA 9.80
- **BSc. (I.T.)** — Bhavans College, Mumbai (2020 – 2023) · CGPA 9.78
- **HSC Science (I.T.)** — Bhavans College, Mumbai (2018 – 2020) · 77.78%
- **SSC** — Marol Education Academy's High School (2018) · 92.20%

---

## Technical Skills (Ordered)

${skillsSection}

---

## Projects & Case Studies

${projectsSection}

---

### Re-use-it! CLI
- Package URL: https://www.npmjs.com/package/reuseit
- Summary: CLI to integrate Re-use-it! components & snippets directly into your project, speeding the development flow.
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

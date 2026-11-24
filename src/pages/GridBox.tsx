import CaseStudyLayout from "../components/CaseStudyLayout";

export default function GridBox() {
  return (
    <CaseStudyLayout
      title="GridBox F1"
      oneLiner="GridBox F1: Your go-to hub for all Formula 1 stats, standings, and race insights, bringing the thrill of F1 right to your screen."
      techChipText="React · TypeScript · Jolpica API · Node.js"
      siteLink="https://gridbox-f1.vercel.app/"
      imageSrc="https://res.cloudinary.com/dvwdsxirc/image/upload/v1746777404/Screenshot_2025-05-09_132500_wp4c1u.png"
      imageAlt="GridBox F1 interface"
      overview="Formula 1's meteoric rise in popularity has captivated a global audience with its thrilling races, cutting-edge technology, and charismatic drivers. To channel this growing interest and my passion for F1, I developed 'GridBox F1' - a comprehensive Formula 1 information website."
      features={[
        "Explore driver and constructor standings from past and current seasons.",
        "View the complete season schedule with race dates and locations.",
        "Read in-depth articles and blogs on the latest F1 news and insights.",
        "Discover drivers and constructors by season.",
        "Learn about iconic circuits, including layouts and geographic locations.",
      ]}
      techStack={[
        { name: "React (Vite + TypeScript)", category: "Frontend" },
        { name: "Tanstack Query", category: "Data Fetching" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "Node.js + Express", category: "Backend" },
        { name: "Prisma ORM", category: "ORM" },
        { name: "Jolpica API", category: "External API" },
      ]}
    />
  );
}

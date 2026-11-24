import CaseStudyLayout from "../components/CaseStudyLayout";

export default function GridManager() {
  return (
    <CaseStudyLayout
      title="Grid Manager"
      oneLiner="Grid Manager is a fantasy F1 app which allows you to compete by creating your fantasy F1 teams."
      techChipText="React · TypeScript · Node.js · Prisma"
      siteLink="https://grid-manager.vercel.app/"
      imageSrc="https://res.cloudinary.com/do8rpl9l4/image/upload/v1744109729/Screenshot_2025-04-03_140349_c6fhp0.png"
      imageAlt="Grid Manager interface"
      overview="Grid Manager is an F1 fantasy app designed for racing enthusiasts to compete, strategize, and connect. Build your dream team, challenge friends, and track your performance in real time. Engage with the F1 community, and fuel your passion for racing with this dynamic and immersive platform."
      note="Note: Grid Manager is still in development and is prone to changes."
      features={[
        "Create and manage your F1 fantasy team.",
        "Signup / Login using your Google Account.",
        "Track your team's performance over the Grand Prix Weekend.",
        "Join and compete in private and public leagues.",
      ]}
      techStack={[
        { name: "React (Vite + TypeScript)", category: "Frontend" },
        { name: "Tanstack Query", category: "Data Fetching" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "Firebase Auth", category: "Auth" },
        { name: "Node JS + Express", category: "Backend" },
        { name: "Prisma ORM", category: "ORM" },
        { name: "Multer + Cloudinary SDK", category: "Media Storage" },
      ]}
    />
  );
}

import CaseStudyLayout from "../components/CaseStudyLayout";

export default function Gallery() {
  return (
    <CaseStudyLayout
      title="Clarivis"
      oneLiner="Clarivis is a photo and video gallery website displaying content using the Pexels API."
      techChipText="React · Tanstack Query · Pexels API"
      siteLink="https://clarivis.vercel.app/"
      imageSrc="https://res.cloudinary.com/dvwdsxirc/image/upload/v1744815122/Screenshot_2025-04-16_201957_damyjf.png"
      imageAlt="Clarivis gallery interface"
      overview="Developed a Single Page App (SPA) React application to search and display high-definition images and videos from the web using the Pexels API, delivering an immersive visual exploration experience."
      features={[
        "Displays curated photography and video highlights updated daily.",
        "Search functionality enabling users to find images and videos via keywords and prompts.",
        "Full-screen high-resolution viewing modal for detailed media inspection.",
      ]}
      techStack={[
        { name: "React", category: "Frontend" },
        { name: "Tanstack Query", category: "Data Fetching" },
        { name: "Pexels API", category: "External API" },
        { name: "Tailwind CSS", category: "Styling" },
      ]}
    />
  );
}

import CaseStudyLayout from "../components/CaseStudyLayout";

export default function SmartSlide() {
  return (
    <CaseStudyLayout
      title="SmartSlide AI"
      oneLiner="SmartSlide AI is an AI based presentation and document generation platform."
      techChipText="React · Gemini AI · Node.js · PptxGenJS"
      siteLink="https://smartslide-ai.vercel.app/"
      imageSrc="https://res.cloudinary.com/do8rpl9l4/image/upload/v1729526872/smartslide_m5mgwt.png"
      imageAlt="Screenshot of SmartSlide AI"
      overview="SmartSlide AI is an innovative application that harnesses the power of artificial intelligence to generate presentation slides effortlessly. By simply providing a topic, users can receive a fully structured and customizable slide deck in minutes. The app is designed to save time and enhance productivity, making it ideal for students, educators, and professionals who need to create presentations quickly without sacrificing quality or creativity."
      features={[
        "AI-Driven Content Generation: Automatically generate slide content by providing a topic, saving time on research and formatting.",
        "User-Friendly Interface: A simple and intuitive UI that allows for quick navigation and seamless slide editing.",
        "Responsive Design: Optimized for desktop and mobile devices, ensuring a smooth experience on any screen size.",
        "Downloadable Presentations: Easily download your completed slide decks for offline use or sharing.",
      ]}
      techStack={[
        { name: "React (Vite + TypeScript)", category: "Frontend" },
        { name: "Tanstack Query", category: "Data Fetching" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "Node.js + Express", category: "Backend" },
        { name: "Gemini AI", category: "AI Model" },
        { name: "Pptxgenjs & Docx", category: "Export Engine" },
      ]}
    />
  );
}

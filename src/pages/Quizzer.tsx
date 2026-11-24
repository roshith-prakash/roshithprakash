import CaseStudyLayout from "../components/CaseStudyLayout";

export default function Quizzer() {
  return (
    <CaseStudyLayout
      title="Quizzer AI"
      oneLiner="Quizzer AI is an interactive quiz platform where users can quiz themselves on any topic with AI-generated questions."
      techChipText="React · Gemini AI · Node.js · Socket.IO"
      siteLink="https://quizzer-ai.vercel.app/"
      imageSrc="https://res.cloudinary.com/dvwdsxirc/image/upload/v1746777494/Screenshot_2025-05-09_132802_njmtrk.png"
      imageAlt="Quizzer AI interface"
      overview="Quizzer AI is an interactive AI-powered quiz app that generates dynamic and engaging quizzes on any topic. Powered by Google's Gemini AI, Quizzer AI offers personalized quizzes to enhance learning and test your knowledge."
      features={[
        "Integrated Gemini AI into a Node JS server.",
        "Generates FlashCards, MCQs, or True/False questions on the user's selected topic.",
        "Multiplayer mode allows users to compete simultaneously.",
      ]}
      techStack={[
        { name: "React (Vite + TypeScript)", category: "Frontend" },
        { name: "Tanstack Query", category: "Data Fetching" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "Node JS + Express", category: "Backend" },
        { name: "Socket.IO", category: "Realtime" },
        { name: "Gemini AI", category: "AI Model" },
      ]}
    />
  );
}

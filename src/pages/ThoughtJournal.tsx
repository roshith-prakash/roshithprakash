import CaseStudyLayout from "../components/CaseStudyLayout";

export default function ThoughtJournal() {
  return (
    <CaseStudyLayout
      title="The Thought Journal"
      oneLiner="The Thought Journal is a free-to-use blogging website for sharing thoughts & interests."
      techChipText="React · TypeScript · Node.js · Prisma"
      siteLink="https://thethoughtjournal.vercel.app/"
      imageSrc="https://res.cloudinary.com/do8rpl9l4/image/upload/v1718722273/thoughtjournal_llrbq9.png"
      imageAlt="The Thought Journal interface"
      overview="A blog platform with social media features designed for sharing ideas, stories, and insights. Connect with readers, spark conversations, and build your community with this intuitive and expressive platform."
      features={[
        "Write blogs using a rich text editor.",
        "Signup / Login using Google Account.",
        "Create and Manage your Journal profile.",
        "Search posts based on title, category, or keywords.",
        "Like & comment on posts.",
        "View the accounts that you follow / are following you.",
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

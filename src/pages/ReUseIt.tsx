import CaseStudyLayout from "../components/CaseStudyLayout";

export default function ReUseIt() {
  return (
    <CaseStudyLayout
      title="Re-use-it!"
      oneLiner="Re-use-it! is a web library containing Reusable and Customizable React components created with Tailwind CSS."
      techChipText="React · Tailwind CSS · NPM"
      siteLink="https://re-use-it.vercel.app/"
      imageSrc="https://res.cloudinary.com/do8rpl9l4/image/upload/v1738659332/Screenshot_2025-02-04_142440_ci5q29.png"
      imageAlt="Re-use-it component library screenshot"
      overview="A collection of reusable and customizable React components styled with Tailwind CSS. These components are designed to provide a consistent look and feel across your applications while being flexible enough to adapt to different use cases."
      features={[
        "Collection of 27+ accessible, styled React components built with Tailwind CSS.",
        "Curated library of custom React hooks and backend code snippets.",
        "Accompanying CLI tooling for instant component integration into any React project.",
      ]}
      techStack={[
        { name: "React", category: "Frontend" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "TypeScript", category: "Language" },
        { name: "Node.js", category: "CLI Engine" },
        { name: "npm", category: "Package Registry" },
      ]}
      extraSections={[
        {
          title: "Components Catalog",
          items: [
            "Accordion, Accordion Group, Avatar, Badge, Card, Carousel, Checkbox",
            "Drawer, Footer, Loading Placeholder, Modal, Navbar, Password Input",
            "Primary Button, Progress Bar, Radio Button, Secondary Button, Security Headers",
            "Select, Slider, Switch, Table, Text Input, Text Area, Timeline, Toggle, Tooltip",
          ],
        },
        {
          title: "Code Snippets & Hooks",
          items: [
            "useDebounce Hook, Regex Functions, Shuffle Array, Minutes to Read",
            "Format Number (Intl), Axios Instance, Multer Configuration, Cloudinary SDK, Image Compression",
          ],
        },
      ]}
    />
  );
}

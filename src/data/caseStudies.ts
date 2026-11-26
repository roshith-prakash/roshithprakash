export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://roshithprakash.vercel.app";

export interface CaseStudyTechItem {
  name: string;
  category?: string;
}

export interface CaseStudyExtraSection {
  title: string;
  items: string[];
}

export interface CaseStudyData {
  slug: string;
  title: string;
  oneLiner: string;
  techChipText: string;
  siteLink?: string;
  imageSrc: string;
  imageAlt: string;
  overview: string | string[];
  note?: string;
  features: string[];
  techStack: CaseStudyTechItem[];
  extraSections?: CaseStudyExtraSection[];
}

export const caseStudies: CaseStudyData[] = [
  {
    slug: "gridmanager",
    title: "Grid Manager",
    oneLiner:
      "Grid Manager is a fantasy F1 app which allows you to compete by creating your fantasy F1 teams.",
    techChipText: "React · TypeScript · Node.js · Prisma",
    siteLink: "https://grid-manager.vercel.app/",
    imageSrc:
      "https://res.cloudinary.com/do8rpl9l4/image/upload/v1744109729/Screenshot_2025-04-03_140349_c6fhp0.png",
    imageAlt: "Grid Manager interface",
    overview:
      "Grid Manager is an F1 fantasy app designed for racing enthusiasts to compete, strategize, and connect. Build your dream team, challenge friends, and track your performance in real time. Engage with the F1 community, and fuel your passion for racing with this dynamic and immersive platform.",
    note: "Note: Grid Manager is still in development and is prone to changes.",
    features: [
      "Create and manage your F1 fantasy team.",
      "Signup / Login using your Google Account.",
      "Track your team's performance over the Grand Prix Weekend.",
      "Join and compete in private and public leagues.",
    ],
    techStack: [
      { name: "React (Vite + TypeScript)", category: "Frontend" },
      { name: "Tanstack Query", category: "Data Fetching" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Firebase Auth", category: "Auth" },
      { name: "Node JS + Express", category: "Backend" },
      { name: "Prisma ORM", category: "ORM" },
      { name: "Multer + Cloudinary SDK", category: "Media Storage" },
    ],
  },
  {
    slug: "thoughtjournal",
    title: "The Thought Journal",
    oneLiner:
      "The Thought Journal is a free-to-use blogging website for sharing thoughts & interests.",
    techChipText: "React · TypeScript · Node.js · Prisma",
    siteLink: "https://thethoughtjournal.vercel.app/",
    imageSrc:
      "https://res.cloudinary.com/do8rpl9l4/image/upload/v1718722273/thoughtjournal_llrbq9.png",
    imageAlt: "The Thought Journal interface",
    overview:
      "A blog platform with social media features designed for sharing ideas, stories, and insights. Connect with readers, spark conversations, and build your community with this intuitive and expressive platform.",
    features: [
      "Write blogs using a rich text editor.",
      "Signup / Login using Google Account.",
      "Create and Manage your Journal profile.",
      "Search posts based on title, category, or keywords.",
      "Like & comment on posts.",
      "View the accounts that you follow / are following you.",
    ],
    techStack: [
      { name: "React (Vite + TypeScript)", category: "Frontend" },
      { name: "Tanstack Query", category: "Data Fetching" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Firebase Auth", category: "Auth" },
      { name: "Node JS + Express", category: "Backend" },
      { name: "Prisma ORM", category: "ORM" },
      { name: "Multer + Cloudinary SDK", category: "Media Storage" },
    ],
  },
  {
    slug: "quizzer",
    title: "Quizzer AI",
    oneLiner:
      "Quizzer AI is an interactive quiz platform where users can quiz themselves on any topic with AI-generated questions.",
    techChipText: "React · Gemini AI · Node.js · Socket.IO",
    siteLink: "https://quizzer-ai.vercel.app/",
    imageSrc:
      "https://res.cloudinary.com/dvwdsxirc/image/upload/v1746777494/Screenshot_2025-05-09_132802_njmtrk.png",
    imageAlt: "Quizzer AI interface",
    overview:
      "Quizzer AI is an interactive AI-powered quiz app that generates dynamic and engaging quizzes on any topic. Powered by Google's Gemini AI, Quizzer AI offers personalized quizzes to enhance learning and test your knowledge.",
    features: [
      "Integrated Gemini AI into a Node JS server.",
      "Generates FlashCards, MCQs, or True/False questions on the user's selected topic.",
      "Multiplayer mode allows users to compete simultaneously.",
    ],
    techStack: [
      { name: "React (Vite + TypeScript)", category: "Frontend" },
      { name: "Tanstack Query", category: "Data Fetching" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Node JS + Express", category: "Backend" },
      { name: "Socket.IO", category: "Realtime" },
      { name: "Gemini AI", category: "AI Model" },
    ],
  },
  {
    slug: "gridbox",
    title: "GridBox F1",
    oneLiner:
      "GridBox F1: Your go-to hub for all Formula 1 stats, standings, and race insights, bringing the thrill of F1 right to your screen.",
    techChipText: "React · TypeScript · Jolpica API · Node.js",
    siteLink: "https://gridbox-f1.vercel.app/",
    imageSrc:
      "https://res.cloudinary.com/dvwdsxirc/image/upload/v1746777404/Screenshot_2025-05-09_132500_wp4c1u.png",
    imageAlt: "GridBox F1 interface",
    overview:
      "Formula 1's meteoric rise in popularity has captivated a global audience with its thrilling races, cutting-edge technology, and charismatic drivers. To channel this growing interest and my passion for F1, I developed 'GridBox F1' - a comprehensive Formula 1 information website.",
    features: [
      "Explore driver and constructor standings from past and current seasons.",
      "View the complete season schedule with race dates and locations.",
      "Read in-depth articles and blogs on the latest F1 news and insights.",
      "Discover drivers and constructors by season.",
      "Learn about iconic circuits, including layouts and geographic locations.",
    ],
    techStack: [
      { name: "React (Vite + TypeScript)", category: "Frontend" },
      { name: "Tanstack Query", category: "Data Fetching" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Node.js + Express", category: "Backend" },
      { name: "Prisma ORM", category: "ORM" },
      { name: "Jolpica API", category: "External API" },
    ],
  },
  {
    slug: "re-use-it",
    title: "Re-use-it!",
    oneLiner:
      "Re-use-it! is a web library containing Reusable and Customizable React components created with Tailwind CSS.",
    techChipText: "React · Tailwind CSS · NPM",
    siteLink: "https://re-use-it.vercel.app/",
    imageSrc:
      "https://res.cloudinary.com/do8rpl9l4/image/upload/v1738659332/Screenshot_2025-02-04_142440_ci5q29.png",
    imageAlt: "Re-use-it component library screenshot",
    overview:
      "A collection of reusable and customizable React components styled with Tailwind CSS. These components are designed to provide a consistent look and feel across your applications while being flexible enough to adapt to different use cases.",
    features: [
      "Collection of 27+ accessible, styled React components built with Tailwind CSS.",
      "Curated library of custom React hooks and backend code snippets.",
      "Accompanying CLI tooling for instant component integration into any React project.",
    ],
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "TypeScript", category: "Language" },
      { name: "Node.js", category: "CLI Engine" },
      { name: "npm", category: "Package Registry" },
    ],
    extraSections: [
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
    ],
  },
  {
    slug: "smartslide",
    title: "SmartSlide AI",
    oneLiner:
      "SmartSlide AI is an AI based presentation and document generation platform.",
    techChipText: "React · Gemini AI · Node.js · PptxGenJS",
    siteLink: "https://smartslide-ai.vercel.app/",
    imageSrc:
      "https://res.cloudinary.com/do8rpl9l4/image/upload/v1729526872/smartslide_m5mgwt.png",
    imageAlt: "Screenshot of SmartSlide AI",
    overview:
      "SmartSlide AI is an innovative application that harnesses the power of artificial intelligence to generate presentation slides effortlessly. By simply providing a topic, users can receive a fully structured and customizable slide deck in minutes. The app is designed to save time and enhance productivity, making it ideal for students, educators, and professionals who need to create presentations quickly without sacrificing quality or creativity.",
    features: [
      "AI-Driven Content Generation: Automatically generate slide content by providing a topic, saving time on research and formatting.",
      "User-Friendly Interface: A simple and intuitive UI that allows for quick navigation and seamless slide editing.",
      "Responsive Design: Optimized for desktop and mobile devices, ensuring a smooth experience on any screen size.",
      "Downloadable Presentations: Easily download your completed slide decks for offline use or sharing.",
    ],
    techStack: [
      { name: "React (Vite + TypeScript)", category: "Frontend" },
      { name: "Tanstack Query", category: "Data Fetching" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Node.js + Express", category: "Backend" },
      { name: "Gemini AI", category: "AI Model" },
      { name: "Pptxgenjs & Docx", category: "Export Engine" },
    ],
  },
  {
    slug: "smartpower",
    title: "SmartPower",
    oneLiner:
      "SmartPower was an IoT-based project that measured a consumer's electrical usage.",
    techChipText: "React Native · Node.js · Raspberry Pi · MySQL",
    imageSrc:
      "https://res.cloudinary.com/do8rpl9l4/image/upload/v1736843699/smartpower1_h9zqby.png",
    imageAlt: "SmartPower architectural overview",
    overview: [
      "The majority of the modern world depends on an energy delivery system that, according to the existing state of affairs, is ineffective and unable to keep up with expanding needs. SmartPower was developed as a smart metering system based on the 'smart grid' philosophy of having an interconnected network of measuring devices for utilities.",
      "The recording of energy consumption data is a tedious and time-consuming manual process, which has been automated in the developed system. The SmartPower system allows for digital transfer of energy consumption data at regular intervals and enables granular measurement and real-time visualization of electrical usage.",
      "The IoT-based system establishes a direct communication channel between consumers and providers, enabling users to view energy consumption in real time and anticipate future usage through predictive analytics.",
    ],
    note: "Note: The project has been dismantled and is no longer available to use.",
    features: [
      "Eliminates the repeated manual task of recording power usage.",
      "Allows for granular storage of readings which can be later aggregated and analyzed.",
      "Allows users to view power consumption in real time.",
      "Graphical representation of historical and real-time usage data.",
      "Predictive algorithms for forecasting upcoming electrical usage.",
      "Remote appliance on/off toggling regardless of user location.",
    ],
    techStack: [
      { name: "React Native", category: "Mobile Frontend" },
      { name: "Node JS + Express JS", category: "Backend" },
      { name: "MySQL", category: "Database" },
      { name: "Python", category: "Hardware Scripting" },
      { name: "Raspberry Pi", category: "Hardware / IoT" },
      { name: "Socket IO", category: "Realtime" },
    ],
    extraSections: [
      {
        title: "Tasks Performed",
        items: [
          "Developed an IoT-based smart electricity meter to measure and store electrical usage using Raspberry Pi.",
          "Developed an Express-based server deployed on Google Cloud to handle automated telemetry ingestion and predictive analysis.",
          "Engineered a React Native mobile application for Android to display real-time telemetry, historical charts, and device controls.",
        ],
      },
    ],
  },
  {
    slug: "clarivis",
    title: "Clarivis",
    oneLiner:
      "Clarivis is a photo and video gallery website displaying content using the Pexels API.",
    techChipText: "React · Tanstack Query · Pexels API",
    siteLink: "https://clarivis.vercel.app/",
    imageSrc:
      "https://res.cloudinary.com/dvwdsxirc/image/upload/v1744815122/Screenshot_2025-04-16_201957_damyjf.png",
    imageAlt: "Clarivis gallery interface",
    overview:
      "Developed a Single Page App (SPA) React application to search and display high-definition images and videos from the web using the Pexels API, delivering an immersive visual exploration experience.",
    features: [
      "Displays curated photography and video highlights updated daily.",
      "Search functionality enabling users to find images and videos via keywords and prompts.",
      "Full-screen high-resolution viewing modal for detailed media inspection.",
    ],
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Tanstack Query", category: "Data Fetching" },
      { name: "Pexels API", category: "External API" },
      { name: "Tailwind CSS", category: "Styling" },
    ],
  },
  {
    slug: "musicplayer",
    title: "Music Player",
    oneLiner: "A Music Player Application created with React.",
    techChipText: "React · Firebase Auth · Tailwind CSS · Axios",
    siteLink: "https://music-player-rp.vercel.app/",
    imageSrc:
      "https://res.cloudinary.com/do8rpl9l4/image/upload/v1737356962/musicplayer_bnr4vg.png",
    imageAlt: "Music Player interface",
    overview:
      "A Music Player Application built using React + Vite. Experience seamless audio playback with search and playlist filtering in a lightweight, responsive interface.",
    features: [
      "Play and listen to songs with real-time playback controls.",
      "Filter and discover tracks based on title or artist search.",
      "Toggle between all songs and curated top tracks.",
      "User authentication and profile handling via Firebase Auth.",
    ],
    techStack: [
      { name: "React (Vite)", category: "Frontend" },
      { name: "Firebase Auth", category: "Auth" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Axios", category: "HTTP Client" },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
  return caseStudies.find((item) => item.slug === slug);
}

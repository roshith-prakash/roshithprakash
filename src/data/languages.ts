export interface Skill {
  id: number;
  name: string;
  category?: string;
  description?: string;
}

export const languages: Skill[] = [
  // Web Development (Frontend, Backend, Databases, ORM, State, Styling, Testing)
  { id: 1, name: "JavaScript", category: "Language" },
  { id: 2, name: "TypeScript", category: "Language" },
  { id: 3, name: "React", category: "Frontend" },
  { id: 4, name: "Next.js", category: "Frontend" },
  { id: 5, name: "Redux", category: "State Management" },
  { id: 6, name: "Tailwind CSS", category: "Styling" },
  { id: 7, name: "Node.js", category: "Backend" },
  { id: 8, name: "Express.js", category: "Backend" },
  { id: 9, name: "MongoDB", category: "Database" },
  { id: 10, name: "SQL", category: "Database" },
  { id: 11, name: "Prisma ORM", category: "ORM" },
  { id: 12, name: "Jest", category: "Testing" },

  // DevOps, Cloud & Other Languages
  { id: 13, name: "Git", category: "Version Control" },
  { id: 14, name: "GitHub", category: "DevOps" },
  { id: 15, name: "AWS", category: "Cloud" },
  { id: 16, name: "Java", category: "Language" },
  { id: 17, name: "Python", category: "Language" },

  // AI & Data (Last)
  { id: 18, name: "Machine Learning", category: "AI / Data" },
];

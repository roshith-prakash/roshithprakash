import { useEffect } from "react";
import PortalNav from "../components/PortalNav";
import PortalHero from "./portal/PortalHero";
import StatementFold from "./portal/StatementFold";
import ProjectDeck from "./portal/ProjectDeck";
import SkillsAndExp from "./portal/SkillsAndExp";
import CloseFold from "./portal/CloseFold";

export default function Landing() {
  useEffect(() => {
    document.title = "Roshith Prakash — Full Stack Developer";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className="relative w-full min-h-screen text-[#EDE7DC] selection:bg-[#E8913C] selection:text-[#0A0C0E]"
      style={{
        backgroundColor: "var(--ground)",
        color: "var(--ink)",
        fontFamily: "'Sora', system-ui, sans-serif",
      }}
    >
      <PortalNav />
      <PortalHero />
      <StatementFold />
      <ProjectDeck />
      <SkillsAndExp />
      <CloseFold />
    </main>
  );
}

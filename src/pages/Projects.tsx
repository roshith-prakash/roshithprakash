import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PortalNav from "../components/PortalNav";
import CloseFold from "./portal/CloseFold";
import { projects } from "../data/projects";
import { useReveal } from "../hooks/useReveal";

interface ProjectItem {
  title: string;
  description: string;
  imageSrc: string;
  navigateTo?: string;
  siteLink?: string;
}

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const { ref, revealed } = useReveal(0.08);

  return (
    <article
      ref={ref}
      className={`rounded-2xl overflow-hidden flex flex-col justify-between border border-[rgba(237,231,220,0.13)] hover:border-[#E8913C] transition-all duration-300 will-reveal ${
        revealed ? "revealed" : ""
      }`}
      style={{
        backgroundColor: "var(--ground-2)",
        transitionDelay: `${(index % 2) * 120}ms`,
        boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
      }}
    >
      {/* 16:9 screenshot image */}
      <div className="relative w-full aspect-video overflow-hidden bg-[#0A0C0E]">
        <img
          src={project.imageSrc}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101317] via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>

      {/* Card body */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between gap-6">
        <div className="space-y-3">
          <h2 className="font-syne font-bold text-xl sm:text-2xl text-[#EDE7DC]">
            {project.title}
          </h2>
          <p className="font-sora text-sm text-[#9EA5A8] line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Bottom row: Amber internal arrow link and Teal external site link */}
        <div className="pt-4 border-t border-[rgba(237,231,220,0.13)] flex items-center justify-between gap-4">
          <div>
            {project.navigateTo ? (
              <Link
                to={project.navigateTo}
                className="font-sora text-xs uppercase tracking-[0.13em] text-[#E8913C] flex items-center gap-1.5 hover:underline"
              >
                Case Study <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ) : (
              <span className="font-sora text-xs uppercase tracking-[0.13em] text-[#6C7378]">
                CLI Package
              </span>
            )}
          </div>

          <div>
            {project.siteLink && (
              <a
                href={project.siteLink}
                target="_blank"
                rel="noreferrer"
                className="font-sora text-xs uppercase tracking-[0.13em] text-[#2E6B72] hover:text-[#42959e] flex items-center gap-1.5 hover:underline transition-colors"
              >
                Live Site <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const heroReveal = useReveal(0.1);

  useEffect(() => {
    document.title = "Projects — Roshith Prakash";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="relative w-full min-h-screen selection:bg-[#E8913C] selection:text-[#0A0C0E]"
      style={{
        backgroundColor: "var(--ground)",
        color: "var(--ink)",
        fontFamily: "'Sora', system-ui, sans-serif",
      }}
    >
      <PortalNav />

      {/* Hero Strip (55–70vh) */}
      <header
        ref={heroReveal.ref}
        className={`min-h-[60vh] max-h-[70vh] flex flex-col justify-end px-6 md:px-16 lg:px-24 pb-14 pt-28 border-b border-[rgba(237,231,220,0.13)] will-reveal ${
          heroReveal.revealed ? "revealed" : ""
        }`}
      >
        <div className="max-w-5xl mx-auto w-full">
          <p className="font-sora text-[10.5px] uppercase tracking-[0.15em] text-[#6C7378] flex items-center gap-2 mb-4">
            <span className="w-4 h-[1px] bg-[#E8913C]" />
            Work
          </p>
          <h1
            className="font-syne font-extrabold text-[#EDE7DC] tracking-[-0.03em] leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)" }}
          >
            Projects<span style={{ color: "var(--amber)" }}>.</span>
          </h1>
          <p className="font-sora text-base sm:text-xl text-[#9EA5A8] tracking-[-0.01em] max-w-2xl leading-relaxed">
            To live is to learn, and to learn is to develop. A curated collection
            of web applications, AI platforms, and full-stack systems.
          </p>
        </div>
      </header>

      {/* Main Grid Section */}
      <main className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </main>

      <CloseFold />
    </div>
  );
}

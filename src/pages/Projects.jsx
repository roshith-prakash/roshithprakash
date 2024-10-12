import React, { useEffect, useState } from "react";
import { Footer, OutlineButton } from "../components";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

// Reusable ProjectCard component
const ProjectCard = ({ title, description, imageSrc, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <article className="group w-full rounded-xl border-2 shadow-md relative h-96 hover:scale-105 hover:shadow-2xl transition-all">
      <img
        src={imageSrc}
        alt={`Preview of ${title}`}
        className="h-full w-full rounded-xl"
      />
      <div className="absolute w-full h-full px-5 bg-grey top-0 left-0 rounded-xl opacity-80 lg:opacity-0 group-hover:opacity-90 transition-all flex justify-center items-center">
        <div>
          <h3 className="text-3xl text-center font-semibold">{title}</h3>
          <p className="text-lg text-center mt-5">{description}</p>
          <div className="mt-5 flex justify-center">
            <OutlineButton
              onClick={() => navigate(navigateTo)}
              text="View More"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({ easing: "ease-in-sine", delay: 100 });
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Projects | Roshith Prakash";

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "SmartPower",
      description:
        "SmartPower was an IoT-based project that measured a consumer's electrical usage.",
      imageSrc:
        "https://res.cloudinary.com/do8rpl9l4/image/upload/v1711627110/portfolio/smartpower.png",
      navigateTo: "/projects/smartpower",
    },
    {
      title: "The Thought Journal",
      description:
        "The Thought Journal is a free-to-use blogging website for sharing thoughts & interests.",
      imageSrc:
        "https://res.cloudinary.com/do8rpl9l4/image/upload/v1718722273/thoughtjournal_llrbq9.png",
      navigateTo: "/projects/thoughtjournal",
    },
    {
      title: "Quizzer AI",
      description:
        "Quizzer AI is an interactive quiz platform where users can quiz themselves on any topic with AI-generated questions.",
      imageSrc:
        "https://res.cloudinary.com/do8rpl9l4/image/upload/v1723285531/Screenshot_2024-08-10_155404_z7dtjc.png",
      navigateTo: "/projects/quizzer",
    },
    {
      title: "The Gallery",
      description:
        "The Gallery is a photo gallery website displaying images using the Pexels API.",
      imageSrc:
        "https://res.cloudinary.com/do8rpl9l4/image/upload/v1721305978/gallery_gp7xyl.png",
      navigateTo: "/projects/gallery",
    },
    {
      title: "The GridBox",
      description:
        "The GridBox is a Formula 1 data & statistics website for viewing race data and schedules.",
      imageSrc:
        "https://res.cloudinary.com/do8rpl9l4/image/upload/v1711627111/portfolio/gridbox.png",
      navigateTo: "/projects/gridbox",
    },
  ];

  return (
    <>
      <main className="relative pt-14 pb-32">
        {/* Scroll to Top button */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer border-2 border-cta fixed bottom-10 right-5 bg-white rounded-full p-3 z-20"
            aria-label="Scroll to top"
          >
            <FaRegArrowAltCircleUp className="text-cta text-2xl" />
          </button>
        )}

        <header>
          <h1 className="text-3xl text-center font-semibold">Projects</h1>
          <p className="text-lg text-center px-5 md:px-10 mt-8 lg:max-w-[90%] mx-auto">
            To live is to learn, and to learn is to develop. Let's take a look
            at some of my work.
          </p>
        </header>

        <section
          data-aos="fade-up"
          className="mt-14 max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-y-10 md:gap-x-5 lg:gap-x-14"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              navigateTo={project.navigateTo}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;

import { CTAButton, Footer, OutlineButton } from "../components";
import { useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { projects } from "../data/projects";
import { useEffect } from "react";

// Reusable ProjectCard component
const ProjectCard = ({
  title,
  description,
  imageSrc,
  navigateTo,
  siteLink,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex dark:bg-secondarydarkbg flex-col border-2 rounded-xl shadow-lg hover:scale-105 transition-all overflow-hidden">
      <img
        src={imageSrc}
        alt={`Preview of ${title}`}
        className={`h-72 ${
          title === "SmartPower" && "h-48"
        } object-cover lg:object-contain rounded-t-xl w-full `}
      />
      <div className="relative w-full h-full flex flex-col justify-evenly px-5 z-5 py-10 rounded-t-xl transition-all items-center">
        <h3 className="text-3xl text-center font-semibold">{title}</h3>
        <p className="text-lg text-center mt-5">{description}</p>
        <div className="mt-5 flex flex-wrap gap-x-10 gap-y-5 justify-center">
          {siteLink && (
            <CTAButton
              onClick={() => window.open(siteLink)}
              text="Visit the site"
            />
          )}

          <OutlineButton
            onClick={() => navigate(navigateTo)}
            text="Know More"
          />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  // Set Page title
  useEffect(() => {
    document.title = "Projects | Roshith Prakash";
  }, []);

  return (
    <>
      <main className="relative dark:bg-darkbg dark:text-darkmodetext pt-14 pb-32">
        {/* Scroll to Top button */}

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer border-2 border-cta dark:border-white fixed bottom-10 right-5 bg-white dark:bg-gray-800 rounded-full p-3 z-20"
          aria-label="Scroll to top"
        >
          <FaRegArrowAltCircleUp className="text-cta dark:text-white text-2xl" />
        </button>

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
              key={project?.title}
              title={project?.title}
              description={project?.description}
              imageSrc={project?.imageSrc}
              navigateTo={project?.navigateTo}
              siteLink={project?.siteLink}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;

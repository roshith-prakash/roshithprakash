import { CTAButton, Footer, OutlineButton, ScrollToTop } from "../components";
import { useNavigate } from "react-router-dom";
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
    <div className="min-w-80 flex dark:bg-secondarydarkbg flex-col border-2 dark:border-white/25 rounded-xl shadow-lg hover:scale-105 transition-all overflow-hidden">
      <img
        src={imageSrc}
        alt={`Preview of ${title}`}
        className={`max-h-72 object-cover h-full bg-darkbg w-full `}
      />
      <div className="min-h-80 md:min-h-auto relative w-full h-full flex flex-col justify-evenly px-5 z-5 py-10 rounded-t-xl transition-all items-center">
        <h3 className="text-3xl text-center font-semibold">{title}</h3>
        <p className="text-lg text-center mt-5">{description}</p>
        <div className="mt-5 flex flex-wrap md:gap-x-5 lg:gap-x-10 gap-y-5 justify-center">
          {siteLink && (
            <CTAButton
              onClick={() => window.open(siteLink)}
              text="Explore App!"
              className="w-full md:w-auto"
            />
          )}

          {navigateTo && (
            <OutlineButton
              onClick={() => navigate(navigateTo)}
              text="Learn More!"
              className="w-full md:w-auto"
            />
          )}
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
        <ScrollToTop />

        <header>
          <h1 className="text-3xl text-center font-semibold">Projects</h1>
          <p className="text-lg text-center px-5 md:px-10 mt-8 lg:max-w-[90%] mx-auto">
            To live is to learn, and to learn is to develop. Let's take a look
            at some of my work.
          </p>
        </header>

        <section
          data-aos="fade-up"
          className="mt-14 max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-between gap-y-10 md:gap-x-5 lg:gap-x-14"
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

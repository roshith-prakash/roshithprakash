import React, { useEffect } from "react";
import { Footer, Navbar } from "../components";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Roshith Prakash";
  }, []);
  return (
    <>
      <Navbar />
      <div className="pt-14 pb-32">
        <p className="text-3xl text-center font-semibold">Projects</p>
        <p className="text-lg text-center px-5 md:px-10 mt-8 lg:max-w-[90%] mx-auto">
          Learning through development has been my preferred method of learning.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Projects;

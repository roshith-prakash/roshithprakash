import React, { useEffect } from "react";
import { Footer, Navbar } from "../components";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Roshith Prakash";
  }, []);
  return (
    <>
      <Navbar />
      <div className="min-h-[30rem]">Projects</div>
      <Footer />
    </>
  );
};

export default Projects;

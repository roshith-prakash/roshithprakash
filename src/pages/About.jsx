import React, { useEffect } from "react";
import { Footer, Navbar } from "../components";

const About = () => {
  useEffect(() => {
    document.title = "About | Roshith Prakash";
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-[30rem]">About</div>
      <Footer />
    </>
  );
};

export default About;

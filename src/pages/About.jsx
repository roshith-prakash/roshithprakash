import React, { useEffect } from "react";
import { Footer, Navbar } from "../components";

const About = () => {
  useEffect(() => {
    document.title = "About | Roshith Prakash";
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-14 pb-32">
        <p className="text-3xl text-center font-semibold">About Me</p>
        <p className="text-lg text-center px-5 md:px-10 mt-8 lg:max-w-[90%] mx-auto">
          Hi, I am Roshith Prakash - an avid learner and full stack developer. I
          use the MERN (Mongo, Express, React, NodeJS) Stack to learn and to
          develop exciting web apps. I aspire to learn each and every day, for
          to live is to learn. Seeking opportunities where skills can be
          creatively utilized to develop interesting solutions while being
          resourceful and attaining professional growth.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;

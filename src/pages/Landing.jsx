import React, { useEffect } from "react";
import { Navbar, Footer } from "../components";
import hero from "../assets/hero.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="font-inter pb-32 ">
        {/* ---------------------------------------------------- */}
        {/* Hero Section*/}
        <div data-aos="fade-up" className="lg:flex lg:pt-20">
          <div className="w-full lg:flex-1 px-5">
            <p className="text-5xl pt-20 lg:pt-40 font-semibold font-dmSans text-heading text-center">
              Hey, I am Roshith Prakash
            </p>
            <p className="text-2xl mt-5 font-semibold font-dmSans text-heading text-center">
              A Full Stack Web Developer specializing in the MERN Stack.
            </p>
          </div>
          <div className="w-full pt-14 lg:pt-0 lg:flex-1 flex justify-center items-center">
            <img src={hero} className="w-[80%]" />
          </div>
        </div>

        {/* ---------------------------------------------------- */}
      </div>
      <Footer />
    </>
  );
};

export default Landing;

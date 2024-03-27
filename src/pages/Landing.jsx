import React, { useEffect } from "react";
import { Navbar, Footer, OutlineButton } from "../components";
import hero from "../assets/hero.svg";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { MdOutlineChat } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";

const Landing = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  useEffect(() => {
    document.title = "Roshith Prakash - Full Stack Developer";
  }, []);

  return (
    <>
      <Navbar />
      <div className="font-inter pb-32 relative">
        {/* ---------------------------------------------------- */}

        {/* Scroll to Top button */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer border-2 border-cta fixed bottom-10 right-5 bg-white rounded-full p-3 z-50"
        >
          <FaRegArrowAltCircleUp className="text-cta text-2xl" />
        </div>

        {/* ---------------------------------------------------- */}

        {/* Hero Section*/}
        <div data-aos="fade-up" className="lg:flex min-h-[80vh] lg:pt-20 pb-32">
          <div className="w-full lg:flex-1 px-5">
            <p className="text-5xl pt-20 lg:pt-40 font-semibold font-dmSans text-heading text-center">
              Hey, I am{" "}
              <span className="text-hovercta">
                <Typewriter typeSpeed={70} words={["Roshith Prakash"]} />{" "}
              </span>
            </p>
            <p className="text-2xl mt-5 font-semibold font-dmSans text-heading text-center">
              A Full Stack Web Developer specializing in the MERN Stack.
            </p>
          </div>
          <div className="w-full pt-14 lg:pt-0 lg:flex-1 flex justify-center items-center">
            <img
              src={hero}
              alt="Programmer"
              className="w-[80%] pointer-events-none"
            />
          </div>
        </div>

        {/* ---------------------------------------------------- */}

        {/* Text Section*/}
        <div
          data-aos="fade-up"
          className="bg-gradient-to-tr from-cta to-hovercta  text-white py-20"
        >
          <p className="text-center font-semibold mx-auto px-5 lg:max-w-[60%] text-2xl">
            Hi, I am Roshith. Pleasure to meet you.
          </p>
          <p className="text-center font-medium mx-auto mt-8 px-5 md:max-w-[90%] lg:max-w-[70%] text-grey text-lg">
            I am a Full Stack Web Developer based out of Mumbai, India. Driven
            by a relentless pursuit of excellence, I am poised to make
            meaningful contributions in the realm of Full Stack Development,
            leveraging my diverse skill set, attention to detail, and unwavering
            commitment to innovation and growth. Since starting my career, I
            have contributed to a range of projects including Web3 and AI based
            projects, applying myself to fulfill the product requirements.
          </p>
        </div>

        {/* ---------------------------------------------------- */}

        {/* Linkedin Section */}
        <div data-aos="fade-up" className="bg-white pt-36 pb-16">
          <p className="text-center font-medium text-2xl">
            Interested in working with me?
          </p>
          <p className="text-center mt-4 text-xl">
            Let's connect and talk more.
          </p>
          <div className="mt-10 flex justify-center">
            <OutlineButton
              onClick={() => {
                window.open("https://www.linkedin.com/in/roshith-prakash/");
              }}
              text={
                <div className="flex items-center gap-x-3">
                  <MdOutlineChat className="text-xl" />
                  <span>Let's Connect</span>
                </div>
              }
            />
          </div>
        </div>

        {/* ---------------------------------------------------- */}
      </div>
      <Footer />
    </>
  );
};

export default Landing;

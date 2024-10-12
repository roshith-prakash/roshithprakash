import React, { useEffect, useState } from "react";
import { Footer, OutlineButton, CTAButton } from "../components";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { MdOutlineChat } from "react-icons/md";
import { SlScreenDesktop } from "react-icons/sl";
import { LuCode2 } from "react-icons/lu";
import { FiDatabase } from "react-icons/fi";

import hero from "../assets/hero.svg";
import whatcode from "../assets/whatcode.png";
import cypher from "../assets/cypher.jpeg";
import work from "../assets/working.svg";

import { languages } from "../data/languages.js";

const Landing = () => {
  const navigate = useNavigate();

  const [desc, setDesc] = useState("Hover over a tool to know more!");
  const [name, setName] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
      <main className="font-inter pb-32 relative">
        {/* ---------------------------------------------------- */}

        {/* Scroll to Top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer border-2 border-cta fixed bottom-10 right-5 bg-white rounded-full p-3 z-20"
          aria-label="Scroll to top"
        >
          <FaRegArrowAltCircleUp className="text-cta text-2xl" />
        </button>

        {/* ---------------------------------------------------- */}

        {/* Hero Section*/}
        <section
          data-aos="fade-up"
          className="lg:flex min-h-[80vh] lg:pt-20 pb-32"
        >
          <article className="w-full lg:flex-1 px-5">
            <h1 className="text-5xl pt-20 lg:pt-40 font-semibold font-dmSans text-heading text-center">
              Hey, I am{" "}
              <span className="text-hovercta">
                <Typewriter typeSpeed={70} words={["Roshith Prakash"]} />{" "}
              </span>
            </h1>
            <p className="text-2xl mt-5 font-semibold font-dmSans text-heading text-center">
              A Full Stack Web Developer specializing in the MERN Stack.
              <br />I turn coffee into code.
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton
                onClick={() => {
                  navigate("/about");
                }}
                text="Know More About Me"
              />
            </div>
          </article>
          <div className="w-full pt-14 lg:pt-0 lg:flex-1 flex justify-center items-center">
            <img
              src={hero}
              alt="Programmer"
              className="w-[80%] pointer-events-none"
            />
          </div>
        </section>

        {/* ---------------------------------------------------- */}

        {/* Introduction Section */}
        <section
          data-aos="fade-up"
          className="bg-gradient-to-b from-cta to-hovercta relative text-white py-20 pb-28"
        >
          <h2 className="text-center font-semibold mx-auto px-5 lg:max-w-[60%] text-2xl">
            Hi, I am Roshith. Pleasure to meet you.
          </h2>
          <p className="text-center font-medium mx-auto mt-8 px-5 mb-10 md:max-w-[90%] lg:max-w-[70%] text-grey text-lg">
            I am a Full Stack Web Developer based out of Mumbai, India. Driven
            by a relentless pursuit of excellence, I am poised to make
            meaningful contributions in the realm of Full Stack Development,
            leveraging my diverse skill set, attention to detail, and unwavering
            commitment to innovation and growth. Since starting my career, I
            have contributed to a range of projects including Web3 and AI-based
            projects, applying myself to fulfill the product requirements.
          </p>

          {/* Floating Cards Section */}
          <div className="absolute z-5 mt-10 left-1/2 -translate-x-1/2 flex flex-wrap w-[95%] lg:w-[90%] justify-around gap-x-6 gap-y-4">
            <article className="text-heading w-full lg:flex-1 bg-white border-2 rounded-xl py-8 px-2">
              <div className="bg-hovercta p-4 rounded-full w-fit mx-auto">
                <SlScreenDesktop className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-medium text-center mt-5">
                Front-End Development
              </h3>
              <p className="text-base text-center px-4 mt-6">
                I enjoy developing client-facing apps using frameworks like
                React JS, design libraries such as Tailwind & Material UI, and
                by following a component-based architecture to maintain
                simplicity and readability in code.
              </p>
            </article>
            <article className="text-heading w-full lg:flex-1 bg-white border-2 rounded-xl py-8 px-2">
              <div className="bg-hovercta p-4 rounded-full w-fit mx-auto">
                <LuCode2 className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-medium text-center mt-5">
                Back-End Development
              </h3>
              <p className="text-base text-center px-4 mt-6">
                Backend development is crucial for maintaining and securing
                business logic. I use Node JS for its asynchronous behavior and
                Express JS for creating APIs that serve client applications. I
                prefer using an ORM like Prisma to simplify database management.
              </p>
            </article>
            <article className="text-heading w-full lg:flex-1 bg-white border-2 rounded-xl py-8 px-2">
              <div className="bg-hovercta p-4 rounded-full w-fit mx-auto">
                <FiDatabase className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-medium text-center mt-5">
                Database Management
              </h3>
              <p className="text-base text-center px-4 mt-6">
                Data storage is central to every project. I have experience with
                SQL databases like MySQL and NoSQL databases like MongoDB. I
                ensure secure, efficient data storage, free from duplication,
                and easily accessible when needed.
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------- */}

        {/* Companies Section */}
        <section
          data-aos="fade-up"
          className="bg-white mt-[73rem] md:mt-[60rem] lg:mt-[27rem] pb-10 border-b-[1px] border-[#cfd1d1]"
        >
          <h2 className="text-center px-3 font-medium text-2xl">
            I'm happy to have contributed to some awesome companies:
          </h2>
          <div className="flex flex-wrap justify-center gap-x-10">
            <figure>
              <img
                src={whatcode}
                alt="WhatCode"
                className="max-w-60 pointer-events-none"
              />
              <figcaption className="sr-only">WhatCode</figcaption>
            </figure>
            <figure>
              <img
                src={cypher}
                alt="Cypher Blockchain"
                className="max-w-60 pointer-events-none"
              />
              <figcaption className="sr-only">Cypher Blockchain</figcaption>
            </figure>
          </div>
        </section>

        {/* ---------------------------------------------------- */}

        {/* Tools Section */}
        <section
          data-aos="fade-up"
          className="text-black py-24 border-b-[1px] border-[#cfd1d1]"
        >
          <h2 className="text-heading text-center px-3 font-semibold text-2xl lg:text-4xl flex justify-center items-center gap-x-3">
            <LuCode2 /> My Repository of Tools:
          </h2>

          {/* Tools Logos */}
          <div className="mt-14 py-10 overflow-hidden">
            <div className="flex flex-nowrap gap-x-[4rem] logos-slide w-max">
              {languages.map((item) => (
                <img
                  onMouseEnter={() => {
                    setName(item?.name);
                    setDesc(item.description);
                  }}
                  src={item.image}
                  alt={item.name}
                  key={item.id}
                  className="max-h-32 inline-block"
                />
              ))}
              {languages.map((item) => (
                <img
                  onMouseEnter={() => {
                    setName(item?.name);
                    setDesc(item.description);
                  }}
                  src={item.image}
                  alt={item.name}
                  key={item.id}
                  className="max-h-32 inline-block"
                />
              ))}
            </div>
          </div>
          <p className="px-5 mt-10 text-center text-lg text-cta">
            {name && `${name} - `} {desc}
          </p>
        </section>

        {/* ---------------------------------------------------- */}

        {/* LinkedIn Section */}
        <section
          data-aos="fade-up"
          className="bg-white pt-20 md:pt-36 pb-16 flex flex-wrap"
        >
          <div className="w-full md:flex-1 flex justify-center items-center">
            <img src={work} alt="Work with me" className="w-[70%]" />
          </div>
          <div className="w-full md:flex-1 pt-14 md:pt-8">
            <h2 className="text-center font-medium text-2xl">
              Interested in working with me?
            </h2>
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
        </section>

        {/* ---------------------------------------------------- */}
      </main>
      <Footer />
    </>
  );
};

export default Landing;

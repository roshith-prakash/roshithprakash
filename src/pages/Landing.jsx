import React, { useEffect } from "react";
import { Navbar, Footer, OutlineButton } from "../components";
import { Typewriter } from "react-simple-typewriter";
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
          className="bg-gradient-to-b from-cta to-hovercta relative text-white py-20 pb-28"
        >
          <p className="text-center font-semibold mx-auto px-5 lg:max-w-[60%] text-2xl">
            Hi, I am Roshith. Pleasure to meet you.
          </p>
          <p className="text-center font-medium mx-auto mt-8 px-5 mb-10 md:max-w-[90%] lg:max-w-[70%] text-grey text-lg">
            I am a Full Stack Web Developer based out of Mumbai, India. Driven
            by a relentless pursuit of excellence, I am poised to make
            meaningful contributions in the realm of Full Stack Development,
            leveraging my diverse skill set, attention to detail, and unwavering
            commitment to innovation and growth. Since starting my career, I
            have contributed to a range of projects including Web3 and AI based
            projects, applying myself to fulfill the product requirements.
          </p>

          {/* Floating Cards Section */}
          <div className="absolute z-5 mt-10 left-1/2 -translate-x-1/2 flex flex-wrap w-[95%] lg:w-[90%] justify-around gap-x-6 gap-y-4">
            {/* FrontEnd */}
            <div className="text-heading w-full lg:flex-1 bg-white border-2  rounded-xl py-8 px-2">
              <div className="bg-hovercta p-4 rounded-full w-fit mx-auto">
                <SlScreenDesktop className="text-white text-3xl" />
              </div>
              <p className="text-xl  font-medium text-center mt-5">
                Front-End Development
              </p>
              <p className="text-base text-center px-4 mt-6">
                I enjoy developing interesting client facing apps by using
                frameworks such as React JS, design libraries such as Tailwind &
                Material UI and by following a component based architecture,
                maintaining simplicity and readability in code.
              </p>
            </div>
            {/* Backend */}
            <div className="text-heading w-full lg:flex-1 bg-white border-2  rounded-xl py-8 px-2">
              <div className="bg-hovercta p-4 rounded-full w-fit mx-auto">
                <LuCode2 className="text-white text-3xl" />
              </div>
              <p className="text-xl  font-medium text-center mt-5">
                Back-End Development
              </p>
              <p className="text-base text-center px-4 mt-6">
                Backend Development is critical due to its role in maintaining
                and securing business logic. I prefer Node JS for its
                asynchronous behavior as well as Express JS to create APIs to be
                accessed by client facing applications. I prefer using an ORM
                such as Prisma to abstract the database layer.
              </p>
            </div>
            {/* Database */}
            <div className="text-heading w-full lg:flex-1 bg-white border-2  rounded-xl py-8 px-2">
              <div className="bg-hovercta p-4 rounded-full w-fit mx-auto">
                <FiDatabase className="text-white text-3xl" />
              </div>
              <p className="text-xl  font-medium text-center mt-5">
                Database Management
              </p>
              <p className="text-base text-center px-4 mt-6">
                Data storage is the core of every project. I've worked with
                multiple databases, including SQL databases such as MySQL and
                NO-SQL databases such as MongoDB. With my skill in data
                management, I ensure that data is stored securely, without
                duplicity, and in a format where it can be easily accessed.
              </p>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}

        {/* Companies Section */}
        <div
          data-aos="fade-up"
          className="bg-white mt-[73rem] md:mt-[60rem] lg:mt-[27rem] pb-10 border-b-[1px] border-[#cfd1d1]"
        >
          <p className="text-center px-3 font-medium text-2xl">
            I'm happy to have contributed to some awesome companies:
          </p>

          <div className=" flex flex-wrap justify-center gap-x-10">
            <img
              src={whatcode}
              alt="WhatCode"
              className="max-w-60 pointer-events-none"
            />
            <img
              src={cypher}
              alt="Cypher Blockchain"
              className="max-w-60 pointer-events-none"
            />
          </div>
        </div>

        {/* ---------------------------------------------------- */}

        {/* Languages / Libraries Section */}
        {/* <div
          data-aos="fade-up"
          className="bg-white pt-24 pb-10 border-b-[1px] border-[#cfd1d1]"
        >
          <p className="text-center px-3 font-medium text-2xl flex justify-center items-center gap-x-3">
            <LuCode2 /> The Things that I use :
          </p>

          <div className=" flex flex-wrap justify-center gap-x-10">
            <img src={whatcode} alt="WhatCode" className="max-w-60 pointer-events-none" />
            <img src={cypher} alt="Cypher Blockchain" className="max-w-60 pointer-events-none" />
          </div>
        </div> */}

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

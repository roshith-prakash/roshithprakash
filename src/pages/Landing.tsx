import { useEffect } from "react";
import { OutlineButton, CTAButton, ScrollToTop } from "../components/index.ts";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { MdOutlineChat } from "react-icons/md";
import { SlScreenDesktop } from "react-icons/sl";
import { LuCode2 } from "react-icons/lu";
import { FiDatabase } from "react-icons/fi";
import { languages } from "../data/languages.ts";
import { useDarkMode } from "../context/DarkModeContext.tsx";

const Landing = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode();

  // Scroll to Top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Title
  useEffect(() => {
    document.title = "Roshith Prakash - Full Stack Developer";
  }, []);

  return (
    <>
      <main className="font-inter pb-32 relative bg-white dark:bg-darkbg dark:text-darkmodetext">
        {/* ---------------------------------------------------- */}

        {/* Scroll to Top button */}
        <ScrollToTop />

        {/* ---------------------------------------------------- */}

        {/* Hero Section*/}
        <section
          data-aos="fade-up"
          className="lg:flex min-h-[80vh] lg:pt-20 pb-32"
        >
          <article className="w-full lg:flex-1 px-5">
            <h1 className="text-5xl pt-20 lg:pt-40 font-semibold font-dmSans text-heading dark:text-darkmodetext text-center">
              Hey, I am{" "}
              <span className="text-hovercta dark:text-darkmodeCTA">
                <Typewriter typeSpeed={70} words={["Roshith Prakash"]} />{" "}
              </span>
            </h1>
            <p className="text-2xl mt-5 font-semibold font-dmSans text-heading dark:text-darkmodetext text-center">
              A Full Stack Web Developer specializing in the MERN Stack.
              <br />I turn coffee into code.
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton
                onClick={() => {
                  navigate("/about");
                }}
                text="Discover More About Me"
              />
            </div>
          </article>
          <div className="w-full pt-14 lg:pt-0 lg:flex-1 flex justify-center items-center">
            <img
              src={
                "https://res.cloudinary.com/do8rpl9l4/image/upload/v1736844051/hero_ubcx9w.svg"
              }
              alt="Programmer"
              className="w-[80%] pointer-events-none"
            />
          </div>
        </section>

        {/* ---------------------------------------------------- */}

        {/* Introduction Section */}
        <section
          data-aos="fade-up"
          className={`${
            isDarkMode
              ? "bg-secondarydarkbg"
              : "bg-gradient-to-b from-hovercta to-hovercta/90"
          }  relative text-darkmodetext py-20 pb-28`}
        >
          <h2 className="text-center  text-white font-semibold mx-auto px-5 lg:max-w-[60%] text-2xl">
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
            <article className="text-heading w-full lg:flex-1 bg-white dark:bg-darkbg dark:text-darkmodetext border-2 dark:border-darkmodetext/25 rounded-xl py-8 px-2">
              <div className="bg-gradient-to-br from-cta/90 to-hovercta/90 p-4 rounded-full w-fit mx-auto">
                <SlScreenDesktop className="text-darkmodetext text-3xl" />
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
            <article className="text-heading w-full lg:flex-1 bg-white dark:bg-darkbg dark:text-darkmodetext border-2 dark:border-darkmodetext/25 rounded-xl py-8 px-2">
              <div className="bg-gradient-to-br from-cta/90 to-hovercta/90 p-4 rounded-full w-fit mx-auto">
                <LuCode2 className="text-darkmodetext text-3xl" />
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
            <article className="text-heading w-full lg:flex-1 bg-white dark:bg-darkbg dark:text-darkmodetext border-2 dark:border-darkmodetext/25 rounded-xl py-8 px-2">
              <div className="bg-gradient-to-br from-cta/90 to-hovercta/90 p-4 rounded-full w-fit mx-auto">
                <FiDatabase className="text-darkmodetext text-3xl" />
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
          className="pb-20 mt-[73rem] md:mt-[60rem] lg:mt-[27rem] border-b-[1px] dark:border-none border-[#cfd1d1]"
        >
          <h2 className="text-center px-3 font-medium text-2xl">
            I'm happy to have contributed to some awesome companies:
          </h2>
          <div className="flex flex-wrap justify-center gap-x-10">
            <figure>
              <img
                src={
                  "https://res.cloudinary.com/do8rpl9l4/image/upload/v1736843326/whatcode_ssrwcw.png"
                }
                alt="WhatCode"
                className="h-60 pointer-events-none"
              />
              <figcaption className="sr-only">WhatCode</figcaption>
            </figure>
            <figure>
              <img
                src={
                  "https://res.cloudinary.com/do8rpl9l4/image/upload/v1736844051/cypher_rtxfcw.png"
                }
                alt="Cypher Blockchain"
                className="h-60 pointer-events-none"
              />
              <figcaption className="sr-only">Cypher Blockchain</figcaption>
            </figure>
          </div>
        </section>

        {/* ---------------------------------------------------- */}

        {/* Tools Section */}
        <section
          data-aos="fade-up"
          className=" py-24 border-b-[1px] dark:border-none border-[#cfd1d1]"
        >
          <h2 className=" text-center px-3 font-semibold text-2xl lg:text-4xl flex justify-center items-center gap-x-3">
            <LuCode2 /> My Repository of Tools:
          </h2>

          {/* Tools Logos */}
          <div className="mt-14 flex flex-col gap-y-2 py-10 overflow-hidden">
            {/* Bordered line for film reel effect */}
            <div className="flex border-2 border-black/25 dark:border-darkmodetext h-2 dark:h-1" />
            {/* Logos */}
            <div className="flex text-lg font-medium dark:bg-white dark:text-darkbg py-4 flex-nowrap gap-x-[4rem] logos-slide w-max">
              {languages.map((item) => (
                <div className="flex flex-col gap-y-4 font-medium">
                  <img
                    src={item.image}
                    alt={item.name}
                    key={item.id}
                    className="h-32 inline-block"
                  />
                  <p className="text-center">{item?.name}</p>
                </div>
              ))}
              {languages.map((item) => (
                <div className="flex flex-col gap-y-4 font-medium">
                  <img
                    src={item.image}
                    alt={item.name}
                    key={item.id}
                    className="h-32 inline-block"
                  />
                  <p className="text-center">{item?.name}</p>
                </div>
              ))}
            </div>
            {/* Bordered line for film reel effect */}
            <div className="flex border-2 border-black/25 dark:border-darkmodetext h-2 dark:h-1" />
          </div>
        </section>

        {/* ---------------------------------------------------- */}

        {/* LinkedIn Section */}
        <section
          data-aos="fade-up"
          className="pt-20 md:pt-36 pb-16 flex flex-wrap"
        >
          <div className="w-full md:flex-1 flex justify-center items-center">
            <img
              src={
                "https://res.cloudinary.com/do8rpl9l4/image/upload/v1736844051/working_hcewvh.svg"
              }
              alt="Work with me"
              className="w-[70%]"
            />
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
    </>
  );
};

export default Landing;

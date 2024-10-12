import React, { useEffect } from "react";
import { Footer } from "../components";
import education from "../assets/education.svg";
import read from "../assets/read.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import whatcode from "../assets/whatcode.png";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "About | Roshith Prakash";
  }, []);

  useEffect(() => {
    AOS.init({
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <main className="relative pt-14 pb-48">
        {/* Scroll to Top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer border-2 border-cta fixed bottom-10 right-5 bg-white rounded-full p-3 z-20"
          aria-label="Scroll to top"
        >
          <FaRegArrowAltCircleUp className="text-cta text-2xl" />
        </button>

        {/* About Me Section */}
        <section className="text-center">
          <header>
            <h1 className="text-3xl font-semibold">About Me</h1>
          </header>
          <p className="text-lg px-5 md:px-10 mt-8 lg:max-w-[90%] mx-auto">
            Hi, I am Roshith Prakash - an avid learner and full stack developer.
            I use the MERN (Mongo, Express, React, NodeJS) Stack to learn and to
            develop exciting web apps. I aspire to learn each and every day, for
            to live is to learn. Seeking opportunities where skills can be
            creatively utilized to develop interesting solutions while being
            resourceful and attaining professional growth.
          </p>
        </section>

        {/* Experience Section */}
        <section
          data-aos="fade-up"
          className="mt-14 md:mt-28 lg:max-w-[90%] mx-auto"
        >
          <article className="w-full py-10 mx-2 shadow-md border-[1px] rounded-xl md:shadow-none md:border-none md:py-0 lg:flex-1 px-8">
            <header>
              <h2 className="text-2xl font-semibold">Experience 👨‍💻</h2>
            </header>

            <div className="mt-10 border-y-[1px] py-5">
              <div className="flex flex-wrap">
                <figure className="w-full md:w-fit flex justify-center items-start px-14">
                  <img
                    src={whatcode}
                    alt="WhatCode"
                    className="max-h-60 md:max-h-44 lg:max-h-52 pointer-events-none"
                  />
                </figure>
                <div className="flex-1">
                  <h3 className="text-xl font-medium">
                    MERN Developer - WhatCode
                  </h3>
                  <p className="text-lg mt-3">October 2023 - March 2024</p>
                  <ul className="list-disc ml-5 mt-5">
                    <li>
                      Developed interactive and responsive front-end
                      applications using React and Tailwind.
                    </li>
                    <li>
                      Developed web servers for implementing business logic
                      using Node JS and Express.
                    </li>
                    <li>
                      Debugged various logical and UI based bugs and
                      reimplemented logic.
                    </li>
                    <li>
                      Worked with third-party authentication providers like
                      Firebase.
                    </li>
                    <li>
                      Implemented data storage and retrieval using MongoDB and
                      Prisma ORM.
                    </li>
                    <li>
                      Contributed to various projects, including Web3 and AI
                      based projects.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* Education Section */}
        <section
          data-aos="fade-up"
          className="flex mt-14 md:mt-28 lg:max-w-[90%] mx-auto"
        >
          <div className="flex-1 hidden md:flex justify-center items-center">
            <img src={education} alt="Education" className="w-[60%]" />
          </div>
          <article className="w-full py-10 mx-2 shadow-md border-[1px] rounded-xl md:shadow-none md:border-none md:py-0 md:w-[60%] lg:flex-1 px-8">
            <header>
              <h2 className="text-2xl font-semibold">Education 🎓</h2>
            </header>

            <div className="mt-10">
              <section className="border-b-[1px] pb-5">
                <h3 className="text-xl font-medium">
                  BSc.(I.T.) | Bhavans College (Autonomous), Mumbai
                </h3>
                <p className="text-lg mt-3">
                  Grade : A+ | CGPA : 9.78 out of 10
                </p>
              </section>
              <section className="border-b-[1px] py-5">
                <h3 className="text-xl font-medium">
                  HSC Science (I.T.) | Bhavans College, Mumbai
                </h3>
                <p className="text-lg mt-3">Percentage : 77.78%</p>
              </section>
              <section className="border-b-[1px] py-5">
                <h3 className="text-xl font-medium">
                  SSC | Marol Education Academy's High School, Mumbai
                </h3>
                <p className="text-lg mt-3">Percentage : 92%</p>
              </section>
            </div>
          </article>
        </section>

        {/* Personal Info Section */}
        <section
          data-aos="fade-up"
          className="flex mt-14 md:mt-28 lg:max-w-[90%] mx-auto"
        >
          <article className="w-full py-10 mx-2 shadow-md border-[1px] rounded-xl md:shadow-none md:border-none md:py-0 md:w-[60%] lg:flex-1 px-8">
            <header>
              <h2 className="text-2xl font-semibold">
                Some Things About Me 😀
              </h2>
            </header>

            <div className="mt-10">
              <section className="border-b-[1px] pb-5">
                <p className="text-lg">Name: Roshith Prakash</p>
              </section>
              <section className="border-b-[1px] py-5">
                <p className="text-lg">
                  Date of Birth: 7<sup>th</sup> January 2003
                </p>
              </section>
              <section className="border-b-[1px] py-5">
                <p className="text-lg">Location: Andheri, Mumbai</p>
              </section>
              <section className="border-b-[1px] py-5">
                <p className="text-lg">
                  Languages: English, Hindi, Marathi, Malayalam
                </p>
              </section>
              <section className="border-b-[1px] py-5">
                <p className="text-lg">
                  Interests: Writing, Football, Formula 1, Gaming
                </p>
              </section>
            </div>
          </article>

          <div className="flex-1 hidden md:flex justify-center items-center">
            <img
              src={read}
              alt="Personal Info"
              className="w-[60%] [transform:rotateY(180deg)]"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;

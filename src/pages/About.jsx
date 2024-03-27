import React, { useEffect } from "react";
import { Footer, Navbar } from "../components";
import education from "../assets/education.svg";
import read from "../assets/read.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
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
      <Navbar />
      <div className="pt-14 pb-48">
        <p className="text-3xl text-center font-semibold">About Me</p>
        <p className="text-lg text-center px-5 md:px-10 mt-8 lg:max-w-[90%] mx-auto">
          Hi, I am Roshith Prakash - an avid learner and full stack developer. I
          use the MERN (Mongo, Express, React, NodeJS) Stack to learn and to
          develop exciting web apps. I aspire to learn each and every day, for
          to live is to learn. Seeking opportunities where skills can be
          creatively utilized to develop interesting solutions while being
          resourceful and attaining professional growth.
        </p>

        <div
          data-aos="fade-up"
          className="mt-14 md:mt-28 flex lg:max-w-[90%] mx-auto"
        >
          <div className="flex-1 hidden md:flex justify-center items-center">
            <img src={education} alt="Education" className="w-[60%]" />
          </div>
          <div className="w-full py-10 mx-2 shadow-md border-[1px] rounded-xl md:shadow-none md:border-none md:py-0 md:w-[60%] lg:flex-1 px-8  ">
            <p className="text-2xl font-semibold">Education 🎓</p>

            <div className="mt-10">
              {/* Bsc IT */}
              <div className="border-b-[1px] pb-5">
                <p className="text-xl font-medium">
                  BSc.(I.T.) | Bhavans College (Autonomous), Mumbai
                </p>
                <p className="text-lg mt-3">
                  Grade : A+ | CGPA : 9.78 out of 10
                </p>
              </div>
              {/* HSC */}
              <div className="border-b-[1px] py-5">
                <p className="text-xl font-medium">
                  HSC Science (I.T.) | Bhavans College, Mumbai
                </p>
                <p className="text-lg mt-3">Percentage : 77.78%</p>
              </div>
              {/* SSC */}
              <div className="border-b-[1px] py-5">
                <p className="text-xl font-medium">
                  SSC | Marol Education Academy's High School, Mumbai
                </p>
                <p className="text-lg mt-3">Percentage : 92%</p>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="mt-14 md:mt-28 flex lg:max-w-[90%] mx-auto"
        >
          <div className="w-full py-10 mx-2 shadow-md border-[1px] rounded-xl md:shadow-none md:border-none md:py-0 md:w-[60%] lg:flex-1 px-8">
            <p className="text-2xl font-semibold">Some Things About Me 😀</p>

            <div className="mt-10">
              <div className="border-b-[1px] pb-5">
                <p className="text-lg ">Name : Roshith Prakash</p>
              </div>
              <div className="border-b-[1px] py-5">
                <p className="text-lg ">
                  Date of Birth : 7<sup>th</sup> January 2003
                </p>
              </div>
              <div className="border-b-[1px] py-5">
                <p className="text-lg ">Location : Andheri, Mumbai</p>
              </div>
              <div className="border-b-[1px] py-5">
                <p className="text-lg ">
                  Languages : English, Hindi, Marathi, Malayalam
                </p>
              </div>
              <div className="border-b-[1px] py-5">
                <p className="text-lg ">
                  Interests : Writing, Football, Formula 1, Gaming
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 hidden md:flex justify-center items-center">
            <img
              src={read}
              alt="Personal Info"
              className="w-[60%] [transform:rotateY(180deg)]"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

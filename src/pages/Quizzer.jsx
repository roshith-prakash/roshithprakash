import React, { useEffect } from "react";
import { CTAButton, Footer, Navbar } from "../components";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const Quizzer = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Quizzer | Projects";
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative pt-14 pb-48">
        {/* ---------------------------------------------------- */}

        {/* Scroll to Top button */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer border-2 border-cta fixed bottom-10 right-5 bg-white rounded-full p-3 z-50"
        >
          <FaRegArrowAltCircleUp className="text-cta text-2xl" />
        </div>

        {/* ---------------------------------------------------- */}

        <p className="text-3xl text-center font-semibold">Quizzer AI</p>
        <p className="mt-8 text-lg px-5 lg:px-10 text-center">
          Quizzer AI is a interactive quiz platform where a user can quiz
          themselves on any topic. Questions are generated using Generative AI..
          Technologies used for developing the project: React JS, Gemini,
          Tanstack Query, Tailwind CSS, Axios, Node JS, Express JS. Powered by
          the Pexels API.
        </p>
        <div className="mt-10 flex justify-center">
          <CTAButton
            onClick={() => window.open("https://quizzer-ai.vercel.app/")}
            text="Visit the Site!"
          />
        </div>

        <div className="mt-20 px-5 md:px-10 lg:px-32">
          <p className="text-2xl font-medium">Features:</p>
          <ul className="list-disc text-lg mt-5 px-6 md:px-12">
            <li>Creates MCQs on the User's selected topic.</li>
            <li>Creates FlashCards on the User's selected topic.</li>
            <li>Caches results to decrease fetch times.</li>
            <li>Allows to choose difficulty level of the questions.</li>
          </ul>
        </div>

        <div className="mt-24 px-5 lg:px-10 flex justify-center">
          <img
            src="https://res.cloudinary.com/do8rpl9l4/image/upload/v1723285531/Screenshot_2024-08-10_155404_z7dtjc.png"
            alt="Quizzer AI"
            a
            className="w-auto max-h-96 "
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Quizzer;

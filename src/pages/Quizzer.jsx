import React, { useEffect } from "react";
import { CTAButton, Footer } from "../components";
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
      <main className="relative pt-14 pb-48">
        {/* Scroll to Top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer border-2 border-cta fixed bottom-10 right-5 bg-white rounded-full p-3 z-20"
          aria-label="Scroll to top"
        >
          <FaRegArrowAltCircleUp className="text-cta text-2xl" />
        </button>

        <header className="text-center">
          <h1 className="text-3xl font-semibold">Quizzer AI</h1>
          <p className="mt-8 text-lg px-5 lg:px-10">
            Quizzer AI is an interactive quiz platform where users can quiz
            themselves on any topic. Questions are generated using Generative
            AI. Technologies used for developing the project: React JS, Gemini,
            Tanstack Query, Tailwind CSS, Axios, Node JS, Express JS, powered by
            the Pexels API.
          </p>
          <div className="mt-10">
            <CTAButton
              onClick={() => window.open("https://quizzer-ai.vercel.app/")}
              text="Visit the Site!"
            />
          </div>
        </header>

        <section className="mt-20 px-5 md:px-10 lg:px-32">
          <h2 className="text-2xl font-medium">Features:</h2>
          <ul className="list-disc text-lg mt-5 px-6 md:px-12">
            <li>Integrated Gemini AI into a Node JS server.</li>
            <li>
              Creates FlashCards, MCQs or True/False questions on the user's
              selected topic.
            </li>
            <li>
              Created a multiplayer mode to allow users to compete
              simultaneously.
            </li>
          </ul>
        </section>

        <section className="mt-24 px-5 lg:px-10 flex justify-center">
          <img
            src="https://res.cloudinary.com/do8rpl9l4/image/upload/v1723285531/Screenshot_2024-08-10_155404_z7dtjc.png"
            alt="Screenshot of Quizzer AI"
            className="w-auto max-h-96"
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Quizzer;

import { useEffect } from "react";
import { CTAButton, Footer, ScrollToTop } from "../components";

const Quizzer = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Title
  useEffect(() => {
    document.title = "Quizzer | Projects";
  }, []);

  return (
    <>
      <main className="relative dark:bg-darkbg dark:text-darkmodetext pt-14 pb-48">
        {/* Scroll to Top button */}
        <ScrollToTop />

        <header className="text-center">
          <h1 className="text-3xl font-semibold">Quizzer AI</h1>
          <p className="mt-8 text-lg px-5 lg:px-10">
            Quizzer AI is an interactive AI-powered quiz app that generates
            dynamic and engaging quizzes on any topic. Built with Google's
            Gemini AI, Quizzer AI offers personalized quizzes to enhance
            learning and test your knowledge.
          </p>
          <div className="mt-10">
            <CTAButton
              onClick={() => window.open("https://quizzer-ai.vercel.app/")}
              text="Visit the Site!"
            />
          </div>
        </header>

        <div className="mt-20 px-10 lg:px-32 flex flex-wrap md:justify-around gap-y-14">
          <section className="md:flex-1">
            <h2 className="text-2xl font-medium">Technologies used:</h2>
            <ul className="list-disc text-lg mt-5 px-6 md:px-12">
              <li>React (Vite + TypeScript)</li>
              <li>Tanstack Query</li>
              <li>Tailwind CSS</li>
              <li>Node JS + Express</li>
              <li>Socket.IO</li>
              <li>Gemini AI</li>
            </ul>
          </section>

          <section className="md:flex-1">
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
        </div>

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

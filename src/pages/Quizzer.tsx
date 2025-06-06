import { useEffect } from "react";
import { CTAButton, ScrollToTop } from "../components";

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

        <header className="textspace-y-14">
          <h1 className="text-4xl font-extrabold tracking-wide">Quizzer AI</h1>
          <p className="text-lg px-5 lg:px-20">
            Quizzer AI is an interactive AI-powered quiz app that generates
            dynamic and engaging quizzes on any topic. Powered by Google's
            Gemini AI, Quizzer AI offers personalized quizzes to enhance
            learning and test your knowledge.
          </p>
          <div>
            <CTAButton
              onClick={() => window.open("https://quizzer-ai.vercel.app/")}
              text="Visit the Site!"
            />
          </div>
        </header>

        <div className="mt-20 px-8 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-10">
          <section className="bg-grey dark:bg-secondarydarkbg p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-cta">
              Technologies Used
            </h2>
            <ul className="list-disc text-lg pl-6 space-y-2">
              <li>React (Vite + TypeScript)</li>
              <li>Tanstack Query</li>
              <li>Tailwind CSS</li>
              <li>Node JS + Express</li>
              <li>Socket.IO</li>
              <li>Gemini AI</li>
            </ul>
          </section>

          <section className="bg-grey dark:bg-secondarydarkbg p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-cta">Features</h2>
            <ul className="list-disc text-lg pl-6 space-y-2">
              <li>Integrated Gemini AI into a Node JS server.</li>
              <li>
                Generates FlashCards, MCQs, or True/False questions on the
                user's selected topic.
              </li>
              <li>Multiplayer mode allows users to compete simultaneously.</li>
            </ul>
          </section>
        </div>

        <section className="mt-20 flex flex-col items-center">
          <div className="relative bg-white rounded-2xl shadow-md overflow-hidden max-w-3xl">
            <img
              src="https://res.cloudinary.com/dvwdsxirc/image/upload/v1746777494/Screenshot_2025-05-09_132802_njmtrk.png"
              alt="Screenshot of Quizzer AI"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="mt-6 text-gray-600 text-center">
            Experience AI-powered quizzes with an intuitive and interactive
            interface.
          </p>
        </section>
      </main>
    </>
  );
};

export default Quizzer;

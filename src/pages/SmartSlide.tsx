import { useEffect } from "react";
import { CTAButton, Footer, ScrollToTop } from "../components";

const SmartSlide = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Title
  useEffect(() => {
    document.title = "SmartSlide | Projects";
  }, []);

  return (
    <>
      <main className="relative dark:bg-darkbg dark:text-darkmodetext pt-14 pb-48">
        {/* Scroll to Top button */}
        <ScrollToTop />

        <header className="text-center">
          <h1 className="text-3xl font-semibold">SmartSlide AI</h1>
          <p className="mt-8 text-lg px-5 lg:px-10">
            SmartSlide AI is an innovative application that harnesses the power
            of artificial intelligence to generate presentation slides
            effortlessly. By simply providing a topic, users can receive a fully
            structured and customizable slide deck in minutes. The app is
            designed to save time and enhance productivity, making it ideal for
            students, educators, and professionals who need to create
            presentations quickly without sacrificing quality or creativity.
          </p>
          <div className="mt-10">
            <CTAButton
              onClick={() => window.open("https://smartslide-ai.vercel.app")}
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
              <li>Gemini AI</li>
              <li>Pptxgenjs & Docx</li>
            </ul>
          </section>
          <section className="md:flex-1">
            <h2 className="text-2xl font-medium">Features:</h2>
            <ul className="list-disc text-lg mt-5 px-6 md:px-12">
              <li>
                AI-Driven Content Generation: Automatically generate slide
                content by providing a topic, saving time on research and
                formatting.
              </li>
              <li>
                User-Friendly Interface: A simple and intuitive UI that allows
                for quick navigation and seamless slide editing.
              </li>
              <li>
                Responsive Design: Optimized for desktop and mobile devices,
                ensuring a smooth experience on any screen size.
              </li>
              <li>
                Downloadable Presentations: Easily download your completed slide
                decks for offline use or sharing.
              </li>
            </ul>
          </section>
        </div>

        <section className="mt-24 px-5 lg:px-10 flex justify-center">
          <img
            src="https://res.cloudinary.com/do8rpl9l4/image/upload/v1729526872/smartslide_m5mgwt.png"
            alt="Screenshot of SmartSlide AI"
            className="w-auto max-h-96"
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SmartSlide;

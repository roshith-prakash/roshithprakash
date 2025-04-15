import { useEffect } from "react";
import { CTAButton, Footer, ScrollToTop } from "../components";

const SmartSlide = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Update document title
  useEffect(() => {
    document.title = "SmartSlide | Projects";
  }, []);

  return (
    <>
      <main className="relative dark:bg-darkbg dark:text-darkmodetext pt-14 pb-48">
        {/* Scroll to Top button */}
        <ScrollToTop />

        {/* Header Section */}
        <header className="text-center space-y-10">
          <h1 className="text-4xl font-extrabold tracking-wide">
            SmartSlide AI
          </h1>
          <p className="text-lg px-6 lg:px-20">
            SmartSlide AI is an innovative application that harnesses the power
            of artificial intelligence to generate presentation slides
            effortlessly. By simply providing a topic, users can receive a fully
            structured and customizable slide deck in minutes. The app is
            designed to save time and enhance productivity, making it ideal for
            students, educators, and professionals who need to create
            presentations quickly without sacrificing quality or creativity.
          </p>
          <div>
            <CTAButton
              onClick={() => window.open("https://smartslide-ai.vercel.app")}
              text="Visit the Site!"
            />
          </div>
        </header>

        {/* Technologies and Features Section */}
        <div className="mt-20 px-8 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technologies Used */}
          <section className="bg-grey dark:bg-secondarydarkbg p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-cta">
              Technologies Used
            </h2>
            <ul className="list-disc text-lg pl-6 space-y-2">
              <li>React (Vite + TypeScript)</li>
              <li>Tanstack Query</li>
              <li>Tailwind CSS</li>
              <li>Node.js + Express</li>
              <li>Gemini AI</li>
              <li>Pptxgenjs & Docx</li>
            </ul>
          </section>

          {/* Features */}
          <section className="bg-grey dark:bg-secondarydarkbg p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-cta">Features</h2>
            <ul className="list-disc text-lg pl-6 space-y-2">
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

        {/* Screenshot Section */}
        <section className="mt-20 flex flex-col items-center">
          <div className="relative bg-white rounded-2xl shadow-md overflow-hidden max-w-3xl">
            <img
              src="https://res.cloudinary.com/do8rpl9l4/image/upload/v1729526872/smartslide_m5mgwt.png"
              alt="Screenshot of SmartSlide AI"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="mt-6 text-gray-600 text-center">
            Create beautiful and impactful presentations effortlessly with
            SmartSlide AI.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SmartSlide;

import { useEffect } from "react";
import { CTAButton, ScrollToTop } from "../components";

const Gallery = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Title
  useEffect(() => {
    document.title = "Clarivis | Projects";
  }, []);

  return (
    <>
      <main className="relative dark:bg-darkbg dark:text-darkmodetext pt-14 pb-48">
        {/* Scroll to Top button */}
        <ScrollToTop />

        {/* Header Section */}
        <header className="text-center space-y-14">
          <h1 className="text-4xl font-extrabold tracking-wide">Clarivis</h1>
          <p className="text-lg px-5 lg:px-20">
            Developed a Single Page App (SPA) React JS application to search and
            display images /videos from the Internet as required by the user.
          </p>
          <div>
            <CTAButton
              onClick={() => window.open("https://clarivis.vercel.app/")}
              text="Visit the Site!"
            />
          </div>
        </header>

        {/* Technologies and Features Sections */}
        <div className="mt-20 px-8 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technologies Section */}
          <section className="bg-grey dark:bg-secondarydarkbg p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-cta">
              Technologies Used
            </h2>
            <ul className="list-disc text-lg pl-6 space-y-2">
              <li>React</li>
              <li>Tanstack Query</li>
              <li>Pexels API</li>
              <li>Tailwind CSS</li>
            </ul>
          </section>

          {/* Features Section */}
          <section className="bg-grey dark:bg-secondarydarkbg p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-cta">Features</h2>
            <ul className="list-disc text-lg pl-6 space-y-2">
              <li>Displays curated images for the day.</li>
              <li>Allows users to search for images / videos using prompts.</li>
              <li>
                Click on images / videos to view them in a larger resolution.
              </li>
            </ul>
          </section>
        </div>

        {/* Image Section */}
        <section className="mt-20 flex flex-col items-center">
          <div className="relative bg-white rounded-2xl shadow-md overflow-hidden max-w-3xl">
            <img
              src="https://res.cloudinary.com/dvwdsxirc/image/upload/v1744815122/Screenshot_2025-04-16_201957_damyjf.png"
              alt="Clarivis preview showcasing various images from the Pexels API"
              className="w-full h-auto object-cover"
            />
          </div>
          <figcaption className="mt-6 text-gray-600 text-center">
            A preview of the Clarivis, showcasing images fetched from the Pexels
            API.
          </figcaption>
        </section>
      </main>
    </>
  );
};

export default Gallery;

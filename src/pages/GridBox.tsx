import { useEffect } from "react";
import { CTAButton, Footer, ScrollToTop } from "../components";

const GridBox = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Update document title
  useEffect(() => {
    document.title = "GridBox | Projects";
  }, []);

  return (
    <>
      <main className="relative dark:bg-darkbg dark:text-darkmodetext pt-14 pb-48">
        {/* Scroll to Top button */}
        <ScrollToTop />

        {/* Header Section */}
        <header className="text-center space-y-10">
          <h1 className="text-4xl font-extrabold tracking-wide">GridBox F1</h1>
          <p className="text-lg px-6 lg:px-20">
            Formula 1's meteoric rise in popularity has captivated a global
            audience with its thrilling races, cutting-edge technology, and
            charismatic drivers. To channel this growing interest and my passion
            for F1, I developed "GridBox F1" - a comprehensive Formula 1
            information website.
          </p>
          <div>
            <CTAButton
              onClick={() => window.open("https://gridbox-f1.vercel.app/")}
              text="Visit the Site!"
            />
          </div>
        </header>

        {/* Technologies and Features Section */}
        <div className="mt-20 px-8 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-10">
          <section className="bg-grey dark:bg-secondarydarkbg p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-cta">
              Technologies Used
            </h2>
            <ul className="list-disc text-lg pl-6 space-y-2">
              <li>React (Vite + TypeScript)</li>
              <li>Tanstack Query</li>
              <li>Tailwind CSS</li>
              <li>Node.js + Express</li>
              <li>Prisma ORM</li>
              <li>Jolpica API</li>
            </ul>
          </section>

          <section className="bg-grey dark:bg-secondarydarkbg p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-cta">Features</h2>
            <ul className="list-disc text-lg pl-6 space-y-2">
              <li>
                Explore driver and constructor standings from past and current
                seasons.
              </li>
              <li>
                View the complete season schedule with race dates and locations.
              </li>
              <li>
                Read in-depth articles and blogs on the latest F1 news and
                insights.
              </li>
              <li>Discover drivers and constructors by season.</li>
              <li>
                Learn about iconic circuits, including layouts and geographic
                locations.
              </li>
            </ul>
          </section>
        </div>

        {/* Screenshot Section */}
        <section className="mt-20 flex flex-col items-center">
          <div className="relative bg-white rounded-2xl shadow-md overflow-hidden max-w-3xl">
            <img
              src="https://res.cloudinary.com/do8rpl9l4/image/upload/v1731263317/Screenshot_2024-11-10_235811_uv9wlq.png"
              alt="GridBox F1 interface"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="mt-6 text-gray-600 text-center">
            Immerse yourself in the world of Formula 1 with GridBox F1's
            interactive and visually rich platform.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GridBox;

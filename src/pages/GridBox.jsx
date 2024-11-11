import React, { useEffect } from "react";
import { CTAButton, Footer } from "../components";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const GridBox = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "GridBox | Projects";
  }, []);

  return (
    <>
      <main className="relative pt-14 pb-48">
        {/* ---------------------------------------------------- */}

        {/* Scroll to Top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer border-2 border-cta fixed bottom-10 right-5 bg-white rounded-full p-3 z-20"
          aria-label="Scroll to top"
        >
          <FaRegArrowAltCircleUp className="text-cta text-2xl" />
        </button>

        {/* ---------------------------------------------------- */}

        <section>
          <h1 className="text-3xl text-center font-semibold">GridBox F1</h1>
          <p className="mt-8 text-lg px-5 lg:px-10 text-center">
            The popularity of Formula 1 has been on a meteoric rise in recent
            years, capturing the hearts and minds of a global audience like
            never before. With its thrilling races, cutting-edge technology, and
            charismatic drivers, Formula 1 has become a sporting spectacle that
            transcends borders and demographics. To seize the growing
            opportunity and to turn my passion for Formula 1 into something
            real, I developed "GridBox F1" - a Formula 1 Information Website.
          </p>
          <div className="mt-10 flex justify-center">
            <CTAButton
              onClick={() => window.open("https://gridbox-f1.vercel.app/")}
              text="Visit the Site!"
            />
          </div>
        </section>

        <section className="mt-20 px-5 md:px-10 lg:px-32">
          <h2 className="text-2xl font-medium">Features:</h2>
          <ul className="list-disc text-lg mt-5 px-6 md:px-12">
            <li>
              Explore Driver and Constructor Standings from past and current
              seasons.
            </li>
            <li>
              View the complete season schedule with dates and locations for
              each race.
            </li>
            <li>
              Read in-depth articles and blogs on the latest F1 news and
              insights.
            </li>
            <li>Discover drivers and constructors by season.</li>
            <li>
              Learn about iconic circuits, including layout details and
              geographic locations.
            </li>
          </ul>
        </section>

        <section className="mt-20 px-5 md:px-10 lg:px-32">
          <h2 className="text-2xl font-medium">Tasks Performed:</h2>
          <ul className="list-disc text-lg mt-5 px-6 md:px-12">
            <li>
              Built a user-friendly, responsive front-end with React, Tailwind
              CSS, ShadCN, and Tanstack Query for seamless data fetching.
            </li>
            <li>
              Created an Express.js server to handle API requests, ensuring
              smooth data exchange between the front-end and the database.
            </li>
            <li>
              Implemented a robust data storage solution using MongoDB to ensure
              high data availability, scalability, and minimal downtime.
            </li>
          </ul>
        </section>

        <section className="mt-24 px-5 lg:px-10 flex justify-center">
          <img
            src="https://res.cloudinary.com/do8rpl9l4/image/upload/v1731263317/Screenshot_2024-11-10_235811_uv9wlq.png"
            alt="Screenshot of GridBox"
            className="w-auto max-h-96"
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GridBox;

import React, { useEffect } from "react";
import { CTAButton, Footer, Navbar } from "../components";
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

        <p className="text-3xl text-center font-semibold">The Gridbox</p>
        <p className="mt-8 text-lg px-5 lg:px-10 text-center">
          The popularity of Formula 1 has been on a meteoric rise in recent
          years, capturing the hearts and minds of a global audience like never
          before. With its thrilling races, cutting-edge technology, and
          charismatic drivers, Formula 1 has become a sporting spectacle that
          transcends borders and demographics. To seize the growing opportunity
          and to turn my passion of Formula 1 into something real, I developed
          "The GridBox" - a Formula 1 Information Website.
        </p>
        <div className="mt-10 flex justify-center">
          <CTAButton
            onClick={() => window.open("https://thegridbox.vercel.app/")}
            text="Visit the Site!"
          />
        </div>

        <div className="mt-20 px-5 md:px-10 lg:px-32">
          <p className="text-2xl font-medium">Features:</p>
          <ul className="list-disc text-lg mt-5 px-6 md:px-12">
            <li>View the next race and its timings.</li>
            <li>View Driver or Constructor Standings for any year.</li>
            <li>View the Schedule of Races.</li>
            <li>Read Blogs written by me.</li>
            <li>
              View Information about the various drivers and constructors.
            </li>
            <li>View Circuit Information and their Locations.</li>
          </ul>
        </div>

        <div className="mt-20 px-5 md:px-10 lg:px-32">
          <p className="text-2xl font-medium">Tasks Performed:</p>
          <ul className="list-disc text-lg mt-5 px-6 md:px-12">
            <li>
              Developed a React based Front-end user facing website with
              Material UI and React Router DOM.
            </li>
            <li>
              Developed an Express based server to communicate with the
              Front-End and provide the requested data.
            </li>
            <li>
              Developed an information storage technique which allows to store
              data on MongoDB - allowing maximum availability of data and least
              amount of downtime.
            </li>
          </ul>
        </div>

        <div className="mt-24 px-5 lg:px-10">
          <video
            src="https://res.cloudinary.com/do8rpl9l4/video/upload/v1711613929/portfolio/gridbox.mp4"
            controls
            className="w-full"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GridBox;

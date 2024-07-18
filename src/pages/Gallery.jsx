import React, { useEffect } from "react";
import { CTAButton, Footer, Navbar } from "../components";

import gallery from "../assets/gallery.png";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Gallery | Projects";
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

        <p className="text-3xl text-center font-semibold">The Gallery</p>
        <p className="mt-8 text-lg px-5 lg:px-10 text-center">
          Developed a Single Page App (SPA) React JS application to search and
          display images from the Internet as required by the user. Technologies
          used for developing the project: React, Tanstack Query, Tailwind CSS,
          Axios, React Masonry, ShadCN. Powered by the Pexels API.
        </p>
        <div className="mt-10 flex justify-center">
          <CTAButton
            onClick={() =>
              window.open("https://gallery-roshithprakash.vercel.app/")
            }
            text="Visit the Site!"
          />
        </div>

        <div className="mt-20 px-5 md:px-10 lg:px-32">
          <p className="text-2xl font-medium">Features:</p>
          <ul className="list-disc text-lg mt-5 px-6 md:px-12">
            <li>Displays curated images for the day..</li>
            <li>Allows users to search for images using prompts.</li>
            <li>
              Allows users to view images in a larger resolution by clicking on
              the image (For Smaller Screens).
            </li>
          </ul>
        </div>

        <div className="mt-24 px-5 lg:px-10 flex justify-center">
          <img src={gallery} alt="Gallery" a className="w-auto max-h-96 " />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;

import React, { useEffect } from "react";
import { CTAButton, Footer, Navbar } from "../components";

import gallery from "../assets/gallery.png";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const ThoughtJournal = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "The Thought Journal | Projects";
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
        <p className="text-3xl text-center font-semibold">
          The Thought Journal
        </p>
        <p className="mt-8 text-lg px-5 lg:px-10 text-center">
          Developed a free to use blogging website where users can share their
          thoughts.
        </p>
        <p className="mt-2 text-lg px-5 lg:px-10 text-center">
          Technologies used for developing the project: React, Tanstack Query,
          Tailwind CSS, Axios, Express JS, Prisma ORM, Multer, Cloudinary.
        </p>
        <div className="mt-10 flex justify-center">
          <CTAButton
            onClick={() => window.open("https://thethoughtjournal.vercel.app/")}
            text="Visit the Site!"
          />
        </div>
        <div className="mt-20 px-5 md:px-10 lg:px-32">
          <p className="text-2xl font-medium">Features:</p>
          <ul className="list-disc text-lg mt-5 px-6 md:px-12">
            <li>Write blogs using a rich text editor.</li>
            <li>Like Posts and view liked posts later in your profile.</li>
            <li>Follow other users to view their posts.</li>
            <li>Caching using Tanstack Query.</li>
            <li>View the accounts that follow you / you follow.</li>
          </ul>
        </div>
        <div className="mt-24 px-5 lg:px-10 flex justify-center">
          <img
            src="https://res.cloudinary.com/do8rpl9l4/image/upload/v1718722273/thoughtjournal_llrbq9.png"
            alt="The Thought Journal"
            className="w-auto max-h-96 "
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThoughtJournal;

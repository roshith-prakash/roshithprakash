import React, { useEffect } from "react";
import { CTAButton, Footer } from "../components";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const ThoughtJournal = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Title
  useEffect(() => {
    document.title = "The Thought Journal | Projects";
  }, []);

  return (
    <>
      <main className="relative dark:bg-darkbg dark:text-darkmodetext pt-14 pb-48">
        {/* Scroll to Top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer border-2 border-cta dark:border-white fixed bottom-10 right-5 bg-white dark:bg-gray-800 rounded-full p-3 z-20"
          aria-label="Scroll to top"
        >
          <FaRegArrowAltCircleUp className="text-cta dark:text-white text-2xl" />
        </button>

        <header className="text-center">
          <h1 className="text-3xl font-semibold">The Thought Journal</h1>
          <p className="mt-8 text-lg px-5 lg:px-10">
            Developed a free-to-use blogging website where users can share their
            thoughts.
          </p>
          <p className="mt-2 text-lg px-5 lg:px-10">
            Technologies used for developing the project: React, Tanstack Query,
            Tailwind CSS, Axios, Express JS, Prisma ORM, Multer, Cloudinary.
          </p>
        </header>

        <div className="mt-10 flex justify-center">
          <CTAButton
            onClick={() => window.open("https://thethoughtjournal.vercel.app/")}
            text="Visit the Site!"
          />
        </div>

        <section className="mt-20 px-5 md:px-10 lg:px-32">
          <h2 className="text-2xl font-medium">Features:</h2>
          <ul className="list-disc text-lg mt-5 px-6 md:px-12">
            <li>Write blogs using a rich text editor.</li>
            <li>Like posts and view liked posts later in your profile.</li>
            <li>Follow other users to view their posts.</li>
            <li>Caching using Tanstack Query.</li>
            <li>View the accounts that follow you / you follow.</li>
          </ul>
        </section>

        <section className="mt-24 px-5 lg:px-10 flex justify-center">
          <img
            src="https://res.cloudinary.com/do8rpl9l4/image/upload/v1718722273/thoughtjournal_llrbq9.png"
            alt="The Thought Journal interface"
            className="w-auto max-h-96"
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ThoughtJournal;

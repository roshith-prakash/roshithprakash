import React, { useEffect } from "react";
import { Footer, OutlineButton } from "../components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const Contact = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Title
  useEffect(() => {
    document.title = "Contact | Roshith Prakash";
  }, []);

  return (
    <>
      <main className="relative pt-20 pb-48 dark:bg-darkbg dark:text-darkmodetext flex">
        {/* ---------------------------------------------------- */}

        {/* Scroll to Top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer border-2 border-cta dark:border-white fixed bottom-10 right-5 bg-white dark:bg-gray-800 rounded-full p-3 z-20"
          aria-label="Scroll to top"
        >
          <FaRegArrowAltCircleUp className="text-cta dark:text-white text-2xl" />
        </button>

        {/* ---------------------------------------------------- */}

        <section className="w-full lg:w-[60%]">
          {/* Title and Subtitle */}
          <div data-aos="fade-up">
            <h1 className="text-center text-3xl font-semibold px-5">
              Interested in working together?
            </h1>
            <h2 className="text-center mt-4 text-xl font-semibold px-5">
              Send me a message!
            </h2>
          </div>

          {/* Contact Cards */}
          <div
            data-aos="fade-up"
            className="px-10 max-w-[90%] flex flex-wrap justify-center gap-8 mt-20 mx-auto"
          >
            {/* LinkedIn */}
            <article className="shadow-xl dark:border-2 dark:border-darkmodetext p-6 py-10 rounded-lg w-full md:w-52">
              <h3 className="text-2xl flex gap-x-3 justify-center items-center">
                <FaLinkedin className="text-3xl text-[#0077B5]" />
                LinkedIn
              </h3>
              <div className="flex justify-center mt-4">
                <OutlineButton
                  onClick={() => {
                    window.open("https://www.linkedin.com/in/roshith-prakash/");
                  }}
                  text="Let's Connect!"
                />
              </div>
            </article>

            {/* Email */}
            <article className="shadow-xl dark:border-2 dark:border-darkmodetext p-6 py-10 rounded-lg w-full md:w-52">
              <h3 className="text-2xl flex gap-x-3 justify-center items-center">
                <FaEnvelope className="text-3xl text-hovercta" />
                Email
              </h3>
              <div className="flex justify-center mt-4">
                <OutlineButton
                  onClick={() => {
                    window.open("mailto:roshithprakash07@gmail.com");
                  }}
                  text="Let's Talk!"
                />
              </div>
            </article>

            {/* GitHub */}
            <article className="shadow-xl dark:border-2 dark:border-darkmodetext p-6 py-10 rounded-lg w-full md:w-52">
              <h3 className="text-2xl flex gap-x-3 justify-center items-center">
                <FaGithub className="text-3xl text-[#171515] dark:text-darkmodetext" />
                GitHub
              </h3>
              <div className="flex justify-center mt-4">
                <OutlineButton
                  onClick={() => {
                    window.open("https://github.com/roshith-prakash");
                  }}
                  text="View my Profile"
                />
              </div>
            </article>
          </div>
        </section>

        {/* Illustration */}
        <aside className="hidden lg:w-[40%] lg:flex justify-center items-start pt-5">
          <img
            src={
              "https://res.cloudinary.com/do8rpl9l4/image/upload/v1736843375/contact_f02hjl.svg"
            }
            alt="Contact Illustration"
            className="w-[70%] pointer-events-none"
          />
        </aside>
      </main>
      <Footer />
    </>
  );
};

export default Contact;

import { useEffect } from "react";
import { Footer, OutlineButton, ScrollToTop } from "../components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

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
        <ScrollToTop />

        {/* ---------------------------------------------------- */}

        {/* Cards Section */}
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
            <div className="shadow-xl dark:border-2 dark:border-darkmodetext/25 p-6 py-10 rounded-lg w-full md:w-52">
              <h3 className="text-2xl flex gap-x-3 justify-center items-center">
                <FaLinkedin className="text-3xl text-[#0077B5]" />
                LinkedIn
              </h3>
              <div className="flex justify-center mt-8">
                <OutlineButton
                  onClick={() => {
                    window.open("https://www.linkedin.com/in/roshith-prakash/");
                  }}
                  text="Let's Connect!"
                />
              </div>
            </div>

            {/* Email */}
            <div className="shadow-xl dark:border-2 dark:border-darkmodetext/25 p-6 py-10 rounded-lg w-full md:w-52">
              <h3 className="text-2xl flex gap-x-3 justify-center items-center">
                <FaEnvelope className="text-3xl text-hovercta dark:text-cta" />
                Email
              </h3>
              <div className="flex justify-center mt-8">
                <OutlineButton
                  onClick={() => {
                    window.open("mailto:roshithprakash07@gmail.com");
                  }}
                  text="Send an Email!"
                />
              </div>
            </div>

            {/* GitHub */}
            <div className="shadow-xl dark:border-2 dark:border-darkmodetext/25 p-6 py-10 rounded-lg w-full md:w-52">
              <h3 className="text-2xl flex gap-x-3 justify-center items-center">
                <FaGithub className="text-3xl text-[#171515] dark:text-darkmodetext" />
                GitHub
              </h3>
              <div className="flex justify-center mt-8">
                <OutlineButton
                  onClick={() => {
                    window.open("https://github.com/roshith-prakash");
                  }}
                  text="View my Repos!"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Illustration */}
        <div className="hidden lg:w-[40%] lg:flex justify-center items-start pt-5">
          <img
            src={
              "https://res.cloudinary.com/do8rpl9l4/image/upload/v1736843375/contact_f02hjl.svg"
            }
            alt="Contact Illustration"
            className="w-[70%] pointer-events-none"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;

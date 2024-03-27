import React, { useEffect } from "react";
import { Footer, Navbar, OutlineButton } from "../components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import contact from "../assets/contact.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  useEffect(() => {
    document.title = "Contact | Roshith Prakash";
  }, []);

  return (
    <>
      <Navbar />
      <div className=" pt-20 pb-32 flex">
        <div className="w-full lg:w-[60%]">
          {/* Title and Subtitle */}
          <div data-aos="fade-up">
            <p className="text-center text-3xl font-semibold px-5">
              Interested in working together?
            </p>
            <p className="text-center mt-4 text-xl font-semibold px-5">
              Send me a message!
            </p>
          </div>

          {/* Contact Cards */}
          <div
            data-aos="fade-up"
            className="px-10 max-w-[90%] flex flex-wrap justify-center gap-8 mt-20 mx-auto"
          >
            {/* Linkedin */}
            <div className="shadow-xl p-6 py-10 rounded-lg w-full md:w-52">
              <p className="text-2xl flex gap-x-3 justify-center items-center">
                <FaLinkedin className="text-3xl text-[#0077B5]" />
                LinkedIn
              </p>
              <br />
              <div className="flex justify-center">
                <OutlineButton
                  onClick={() => {
                    window.open("https://www.linkedin.com/in/roshith-prakash/");
                  }}
                  text="Let's Connect!"
                />
              </div>
            </div>

            {/* Email */}
            <div className="shadow-xl  p-6 py-10 rounded-lg w-full md:w-52">
              <p className=" text-2xl flex gap-x-3 justify-center items-center">
                <FaEnvelope className="text-3xl text-hovercta" />
                Email
              </p>
              <br />
              <div className="flex justify-center">
                <OutlineButton
                  onClick={() => {
                    window.open("mailto:roshithprakash07@gmail.com");
                  }}
                  text="Let's Talk!"
                />
              </div>
            </div>

            {/* Github */}
            <div className="shadow-xl p-6 py-10 rounded-lg w-full md:w-52">
              <p className=" text-2xl flex gap-x-3 justify-center items-center">
                <FaGithub className="text-3xl text-[#171515]" />
                Github
              </p>
              <br />
              <div className="flex justify-center">
                <OutlineButton
                  onClick={() => {
                    window.open("https://github.com/roshith-prakash");
                  }}
                  text="View my Profile"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="hidden lg:w-[40%] lg:flex justify-center items-start pt-5">
          <img
            src={contact}
            alt="Contact"
            className="w-[70%] pointer-events-none"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

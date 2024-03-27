import React, { useState, useEffect } from "react";
import { Footer, Navbar, OutlineButton } from "../components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import contact from "../assets/contact.svg";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [error, setError] = useState({
    name: 0,
    email: 0,
    message: 0,
  });

  useEffect(() => {
    document.title = "Contact | Roshith Prakash";
  }, []);

  return (
    <>
      <Navbar />
      <div className=" pt-20 pb-32 flex">
        <div className="w-full lg:w-[60%]">
          <p className="text-center text-3xl font-semibold px-5">
            Interested in working together?
          </p>
          <p className="text-center mt-4 text-xl font-semibold px-5">
            Send me a message!
          </p>

          <div className="px-10 max-w-[90%] flex flex-wrap justify-center gap-8 mt-20 mx-auto">
            <div className="shadow-xl p-6 rounded-lg w-full md:w-52">
              <p className="text-hovercta text-2xl flex gap-x-3 justify-center items-center">
                <FaLinkedin className="text-3xl" />
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

            <div className="shadow-xl  p-6 rounded-lg w-full md:w-52">
              <p className="text-hovercta text-2xl flex gap-x-3 justify-center items-center">
                <FaEnvelope />
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

            <div className="shadow-xl p-6 rounded-lg w-full md:w-52">
              <p className="text-hovercta text-2xl flex gap-x-3 justify-center items-center">
                <FaGithub />
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
        <div className="hidden lg:w-[40%] lg:flex justify-center items-start pt-10">
          <img src={contact} className="w-[70%] pointer-events-none" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

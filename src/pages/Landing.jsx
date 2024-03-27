import React from "react";
import { Navbar, Footer } from "../components";

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="font-inter min-h-screen bg-gradient-to-br from-white to-grey">
        {/* ---------------------------------------------------- */}
        {/* Hero Section*/}
        <div>
          <p className="text-5xl mt-40 font-semibold font-dmSans text-heading text-center">
            Hey, I am Roshith Prakash
          </p>
          <p className="text-2xl mt-5 font-semibold font-dmSans text-heading text-center">
            A Full Stack Web Developer specializing in the MERN Stack.
          </p>
        </div>

        {/* ---------------------------------------------------- */}
      </div>
      <Footer />
    </>
  );
};

export default Landing;

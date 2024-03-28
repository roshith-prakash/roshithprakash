import React, { useEffect } from "react";
import { Footer, Navbar } from "../components";

const SmartPower = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "SmartPower | Projects";
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-14 pb-48">SmartPower</div>
      <Footer />
    </>
  );
};

export default SmartPower;

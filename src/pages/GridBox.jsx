import React, { useEffect } from "react";
import { Footer, Navbar } from "../components";

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
      <div className="pt-14 pb-48">GridBox</div>
      <Footer />
    </>
  );
};

export default GridBox;

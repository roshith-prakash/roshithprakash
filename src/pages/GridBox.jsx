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
      <div className="pt-14 pb-48">
        GridBox
        <video
          src="https://res.cloudinary.com/do8rpl9l4/video/upload/v1711613929/portfolio/gridbox.mp4"
          controls
        />
      </div>
      <Footer />
    </>
  );
};

export default GridBox;

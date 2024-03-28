import React, { useEffect } from "react";
import { Footer, Navbar } from "../components";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Gallery | Projects";
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-14 pb-48">Gallery</div>
      <Footer />
    </>
  );
};

export default Gallery;

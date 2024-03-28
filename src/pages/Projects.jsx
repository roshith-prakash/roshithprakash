import React, { useEffect } from "react";
import { Footer, Navbar, OutlineButton } from "../components";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Projects | Roshith Prakash";
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-14 pb-32">
        <p className="text-3xl text-center font-semibold">Projects</p>
        <p className="text-lg text-center px-5 md:px-10 mt-8 lg:max-w-[90%] mx-auto">
          To live is to learn, and to learn is to develop. Let's take a look at
          some of my work.
        </p>

        <div
          data-aos="fade-up"
          className="mt-14 max-w-[90%] mx-auto flex flex-wrap justify-between gap-y-10 md:gap-x-5 lg:gap-x-14"
        >
          {/* SmartPower */}
          <div
            onClick={() => navigate("/projects/smartpower")}
            className="group overflow-hidden rounded-xl border-2 shadow-md relative h-96 w-full md:w-[45%] lg:flex-1 hover:scale-105 hover:shadow-2xl transition-all cursor-pointer"
          >
            <img
              src="https://res.cloudinary.com/do8rpl9l4/image/upload/v1711627110/portfolio/smartpower.png"
              alt="SmartPower"
              className="h-full w-full rounded-xl"
            />
            <div className="absolute w-full h-full px-5 bg-grey top-0 left-0 rounded-xl opacity-80 lg:opacity-0 group-hover:opacity-90 transition-all flex justify-center items-center">
              <div>
                <p className="text-3xl text-center font-semibold">SmartPower</p>
                <p className="text-lg text-center mt-5">
                  SmartPower was an IOT based project that was used to measure a
                  consumer's electrical usage.
                </p>
                <div className="mt-5 flex justify-center">
                  <OutlineButton
                    onClick={() => {
                      navigate("/projects/smartpower");
                    }}
                    text="View More"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* The GridBox */}
          <div
            onClick={() => navigate("/projects/gridbox")}
            className="group rounded-xl border-2 shadow-md relative h-96 w-full md:w-[45%] lg:flex-1 hover:scale-105 hover:shadow-2xl transition-all cursor-pointer"
          >
            <img
              src="https://res.cloudinary.com/do8rpl9l4/image/upload/v1711627111/portfolio/gridbox.png"
              alt="The Gridbox"
              className="h-full w-full rounded-xl"
            />
            <div className="absolute w-full h-full px-5 bg-grey top-0 left-0 rounded-xl opacity-80 lg:opacity-0 group-hover:opacity-90 transition-all flex justify-center items-center">
              <div>
                <p className="text-3xl text-center font-semibold">
                  The GridBox
                </p>
                <p className="text-lg text-center mt-5">
                  The GridBox is Formula 1 data & statistics website that can be
                  used to view race, qualifying data as well as race schedules.
                </p>
                <div className="mt-5 flex justify-center">
                  <OutlineButton
                    onClick={() => {
                      navigate("/projects/gridbox");
                    }}
                    text="View More"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div
            onClick={() => navigate("/projects/gallery")}
            className="group rounded-xl border-2 shadow-md relative h-96 w-full md:w-[45%] lg:flex-1 hover:scale-105 hover:shadow-2xl transition-all cursor-pointer"
          >
            <img
              src="https://res.cloudinary.com/do8rpl9l4/image/upload/v1711627110/portfolio/gallery.png"
              alt="The Gallery"
              className="h-full w-full rounded-xl"
            />
            <div className="absolute w-full h-full px-5 bg-grey top-0 left-0 rounded-xl opacity-80 lg:opacity-0 group-hover:opacity-90 transition-all flex justify-center items-center">
              <div>
                <p className="text-3xl text-center font-semibold">
                  The Gallery
                </p>
                <p className="text-lg text-center mt-5">
                  The Gallery is a photo gallery based website that is used to
                  display images using the Pexels API.
                </p>
                <div className="mt-5 flex justify-center">
                  <OutlineButton
                    onClick={(e) => {
                      navigate("/projects/gallery");
                    }}
                    text="View More"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;

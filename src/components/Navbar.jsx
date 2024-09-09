import React, { useState } from "react";
import OutlineButton from "./OutlineButton";
import logo from "../assets/logo.jpg";
import CTAButton from "./CTAButton";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { GoDownload } from "react-icons/go";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (link) => {
    navigate(link);
    setOpen(false);
  };

  return (
    <>
      <div
        className={`font-inter ${
          !open && "shadow-md"
        } lg:shadow-md flex justify-between items-center px-10 py-5`}
      >
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 w-12 cursor-pointer"></img>
        </Link>
        <div className="hidden lg:flex gap-x-8 font-medium items-center">
          <Link
            to="/"
            className="hover:text-cta cursor-pointer  transition-all"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-cta cursor-pointer  transition-all"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="hover:text-cta cursor-pointer  transition-all"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-cta cursor-pointer  transition-all"
          >
            Contact
          </Link>
          <OutlineButton
            onClick={() => {
              window.open("roshithprakash_resume.pdf");
            }}
            text={
              <div className="flex gap-x-2 items-center">
                Resume
                <GoDownload className="text-lg" />
              </div>
            }
          />
        </div>

        {/* Hamburger Button to open the drawer */}
        <div className="flex lg:hidden gap-x-5 lg:gap-x-8 font-medium items-center">
          <div className="flex items-center gap-x-5">
            <RxHamburgerMenu
              onClick={() => setOpen(true)}
              className="cursor-pointer text-xl text-ink"
            />
          </div>
        </div>
        <div
          className={`h-screen w-full text-xl md:text-lg fixed top-0 right-0 z-50 bg-white pb-6 text-center shadow-md ${
            open ? "translate-x-0" : "translate-x-[100%]"
          } transition-all duration-500`}
        >
          <div className="flex justify-between items-center pt-6 px-8 lg:px-10 mb-14">
            {/* Title */}
            <div className="flex items-center gap-x-2">
              <img alt="Roshith Prakash" src={logo} className="h-12 w-12" />
            </div>
            {/* Close drawer */}
            <RxCross2
              onClick={() => setOpen(false)}
              className="cursor-pointer text-2xl hover:text-cta transition-all"
            />
          </div>

          <div className="px-8 mt-20 text-xl font-medium flex flex-col items-center justify-between gap-y-12 ">
            <p
              onClick={() => handleSearch("/")}
              className="hover:text-cta transition-all cursor-pointer w-fit"
            >
              Home
            </p>
            <p
              onClick={() => handleSearch("/about")}
              className="hover:text-cta transition-all cursor-pointer w-fit"
            >
              About
            </p>
            <p
              onClick={() => handleSearch("/projects")}
              className="hover:text-cta transition-all cursor-pointer w-fit"
            >
              Projects
            </p>
            <p
              onClick={() => handleSearch("/contact")}
              className="hover:text-cta transition-all cursor-pointer w-fit"
            >
              Contact
            </p>

            <CTAButton
              onClick={() => {
                window.open("roshithprakash_resume.pdf");
              }}
              text={
                <div className="flex gap-x-2 items-center">
                  Resume
                  <GoDownload className="text-lg" />
                </div>
              }
            />
          </div>

          <div className="text-sm w-full absolute bottom-24 lg:bottom-10 left-1/2 -translate-x-1/2 pl-1">
            Developed by Roshith Prakash.
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

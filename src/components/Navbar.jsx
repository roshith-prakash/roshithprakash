import React, { useState } from "react";
import OutlineButton from "./OutlineButton";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import CTAButton from "./CTAButton";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`font-inter ${
          !open && "shadow-md"
        } flex justify-between items-center px-10 py-5`}
      >
        <img
          src={logo}
          onClick={() => navigate("/")}
          className="h-12 w-12 cursor-pointer"
        ></img>
        <div className="hidden lg:flex gap-x-8 font-medium items-center">
          <p className="hover:text-cta cursor-pointer  transition-all">Home</p>
          <p className="hover:text-cta cursor-pointer  transition-all">About</p>
          <p className="hover:text-cta cursor-pointer  transition-all">
            Projects
          </p>
          <OutlineButton
            onClick={() => {
              window.open("Roshith_Prakash_Resume.pdf");
            }}
            text="Resume"
          />
        </div>
        <div className="lg:hidden">
          {open ? (
            <RxCross2
              onClick={() => setOpen(false)}
              className="cursor-pointer text-xl"
            />
          ) : (
            <RxHamburgerMenu
              onClick={() => setOpen(true)}
              className="cursor-pointer text-xl"
            />
          )}
        </div>
      </div>

      {open && (
        <div className="lg:hidden absolute w-full z-10 bg-white px-5 pb-6 text-center shadow-md">
          <p className="hover:text-cta cursor-pointer my-2 transition-all">
            Home
          </p>
          <p className="hover:text-cta cursor-pointer my-2 transition-all">
            About
          </p>
          <p className="hover:text-cta cursor-pointer my-2 transition-all">
            Projects
          </p>
          <br />
          <CTAButton
            onClick={() => {
              window.open("Roshith_Prakash_Resume.pdf");
            }}
            text="Resume"
          />
        </div>
      )}
    </>
  );
};

export default Navbar;

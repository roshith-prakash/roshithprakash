import { useState } from "react";
import OutlineButton from "./SecondaryButton";
import CTAButton from "./PrimaryButton";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { GoDownload } from "react-icons/go";
import { useDarkMode } from "../context/DarkModeContext";
import { IoMoon } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (link: string) => {
    navigate(link);
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`font-inter bg-white dark:bg-darkbg dark:text-darkmodetext flex justify-between items-center px-10 py-5`}
      >
        <Link to="/" aria-label="Home">
          {isDarkMode ? (
            <img
              src={
                "https://res.cloudinary.com/do8rpl9l4/image/upload/v1736843158/logodark_gs3pnp.png"
              }
              alt="Logo"
              className="h-12 cursor-pointer"
            />
          ) : (
            <img
              src={
                "https://res.cloudinary.com/do8rpl9l4/image/upload/v1736843158/logo_iem9wr.jpg"
              }
              alt="Logo"
              className="h-12 cursor-pointer"
            />
          )}
        </Link>

        <div className="hidden translate-x-14  lg:flex gap-x-8 font-medium items-center">
          <Link
            to="/"
            className="hover:text-cta dark:hover:text-darkmodeCTA transition-all"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-cta dark:hover:text-darkmodeCTA transition-all"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="hover:text-cta dark:hover:text-darkmodeCTA transition-all"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-cta dark:hover:text-darkmodeCTA transition-all"
          >
            Contact
          </Link>
          <Link to="roshithprakash_resume.pdf" target="_blank">
            <OutlineButton
              text={
                <div className="flex gap-x-2 items-center">
                  Resume
                  <GoDownload className="text-lg" />
                </div>
              }
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-x-6">
          <a
            href="https://github.com/roshith-prakash"
            target="_blank"
            rel="noreferrer"
            className=" hover:text-cta dark:last:hover:text-darkmodeCTA transition-all cursor-pointer rounded-full "
            aria-label="Visit GitHub Profile"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/roshith-prakash/"
            target="_blank"
            rel="noreferrer"
            className=" hover:text-cta dark:last:hover:text-darkmodeCTA transition-all cursor-pointer rounded-full "
            aria-label="Visit LinkedIn Profile"
          >
            <FaLinkedin className="text-2xl" />
          </a>

          <button
            aria-label="Change Theme"
            className="hidden lg:flex"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <IoSunnySharp className="text-2xl hover:text-darkmodeCTA transition-all" />
            ) : (
              <IoMoon className="text-2xl hover:text-cta transition-all" />
            )}
          </button>
        </div>

        {/* Hamburger Button to open the drawer */}
        <div className="flex lg:hidden gap-x-10 font-medium items-center">
          <button aria-label="Change Theme" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <IoSunnySharp className="text-xl hover:text-cta transition-all" />
            ) : (
              <IoMoon className="text-xl hover:text-cta transition-all" />
            )}
          </button>

          <RxHamburgerMenu
            onClick={() => setOpen(true)}
            className="cursor-pointer text-xl text-ink"
            aria-label="Open menu"
          />
        </div>

        {/* Drawer Menu */}
        <div
          className={`h-screen w-full text-xl md:text-lg fixed top-0 right-0 z-50 bg-white dark:bg-darkbg pb-6 text-center shadow-md ${
            open ? "translate-x-0" : "translate-x-[100%]"
          } transition-all duration-500`}
          role="dialog"
          aria-modal="true"
          aria-label="Drawer Menu"
        >
          <div className="flex justify-between items-center pt-6 px-8 lg:px-10 mb-14">
            <button onClick={() => handleSearch("/")} aria-label="Home">
              {isDarkMode ? (
                <img
                  src={
                    "https://res.cloudinary.com/do8rpl9l4/image/upload/v1736843158/logodark_gs3pnp.png"
                  }
                  alt="Logo"
                  className="h-12 cursor-pointer"
                />
              ) : (
                <img
                  src={
                    "https://res.cloudinary.com/do8rpl9l4/image/upload/v1736843158/logo_iem9wr.jpg"
                  }
                  alt="Logo"
                  className="h-12 cursor-pointer"
                />
              )}
            </button>
            <RxCross2
              onClick={() => setOpen(false)}
              className="cursor-pointer text-2xl hover:text-cta transition-all"
              aria-label="Close menu"
            />
          </div>

          <div className="px-8 mt-20 text-xl font-medium flex flex-col items-center justify-between gap-y-12">
            <p
              onClick={() => handleSearch("/")}
              className="hover:text-cta transition-all cursor-pointer w-fit"
              role="button"
              tabIndex={0}
              aria-label="Go to Home"
            >
              Home
            </p>
            <p
              onClick={() => handleSearch("/about")}
              className="hover:text-cta transition-all cursor-pointer w-fit"
              role="button"
              tabIndex={0}
              aria-label="Go to About"
            >
              About
            </p>
            <p
              onClick={() => handleSearch("/projects")}
              className="hover:text-cta transition-all cursor-pointer w-fit"
              role="button"
              tabIndex={0}
              aria-label="Go to Projects"
            >
              Projects
            </p>
            <p
              onClick={() => handleSearch("/contact")}
              className="hover:text-cta transition-all cursor-pointer w-fit"
              role="button"
              tabIndex={0}
              aria-label="Go to Contact"
            >
              Contact
            </p>

            <Link to="roshithprakash_resume.pdf" target="_blank">
              <CTAButton
                text={
                  <div className="flex gap-x-2 items-center">
                    Resume
                    <GoDownload className="text-lg" />
                  </div>
                }
              />
            </Link>
          </div>

          <div className="text-sm w-full absolute bottom-24 lg:bottom-10 left-1/2 -translate-x-1/2 pl-1">
            Developed by Roshith Prakash.
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

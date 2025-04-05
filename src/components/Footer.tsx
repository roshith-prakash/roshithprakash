import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import { useDarkMode } from "../context/DarkModeContext";

const Footer = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <footer
      className={` ${
        isDarkMode
          ? "bg-secondarydarkbg border-t-2 border-darkmodetext"
          : "bg-gradient-to-b from-hovercta to-hovercta/95"
      }  font-inter pb-20 min-h-50vh relative text-white`}
    >
      <div className="absolute dark:border-2 dark:border-darkmodetext -top-16 w-[90vw] lg:w-[80vw] left-1/2 -translate-x-1/2 rounded-lg h-32 flex justify-around items-center bg-[#1f1e1e] text-darkmodetext">
        <p className="text-xl font-medium">Let's Talk!</p>
        <a
          href="mailto:roshithprakash07@gmail.com"
          className="px-5 flex items-center gap-x-2 py-2 font-medium text-darkmodetext hover:bg-white hover:text-black transition-all cursor-pointer rounded-full border-2 border-white"
          aria-label="Email Roshith Prakash"
        >
          <FaEnvelope className="text-lg" />
          Email Me!
        </a>
      </div>

      <div className="pt-36 font-medium flex flex-col lg:flex-row">
        <div className="flex-1">
          <p className="text-2xl text-center">
            &#8220;Ad Astra Per Aspera&#8221;
          </p>
          <p className="text-center mt-2 text-xl">
            Learning something new every day!
          </p>

          <div className="flex justify-center gap-x-8 mt-10">
            <a
              href="https://github.com/roshith-prakash"
              target="_blank"
              rel="noreferrer"
              className="p-3 text-white hover:bg-white hover:text-cta transition-all cursor-pointer rounded-full border-2 border-white"
              aria-label="Visit GitHub Profile"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/roshith-prakash/"
              target="_blank"
              rel="noreferrer"
              className="p-3 text-white hover:bg-white hover:text-cta transition-all cursor-pointer rounded-full border-2 border-white"
              aria-label="Visit LinkedIn Profile"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="mailto:roshithprakash07@gmail.com"
              className="p-3 text-white hover:bg-white hover:text-cta transition-all cursor-pointer rounded-full border-2 border-white"
              aria-label="Email Roshith Prakash"
            >
              <FaEnvelope className="text-2xl" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://x.com/roshith_prakash"
              className="p-3 text-white hover:bg-white hover:text-cta transition-all cursor-pointer rounded-full border-2 border-white"
              aria-label="X Profile"
            >
              <FaXTwitter className="text-2xl" />
            </a>
          </div>

          <p className="mt-14 text-center">Developed by Roshith Prakash.</p>
          <p className="mt-3 text-center">2024.</p>
        </div>

        <div className="hidden flex-1 lg:flex justify-center items-center">
          <img
            src={
              "https://res.cloudinary.com/do8rpl9l4/image/upload/v1736843230/dev_cjmzgb.svg"
            }
            alt="Illustration of a programmer"
            className="h-60 pointer-events-none"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

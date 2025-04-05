import { FaRegArrowAltCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed z-20 bottom-10 right-5 p-3 cursor-pointer border-2 text-cta dark:text-white border-cta bg-white dark:bg-darkbg dark:border-white hover:bg-cta hover:border-cta hover:text-white dark:hover:text-darkbg dark:hover:bg-white rounded-full transition-all"
      aria-label="Scroll to top"
    >
      <FaRegArrowAltCircleUp className="text-2xl" />
    </button>
  );
};

export default ScrollToTop;

import { useEffect } from "react";
import { CTAButton, ScrollToTop } from "../components";

const ReUseIt = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Title
  useEffect(() => {
    document.title = "Re-use-it! | Projects";
  }, []);

  return (
    <>
      <main className="relative dark:bg-darkbg dark:text-darkmodetext pt-14 pb-48">
        {/* Scroll to Top button */}
        <ScrollToTop />

        {/* Header Section */}
        <header className="text-center space-y-10">
          <h1 className="text-4xl font-extrabold tracking-wide">Re-use-it!</h1>
          <p className="text-lg px-6 lg:px-20">
            A collection of reusable and customizable React components styled
            with Tailwind CSS. These components are designed to provide a
            consistent look and feel across your applications while being
            flexible enough to adapt to different use cases.
          </p>
          <div className="mt-10 flex justify-center">
            <CTAButton
              onClick={() => window.open("https://re-use-it.vercel.app/")}
              text="Visit the Site!"
            />
          </div>
        </header>

        {/* Components Section */}
        <h2 className="mt-20 text-2xl font-medium text-center">Components</h2>
        <div className="pt-5 px-10 lg:px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6">
          {[
            "Accordion",
            "Accordion Group",
            "Avatar",
            "Badge",
            "Card",
            "Carousel",
            "Checkbox",
            "Drawer",
            "Footer",
            "Loading Placeholder",
            "Modal",
            "Navbar",
            "Password Input",
            "Primary Button",
            "Progress Bar",
            "Radio Button",
            "Secondary Button",
            "Security Headers",
            "Select",
            "Slider",
            "Switch",
            "Table",
            "Text Input",
            "Text Area",
            "Timeline",
            "Toggle",
            "Tooltip",
          ].map((component) => (
            <div
              key={component}
              className="bg-gray-100 dark:bg-secondarydarkbg p-4 rounded-xl shadow-md text-center"
            >
              {component}
            </div>
          ))}
        </div>

        {/* Code Snippets Section */}
        <h2 className="mt-20 text-2xl font-medium text-center">
          Code Snippets
        </h2>
        <div className="pt-5 px-10 lg:px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6">
          {[
            "useDebounce Hook",
            "Regex Functions",
            "Shuffle Array",
            "Minutes to Read",
            "Format Number (Intl)",
            "Axios Instance",
            "Multer Configuration",
            "Cloudinary SDK Configuration",
            "Image Compression",
          ].map((snippet) => (
            <div
              key={snippet}
              className="bg-gray-100 dark:bg-secondarydarkbg p-4 rounded-xl shadow-md text-center"
            >
              {snippet}
            </div>
          ))}
        </div>

        {/* Screenshot Section */}
        <section className="mt-24 px-5 lg:px-10 flex justify-center">
          <img
            src="https://res.cloudinary.com/do8rpl9l4/image/upload/v1738659332/Screenshot_2025-02-04_142440_ci5q29.png"
            alt="Styled Components"
            className="w-auto max-h-96"
          />
        </section>
      </main>
    </>
  );
};

export default ReUseIt;

import { useEffect } from "react";
import { CTAButton, Footer, ScrollToTop } from "../components";

const StyledComponents = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Title
  useEffect(() => {
    document.title = "Styled Components | Projects";
  }, []);

  return (
    <>
      <main className="relative dark:bg-darkbg dark:text-darkmodetext pt-14 pb-48">
        {/* ---------------------------------------------------- */}

        {/* Scroll to Top button */}
        <ScrollToTop />

        {/* ---------------------------------------------------- */}

        <section>
          <h1 className="text-3xl text-center font-semibold">
            Styled Components
          </h1>
          <p className="mt-8 text-lg px-5 lg:px-10 text-center">
            A collection of reusable and customizable React components styled
            with Tailwind CSS. These components are designed to provide a
            consistent look and feel across your applications while being
            flexible enough to adapt to different use cases.
          </p>
          <div className="mt-10 flex justify-center">
            <CTAButton
              onClick={() =>
                window.open("https://styled-component-library.vercel.app/")
              }
              text="Visit the Site!"
            />
          </div>
        </section>

        <h2 className="mt-20 text-2xl font-medium text-center">Components</h2>
        <div className="pt-5 px-10 lg:px-32 flex flex-wrap justify-evenly gap-y-14">
          <section className="md:flex-1 flex flex-col items-center">
            <ul className="list-disc text-lg mt-5 px-6 md:px-12">
              <li>Primary Button</li>
              <li>Secondary Button</li>
              <li>Error</li>
              <li>Text Input</li>
            </ul>
          </section>

          <section className="md:flex-1 flex flex-col items-center">
            <ul className="list-disc text-lg mt-5 px-6 md:px-12">
              <li>Password Input</li>
              <li>Loading Placeholder</li>
              <li>Timeline</li>
              <li>Security Headers</li>
            </ul>
          </section>
        </div>

        <section className="mt-24 px-5 lg:px-10 flex justify-center">
          <img
            src="https://res.cloudinary.com/do8rpl9l4/image/upload/v1737649658/Screenshot_2025-01-23_215657_ekyskz.png"
            alt="Styled Components"
            className="w-auto max-h-96"
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default StyledComponents;

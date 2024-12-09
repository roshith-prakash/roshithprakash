import React, { useEffect } from "react";
import { Footer, OutlineButton } from "../components";
import { useNavigate } from "react-router-dom";
import notfound from "../assets/notfound.svg";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Page Not Found";
  }, []);

  return (
    <>
      <main className="min-h-[60vh] dark:bg-darkbg dark:text-darkmodetext flex items-center justify-center pt-20 pb-32">
        <div className="text-center">
          <img
            src={notfound}
            alt="Not Found Illustration"
            className="w-[40vw] mx-auto"
          />
          <h1 className="text-4xl font-semibold mt-8">404 - Page Not Found</h1>
          <p className="text-2xl px-5 mt-6">
            I think we are lost. Let's go back?
          </p>
          <div className="mt-10">
            <OutlineButton
              onClick={() => navigate("/")}
              text="Go Back Home"
              aria-label="Navigate to homepage"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;

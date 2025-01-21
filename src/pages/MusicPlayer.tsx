import { useEffect } from "react";
import { CTAButton, Footer, ScrollToTop } from "../components";

const MusicPlayer = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Title
  useEffect(() => {
    document.title = "The Thought Journal | Projects";
  }, []);

  return (
    <>
      <main className="relative dark:bg-darkbg dark:text-darkmodetext pt-14 pb-48">
        {/* Scroll to Top button */}
        <ScrollToTop />

        <header className="text-center">
          <h1 className="text-3xl font-semibold">Music Player</h1>
          <p className="mt-8 text-lg px-5 lg:px-10">
            A Music Player Application built using React + Vite.
          </p>
        </header>

        <div className="mt-10 flex justify-center">
          <CTAButton
            onClick={() => window.open("https://music-player-rp.vercel.app/")}
            text="Visit the Site!"
          />
        </div>

        <div className="mt-20 px-10 lg:px-32 flex flex-wrap md:justify-around gap-y-14">
          <section>
            <h2 className="text-2xl font-medium">Technologies used:</h2>
            <ul className="list-disc text-lg mt-5 px-6 md:px-12">
              <li>React (Vite)</li>
              <li>Firebase Auth</li>
              <li>Tailwind CSS</li>
              <li>Axios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium">Features:</h2>
            <ul className="list-disc text-lg mt-5 px-6 md:px-12">
              <li>Play & listen to songs.</li>
              <li>Filter songs based on search.</li>
              <li>Filter between all songs & top songs.</li>
              <li>Login with Google.</li>
            </ul>
          </section>
        </div>

        <section className="mt-24 px-5 lg:px-10 flex justify-center">
          <img
            src="https://res.cloudinary.com/do8rpl9l4/image/upload/v1737356962/musicplayer_bnr4vg.png"
            alt="The Thought Journal interface"
            className="w-auto max-h-96"
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MusicPlayer;

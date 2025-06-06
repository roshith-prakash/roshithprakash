import { useEffect } from "react";
import { CTAButton, ScrollToTop } from "../components";

const MusicPlayer = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Title
  useEffect(() => {
    document.title = "Music Player | Projects";
  }, []);

  return (
    <>
      <main className="relative dark:bg-darkbg dark:text-darkmodetext pt-14 pb-48">
        {/* Scroll to Top button */}
        <ScrollToTop />

        {/* Header Section */}
        <header className="text-center space-y-14">
          <h1 className="text-4xl font-extrabold tracking-wide">
            Music Player
          </h1>
          <p className="text-lg px-5 lg:px-20">
            A Music Player Application built using React + Vite.
          </p>
          <div>
            <CTAButton
              onClick={() => window.open("https://music-player-rp.vercel.app/")}
              text="Visit the Site!"
            />
          </div>
        </header>

        {/* Technologies and Features Sections */}
        <div className="mt-20 px-8 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technologies Section */}
          <section className="bg-grey dark:bg-secondarydarkbg p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-cta">
              Technologies Used
            </h2>
            <ul className="list-disc text-lg pl-6 space-y-2">
              <li>React (Vite)</li>
              <li>Firebase Auth</li>
              <li>Tailwind CSS</li>
              <li>Axios</li>
            </ul>
          </section>

          {/* Features Section */}
          <section className="bg-grey dark:bg-secondarydarkbg p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-cta">Features</h2>
            <ul className="list-disc text-lg pl-6 space-y-2">
              <li>Play & listen to songs.</li>
              <li>Filter songs based on search.</li>
              <li>Filter between all songs & top songs.</li>
              <li>Login with Google.</li>
            </ul>
          </section>
        </div>

        {/* Image Section */}
        <section className="mt-20 flex flex-col items-center">
          <div className="relative bg-white rounded-2xl shadow-md overflow-hidden max-w-3xl">
            <img
              src="https://res.cloudinary.com/do8rpl9l4/image/upload/v1737356962/musicplayer_bnr4vg.png"
              alt="Music Player Interface"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="mt-6 text-gray-600 text-center">
            Experience a seamless music experience with a user-friendly
            interface.
          </p>
        </section>
      </main>
    </>
  );
};

export default MusicPlayer;

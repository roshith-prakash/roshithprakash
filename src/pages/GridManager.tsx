import { useEffect } from "react";
import { CTAButton, Footer, ScrollToTop } from "../components";

const GridManager = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Title
  useEffect(() => {
    document.title = "Grid Manager | Projects";
  }, []);

  return (
    <>
      <main className="relative dark:bg-darkbg dark:text-darkmodetext pt-14 pb-48">
        {/* Scroll to Top button */}
        <ScrollToTop />

        <header className="text-center space-y-14">
          <h1 className="text-4xl font-bold tracking-wide">Grid Manager</h1>
          <p className="mt-6 text-lg px-5 lg:px-20">
            Grid Manager is an F1 fantasy app designed for racing enthusiasts to
            compete, strategize, and connect. Build your dream team, challenge
            friends, and track your performance in real time. Engage with the F1
            community, and fuel your passion for racing with this dynamic and
            immersive platform.
          </p>
          <div className="mt-8">
            <CTAButton
              onClick={() => window.open("https://grid-manager.vercel.app/")}
              text="Visit the Site!"
            />
          </div>
        </header>

        <div className="mt-20 border-y-2 py-5">
          <p className="px-5 text-center text-lg font-medium">
            Note: Grid Manager is still in development and is prone to changes.
          </p>
        </div>

        <div className="mt-20 px-8 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-10">
          <section className="bg-grey dark:bg-secondarydarkbg p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-cta">
              Technologies Used
            </h2>
            <ul className="list-disc text-lg pl-6 space-y-2">
              <li>React (Vite + TypeScript)</li>
              <li>Tanstack Query</li>
              <li>Tailwind CSS</li>
              <li>Firebase Auth</li>
              <li>Node JS + Express</li>
              <li>Prisma ORM</li>
              <li>Multer + Cloudinary SDK</li>
            </ul>
          </section>

          <section className="bg-grey dark:bg-secondarydarkbg p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-cta">Features</h2>
            <ul className="list-disc text-lg pl-6 space-y-2">
              <li>Create and manage your F1 fantasy team.</li>
              <li>Signup / Login using your Google Account.</li>
              <li>
                Track your team's performance over the Grand Prix Weekend.
              </li>
              <li>Join and compete in private and public leagues.</li>
            </ul>
          </section>
        </div>

        <section className="mt-20 flex flex-col items-center">
          <div className="relative bg-white rounded-2xl shadow-md overflow-hidden max-w-3xl">
            <img
              src="https://res.cloudinary.com/do8rpl9l4/image/upload/v1743669362/Screenshot_2025-04-03_140349_c6fhp0.png"
              alt="Grid Manager"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="mt-6 text-gray-600 text-center">
            Explore the intuitive and expressive interface of Grid Manager.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GridManager;

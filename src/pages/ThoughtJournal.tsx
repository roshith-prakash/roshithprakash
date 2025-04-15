import { useEffect } from "react";
import { CTAButton, Footer, ScrollToTop } from "../components";

const ThoughtJournal = () => {
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

        <header className="text-center space-y-14">
          <h1 className="text-4xl font-bold tracking-wide">
            The Thought Journal
          </h1>
          <p className="mt-6 text-lg px-5 lg:px-20">
            A blog platform with social media features designed for sharing
            ideas, stories, and insights. Connect with readers, spark
            conversations, and build your community with this intuitive and
            expressive platform.
          </p>
          <div className="mt-8">
            <CTAButton
              onClick={() =>
                window.open("https://thethoughtjournal.vercel.app/")
              }
              text="Visit the Site!"
            />
          </div>
        </header>

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
              <li>Write blogs using a rich text editor.</li>
              <li>Signup / Login using Google Account.</li>
              <li>Create and Manage your Journal profile.</li>
              <li>Search posts based on title, category, or keywords.</li>
              <li>Like & comment on posts.</li>
              <li>View the accounts that you follow / are following you.</li>
            </ul>
          </section>
        </div>

        <section className="mt-20 flex flex-col items-center">
          <div className="relative bg-white rounded-2xl shadow-md overflow-hidden max-w-3xl">
            <img
              src="https://res.cloudinary.com/do8rpl9l4/image/upload/v1718722273/thoughtjournal_llrbq9.png"
              alt="The Thought Journal interface"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="mt-6 text-gray-600 text-center">
            Explore the intuitive and expressive interface of The Thought
            Journal.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ThoughtJournal;

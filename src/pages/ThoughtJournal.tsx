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

        <header className="text-center">
          <h1 className="text-3xl font-semibold">The Thought Journal</h1>
          <p className="mt-8 text-lg px-5 lg:px-10">
            A blog platform with social media features designed for sharing
            ideas, stories, and insights. Connect with readers, spark
            conversations, and build your community with this intuitive and
            expressive platform.
          </p>
        </header>

        <div className="mt-10 flex justify-center">
          <CTAButton
            onClick={() => window.open("https://thethoughtjournal.vercel.app/")}
            text="Visit the Site!"
          />
        </div>

        <div className="mt-20 px-10 lg:px-32 flex flex-wrap md:justify-around gap-y-14">
          <section>
            <h2 className="text-2xl font-medium">Technologies used:</h2>
            <ul className="list-disc text-lg mt-5 px-6 md:px-12">
              <li>React (Vite + TypeScript)</li>
              <li>Tanstack Query</li>
              <li>Tailwind CSS</li>
              <li>Firebase Auth</li>
              <li>Node JS + Express</li>
              <li>Prisma ORM</li>
              <li>Multer + Cloudinary SDK</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium">Features:</h2>
            <ul className="list-disc text-lg mt-5 px-6 md:px-12">
              <li>Write blogs using a rich text editor.</li>
              <li>Signup / Login using Google Account.</li>
              <li>Create and Manage your Journal profile.</li>
              <li>Search posts based on title, category or key words.</li>
              <li>Like & comment on posts.</li>
              <li>View the accounts that you follow / are following you.</li>
            </ul>
          </section>
        </div>

        <section className="mt-24 px-5 lg:px-10 flex justify-center">
          <img
            src="https://res.cloudinary.com/do8rpl9l4/image/upload/v1718722273/thoughtjournal_llrbq9.png"
            alt="The Thought Journal interface"
            className="w-auto max-h-96"
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ThoughtJournal;

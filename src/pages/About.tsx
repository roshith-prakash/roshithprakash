import {
  MapPin,
  Calendar,
  Languages,
  Heart,
  GraduationCap,
  Briefcase,
  User,
} from "lucide-react";

// @ts-expect-error image import
import dp from "../assets/cropped-image.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen dark:bg-darkbg dark:text-darkmodetext">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 mx-auto overflow-hidden p-1 rounded-full bg-gradient-to-br from-cta/90 to-hovercta/90 ">
              <img src={dp} className="rounded-full" alt="Roshith" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Roshith Prakash
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
            Full Stack Developer & Avid Learner
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
              MERN Stack
            </span>
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
              React
            </span>
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
              Node.js
            </span>
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
              MongoDB
            </span>
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Hi, I am an avid learner and full stack developer who uses the MERN
            Stack to develop exciting web applications. I aspire to learn each
            and every day, for to live is to learn. Seeking opportunities where
            skills can be creatively utilized to develop interesting solutions
            while being resourceful and attaining professional growth.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-16 space-y-12">
        {/* Experience Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Experience
            </h2>
          </div>

          <div className="bg-white dark:bg-white/5 rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-white/10">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-cta to-hovercta p-8 text-white flex items-center justify-center">
                <div className="text-center">
                  <img
                    src="https://res.cloudinary.com/do8rpl9l4/image/upload/v1736843326/whatcode_ssrwcw.png"
                    alt="WhatCode"
                    className="max-h-24 mx-auto mb-4 bg-white rounded-lg p-2"
                  />
                  <h3 className="text-xl font-semibold">WhatCode</h3>
                  <p className="text-blue-100">MERN Developer</p>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-600 dark:text-slate-400">
                    October 2023 - March 2024
                  </span>
                </div>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Developed interactive and responsive front-end
                      applications using React and Tailwind
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Built web servers for implementing business logic using
                      Node.js and Express
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Debugged various logical and UI-based bugs and
                      reimplemented logic
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Integrated third-party authentication providers like
                      Firebase
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Implemented data storage and retrieval using MongoDB and
                      Prisma ORM
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cta rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Contributed to various projects, including Web3 and
                      AI-based applications
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Education
            </h2>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-white/5 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-white/10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    BSc.(I.T.) | Bhavans College (Autonomous), Mumbai
                  </h3>
                  <div className="flex mt-3 items-center gap-4">
                    <span className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 rounded-full text-sm font-medium">
                      Grade: A+
                    </span>
                    <span className="px-3 py-1 bg-cta/5 dark:bg-cta/20 text-cta dark:text-cta border border-cta dark:border-cta rounded-full text-sm font-medium">
                      CGPA: 9.78/10
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-white/10">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                HSC Science (I.T.) | Bhavans College, Mumbai
              </h3>
              <span className="px-3 py-1 bg-cta/5 dark:bg-cta/20 text-cta dark:text-cta border border-cta dark:border-cta rounded-full text-sm font-medium">
                Percentage : 77.78%
              </span>
            </div>

            <div className="bg-white dark:bg-white/5 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-white/10">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                SSC | Marol Education Academy's High School, Mumbai
              </h3>
              <span className="px-3 py-1 bg-cta/5 dark:bg-cta/20 text-cta dark:text-cta border border-cta dark:border-cta rounded-full text-sm font-medium">
                Percentage : 92%
              </span>
            </div>
          </div>
        </section>

        {/* Personal Info Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              About Me
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-white/5 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-slate-500" />
                <span className="text-slate-700 dark:text-slate-300">
                  <strong>Name:</strong> Roshith Prakash
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-slate-500" />
                <span className="text-slate-700 dark:text-slate-300">
                  <strong>Date of Birth:</strong> 7th January 2003
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-slate-500" />
                <span className="text-slate-700 dark:text-slate-300">
                  <strong>Location:</strong> Andheri, Mumbai
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <Languages className="w-5 h-5 text-slate-500 mt-0.5" />
                <div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium mb-2">
                    Languages:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                      English
                    </span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                      Hindi
                    </span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                      Marathi
                    </span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                      Malayalam
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-slate-500 mt-0.5" />
                <div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium mb-2">
                    Interests:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 rounded-full text-sm">
                      Writing
                    </span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 rounded-full text-sm">
                      Football
                    </span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 rounded-full text-sm">
                      Formula 1
                    </span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 rounded-full text-sm">
                      Gaming
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

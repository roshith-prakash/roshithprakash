import { Eye, Code, Folder } from "lucide-react";
import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";

export default function ProjectsPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen dark:bg-darkbg">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <Folder className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            To live is to learn, and to learn is to develop. Let's take a look
            at some of my work and the solutions I've built.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                10
              </div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">
                Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                9
              </div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">
                Live Apps
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                5+
              </div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">
                Technologies
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                2
              </div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">
                AI Projects
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div className="group bg-white dark:bg-white/5 rounded-2xl shadow-lg border border-slate-200 dark:border-white/10 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
                {/* Project Image - Fixed height */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project?.imageSrc || "/placeholder.svg"}
                    alt={`Preview of ${project?.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Content - Flex column with space between to push buttons to bottom */}
                <div className="p-6 flex flex-col flex-grow">
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cta dark:group-hover:text-darkmodeCTA transition-colors">
                        {project?.title}
                      </h3>
                      <Folder className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {project?.description}
                    </p>
                  </div>

                  {/* Action Buttons - Fixed at bottom with mt-auto */}
                  <div className="flex gap-3 mt-auto pt-6">
                    {project?.siteLink && (
                      <button
                        onClick={() => {
                          window.open(project?.siteLink, "_blank");
                        }}
                        className="flex-1 bg-gradient-to-r from-cta to-hovercta text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 font-medium text-sm"
                      >
                        <Eye className="w-4 h-4" />
                        Explore App
                      </button>
                    )}

                    {project?.navigateTo && (
                      <button
                        onClick={() => {
                          navigate(project?.navigateTo);
                        }}
                        className="flex-1 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg hover:border-cta hover:text-cta dark:hover:border-white dark:hover:text-cta dark:hover:bg-white transition-all duration-200 flex items-center justify-center gap-2 font-medium text-sm"
                      >
                        <Code className="w-4 h-4" />
                        Learn More
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

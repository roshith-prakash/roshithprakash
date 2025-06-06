"use client";

import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
  User,
} from "lucide-react";

export default function ContactPage() {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/roshith-prakash/", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:roshithprakash07@gmail.com", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/roshith-prakash", "_blank");
  };

  return (
    <div className="min-h-screen dark:bg-darkbg">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Let's Work Together
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Interested in collaborating? I'd love to hear from you! Choose
              your preferred way to get in touch.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* LinkedIn Card */}
              <div className="group bg-white dark:bg-white/5 rounded-2xl shadow-lg border border-slate-200 dark:border-white/10 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0077B5]/10 rounded-xl flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-[#0077B5]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        LinkedIn
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Professional networking
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleLinkedInClick}
                    className="px-6 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#005885] transition-colors duration-200 flex items-center gap-2 font-medium"
                  >
                    Connect
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Email Card */}
              <div className="group bg-white dark:bg-white/5 rounded-2xl shadow-lg border border-slate-200 dark:border-white/10 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        Email
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        roshithprakash07@gmail.com
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleEmailClick}
                    className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center gap-2 font-medium"
                  >
                    Email Me
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* GitHub Card */}
              <div className="group bg-white dark:bg-white/5 rounded-2xl shadow-lg border border-slate-200 dark:border-white/10 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-900/10 dark:bg-slate-100/10 rounded-xl flex items-center justify-center">
                      <Github className="w-6 h-6 text-slate-900 dark:text-slate-100" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        GitHub
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        View my repositories
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleGitHubClick}
                    className="px-6 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors duration-200 flex items-center gap-2 font-medium"
                  >
                    View Code
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Illustration/Info Section */}
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-cta/90 to-hovercta/90 rounded-3xl p-8 text-white">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Ready to Connect?</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    I'm always excited to discuss new opportunities, collaborate
                    on interesting projects, or simply have a conversation about
                    technology and development.
                  </p>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-blue-100">Quick response time</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-blue-100">
                        Open to freelance work
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-blue-100">
                        Available for full-time roles
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-white/5 rounded-2xl shadow-lg border border-slate-200 dark:border-white/10 p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Let's Start a Conversation
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Whether you have a project in mind, want to collaborate, or just
                want to say hello, I'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                  Quick Response
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  I typically respond within 24 hours
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <User className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                  Professional
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Serious about quality and deadlines
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Send className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                  Collaborative
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Love working with teams and clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

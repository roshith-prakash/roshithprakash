import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 dark:bg-darkbg dark:text-white border-t border-gray-200 dark:border-gray-800">
      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="border rounded-lg p-8 mb-16 bg-gray-50 border-gray-200 dark:bg-white/5 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-1">
                Let's work together!
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Have a project in mind?
              </p>
            </div>
            <a
              href="mailto:roshithprakash07@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 rounded-lg font-medium transition-colors"
              aria-label="Email Roshith Prakash"
            >
              <Mail className="w-4 h-4" />
              Send email
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center md:grid md:grid-cols-2 gap-12 md:items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <blockquote className="text-2xl font-medium mb-2">
                "Ad Astra Per Aspera"
              </blockquote>
              <p className="text-gray-600 dark:text-gray-400">
                Learning something new every day!
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/roshith-prakash",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/roshith-prakash/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:roshithprakash07@gmail.com",
                  label: "Email",
                },
                {
                  icon: Twitter,
                  href: "https://x.com/roshith_prakash",
                  label: "Twitter",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-white/10 dark:hover:border-white/5 transition-colors"
                  aria-label={`Visit ${label}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="hidden md:flex justify-end">
            <img
              src="https://res.cloudinary.com/do8rpl9l4/image/upload/v1736843230/dev_cjmzgb.svg"
              alt="Developer illustration"
              className="h-48 w-auto opacity-80"
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Roshith Prakash. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-white/50">
            Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

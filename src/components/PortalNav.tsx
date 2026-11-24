import { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

export default function PortalNav() {
  const [open, setOpen] = useState(false);

  const scrollToClose = (e: React.MouseEvent) => {
    e.preventDefault();
    const closeEl = document.getElementById("close");
    if (closeEl) {
      closeEl.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 h-[58px] px-6 md:px-12 flex items-center justify-between"
        style={{
          background: "rgba(10, 12, 14, 0.72)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid var(--hair)",
        }}
      >
        {/* Wordmark */}
        <Link
          to="/"
          className="font-syne font-semibold text-[15px] text-[#EDE7DC] tracking-[-0.02em] select-none hover:opacity-90 transition-opacity"
        >
          Roshith Prakash<span style={{ color: "var(--amber)" }}>.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/about"
            className="font-sora text-[10.5px] uppercase tracking-[0.13em] text-[#9EA5A8] hover:text-[#E8913C] transition-colors"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="font-sora text-[10.5px] uppercase tracking-[0.13em] text-[#9EA5A8] hover:text-[#E8913C] transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="font-sora text-[10.5px] uppercase tracking-[0.13em] text-[#9EA5A8] hover:text-[#E8913C] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={scrollToClose}
            className="font-sora text-[11px] uppercase tracking-[0.13em] px-4 py-1.5 rounded-full transition-all duration-300"
            style={{
              color: "var(--amber)",
              border: "1px solid var(--amber)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(232, 145, 60, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#EDE7DC] text-2xl p-1"
          aria-label="Toggle Navigation Menu"
        >
          {open ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#0A0C0E] flex flex-col justify-center items-center gap-8 transition-transform duration-500 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-syne text-2xl text-[#EDE7DC]"
        >
          Roshith Prakash<span style={{ color: "var(--amber)" }}>.</span>
        </Link>
        <Link
          to="/about"
          onClick={() => setOpen(false)}
          className="font-sora text-sm uppercase tracking-[0.14em] text-[#9EA5A8] hover:text-[#E8913C]"
        >
          About
        </Link>
        <Link
          to="/projects"
          onClick={() => setOpen(false)}
          className="font-sora text-sm uppercase tracking-[0.14em] text-[#9EA5A8] hover:text-[#E8913C]"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className="font-sora text-sm uppercase tracking-[0.14em] text-[#9EA5A8] hover:text-[#E8913C]"
        >
          Contact
        </Link>
        <button
          onClick={scrollToClose}
          className="font-sora text-xs uppercase tracking-[0.14em] px-6 py-2.5 rounded-full mt-4"
          style={{
            color: "var(--amber)",
            border: "1px solid var(--amber)",
          }}
        >
          Get in Touch
        </button>
      </div>
    </>
  );
}


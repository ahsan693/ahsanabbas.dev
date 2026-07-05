import logo from "../assets/icons/logo.png";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  const navLinks = [
    { label: "Home", href: "#Home" },
    { label: "Experience", href: "#Experience" },
    { label: "Education", href: "#Education" },
    { label: "Projects", href: "#Projects" },
    { label: "About Us", href: "#About" },
  ];

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [toggle]);

  return (
    <>
      <div className="relative z-[70] flex w-full justify-center px-4 sm:px-6 lg:px-0">
        <nav className="flex h-[14vh] min-h-[4.5rem] w-full max-w-[60rem] items-center justify-between py-6 sm:py-8">
          <a href="#Home" className="logo relative z-[70]">
            <img className="w-20 sm:w-24 md:w-28" src={logo} alt="Ahsan Abbas logo" />
          </a>

          {/* Hamburger / Close Button */}
          <button
            type="button"
            onClick={() => setToggle((prev) => !prev)}
            className="relative z-[70] flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full border border-white/15 bg-white/10 backdrop-blur-sm transition hover:bg-white/20 md:hidden"
            aria-label={toggle ? "Close navigation menu" : "Open navigation menu"}
          >
            <span
              className={`block h-0.5 w-5 rounded-full bg-white transition-transform duration-300 ease-in-out ${
                toggle ? "translate-y-[8px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-white transition-opacity duration-300 ease-in-out ${
                toggle ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-white transition-transform duration-300 ease-in-out ${
                toggle ? "-translate-y-[8px] -rotate-45" : ""
              }`}
            />
          </button>

          {/* Desktop Menu Items */}
          <div className="menu-items z-30 hidden gap-8 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="menu-item cursor-pointer transition hover:text-white/60"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 md:hidden ${
          toggle ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Darkened Backdrop */}
        <div
          className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
          onClick={() => setToggle(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute right-0 top-0 flex h-[100dvh] w-full flex-col justify-center px-6 pb-12 pt-28 transition-transform duration-300 sm:max-w-sm ${
            toggle ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <span className="mb-4 ml-2 text-[0.65rem] uppercase tracking-[0.35em] text-white/50">
            Navigate
          </span>

          {/* Scrollable Container (in case of landscape mode on small phones) */}
          <div className="flex w-full flex-col gap-3 overflow-y-auto pb-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                onClick={() => setToggle(false)}
                href={link.href}
                className="flex w-full items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-[0.9rem] font-medium uppercase tracking-[0.2em] text-white/90 shadow-lg backdrop-blur-sm transition-all active:scale-[0.98] hover:border-[#80FFD2]/60 hover:bg-[#80FFD2]/10 hover:text-[#80FFD2]"
              >
                {link.label}
              </a>
            ))}
            <a
              onClick={() => setToggle(false)}
              href="#Contact"
              className="mt-4 flex w-full items-center justify-center rounded-3xl border border-[#80FFD2] px-6 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-[#80FFD2] transition-all active:scale-[0.98] hover:bg-[#80FFD2] hover:text-[#161B23]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
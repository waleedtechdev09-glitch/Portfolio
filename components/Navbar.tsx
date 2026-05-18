"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-1">
          <Link
            href="/"
            className="
              text-2xl lg:text-3xl
              font-black tracking-tighter
              bg-gradient-to-r
              from-slate-900 to-slate-600
              dark:from-white dark:to-slate-400
              bg-clip-text text-transparent
              hover:from-amber-500 hover:to-amber-600
              transition-all duration-300
            "
          >
            Waleed _
            <span className="text-amber-500">Dev.</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                relative text-sm font-medium
                text-slate-700 dark:text-slate-300
                uppercase tracking-wider
                transition-all duration-300
                hover:text-amber-500 dark:hover:text-amber-400
                after:absolute after:left-1/2
                after:-bottom-1.5 after:h-[2px]
                after:w-0 after:bg-amber-500
                after:transition-all after:duration-300
                after:-translate-x-1/2
                hover:after:w-full
              "
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-end items-center gap-4">

          {/* Social Icons (FIXED RESPONSIVE) */}
          <div className="flex items-center gap-3">

            

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/waleed-ahmad-217604244"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-9 h-9 sm:w-10 sm:h-10
                flex items-center justify-center
                rounded-full border border-slate-200 dark:border-slate-700
                bg-white/60 dark:bg-black/60
                backdrop-blur-md
                text-slate-700 dark:text-slate-300
                hover:text-blue-500 hover:scale-110
                transition-all duration-300
              "
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-base sm:text-lg" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/waleedtechdev09-glitch"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-9 h-9 sm:w-10 sm:h-10
                flex items-center justify-center
                rounded-full border border-slate-200 dark:border-slate-700
                bg-white/60 dark:bg-black/60
                backdrop-blur-md
                text-slate-700 dark:text-slate-300
                hover:text-white hover:scale-110
                transition-all duration-300
              "
            >
              <FontAwesomeIcon icon={faGithub} className="text-base sm:text-lg" />
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="
              md:hidden w-10 h-10 rounded-full
              flex items-center justify-center
              border border-slate-200 dark:border-slate-700
              bg-white/50 dark:bg-black/50
              backdrop-blur-sm
            "
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <FontAwesomeIcon
              icon={isOpen ? faXmark : faBars}
              className="text-slate-800 dark:text-white text-lg"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="
              md:hidden absolute top-full left-0 w-full
              bg-white/95 dark:bg-black/95
              backdrop-blur-xl
              border-b border-slate-200 dark:border-slate-800
              shadow-xl
            "
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    text-sm uppercase font-medium
                    tracking-wider
                    text-slate-800 dark:text-slate-200
                    hover:text-amber-500
                    transition
                  "
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
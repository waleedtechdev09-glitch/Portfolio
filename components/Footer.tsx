"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white dark:bg-black border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo */}
          <div className="text-2xl font-black text-slate-900 dark:text-white">
            W<span className="text-blue-600">.</span>
          </div>

          {/* Links */}
          <nav className="flex gap-8">
            {["Home", "Projects", "Skills", "Contact"].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-sm font-bold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-5 text-slate-400 dark:text-slate-600">
            {[faGithub, faLinkedin, faTwitter, faInstagram].map((icon, i) => (
              <a key={i} href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors text-lg">
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-100 dark:bg-slate-900 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-500">
            © {currentYear} Waleed. All rights reserved.
          </p>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-500 flex items-center gap-2">
            Made with <FontAwesomeIcon icon={faHeart} className="text-red-500 text-xs" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
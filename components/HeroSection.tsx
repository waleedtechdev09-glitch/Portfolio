"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileDownload,
  faArrowRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center  dark:bg-black overflow-hidden"
    >
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 flex justify-center pointer-events-none overflow-hidden -mt-38">
        {/* Main Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/ahmad.png"
          alt="Background Profile"
          className="
      h-[78%] md:h-[92%] lg:h-[100%]
      w-auto object-contain

       md:mt-10 lg:mt-0

      opacity-[0.18] dark:opacity-[0.26]

      grayscale
      contrast-[1.15]
      brightness-[0.92]

      drop-shadow-[0_0_80px_rgba(245,158,11,0.12)]

      transition-all duration-700
    "
        />

        {/* Professional Glow */}
        <div
          className="
      absolute top-[18%] left-1/2 -translate-x-1/2
      w-[500px] h-[500px]
      bg-amber-500/8
      blur-[140px]
      rounded-full
    "
        />

        {/* Cinematic Overlay */}
        <div
          className="
      absolute inset-0
      bg-gradient-to-b
      from-white/10 via-white/40 to-white
      dark:from-black/10 dark:via-black/30 dark:to-[#020617]
    "
        />

        {/* Side Fade */}
        <div
          className="
      absolute inset-0
      bg-gradient-to-r
      from-white dark:from-[#020617]
      via-transparent
      to-white dark:to-[#020617]
      opacity-70
    "
        />
      </div>

      {/* Decorative Glow Effects */}
      <div className="absolute top-[10%] right-[5%] w-72 h-72 bg-amber-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* CONTENT */}
      <div className="container mx-auto px-6 relative z-10 pt-[50vh] md:pt-[55vh]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-black lg:mt-18 leading-[1.1] tracking-tight">
            <span className="text-slate-900 dark:text-white">Hi, I'm </span>

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300 drop-shadow-[0_0_25px_rgba(251,191,36,0.5)]">
              Waleed Ahmad
            </span>
          </h1>

          {/* Tagline */}
          <div className="mb-5 mt-4">
            <h2
              className="
                inline-block text-2xl md:text-4xl font-extrabold tracking-tight
                px-8 py-3 rounded-full
                bg-white/10 dark:bg-white/5
                backdrop-blur-md
                border border-white/10
                text-slate-800 dark:text-white
                shadow-lg
              "
            >
              Full Stack Engineer
              <span className="text-amber-500">.</span>
            </h2>
          </div>

          {/* Description */}
          <p
            className="
    text-lg md:text-xl
    text-slate-700 dark:text-slate-300
    mb-12 max-w-2xl mx-auto leading-relaxed font-medium
  "
          >
            As a Full Stack Engineer specializing in the MERN stack, I build
            scalable, efficient, and user-focused web applications. I go beyond
            writing code — I design robust system architectures, optimize
            performance across the stack, and turn complex ideas into practical,
            real-world solutions that align with both technical and business
            goals.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 justify-center mb-8">
            <Link
              href="/Waleed_Ahmad_CV-1.pdf"
              download="Waleed_Ahmad_Resume.pdf"
              className="
                group bg-gradient-to-r from-amber-500 to-orange-500
                hover:from-amber-400 hover:to-orange-400
                text-white px-10 py-4 rounded-md font-bold
                shadow-2xl shadow-amber-500/30
                transition-all duration-300
                hover:scale-105
                flex items-center gap-3 text-sm uppercase tracking-wider
              "
            >
              My Resume
              <FontAwesomeIcon
                icon={faFileDownload}
                className="group-hover:translate-y-1 transition-transform"
              />
            </Link>

            <Link href="/projects">
              <button
                className="
                  bg-slate-900 dark:bg-white
                  text-white dark:text-slate-900
                  px-10 py-4 rounded-md font-bold
                  hover:scale-105 hover:opacity-95
                  transition-all duration-300
                  flex items-center gap-3 text-sm uppercase tracking-wider
                  shadow-xl border border-slate-200 dark:border-transparent cursor-pointer
                "
              >
                View Work
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </button>
            </Link>

            <Link
              href="/contact"
              className="
                flex items-center gap-2
                text-slate-700 dark:text-slate-300
                font-bold hover:text-amber-500
                transition-all duration-300
                hover:scale-105
                px-6 py-4 text-sm uppercase
              "
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

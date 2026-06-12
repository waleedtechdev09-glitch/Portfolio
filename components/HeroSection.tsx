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
      className="relative min-h-screen flex flex-col items-center overflow-hidden bg-white dark:bg-black transition-colors duration-300 isolate"
    >
      {/* 1. BACKGROUND IMAGE & FADES */}
      <div className="absolute inset-0 z-0 flex justify-center items-start pointer-events-none overflow-hidden pt-6 md:pt-0 md:-mt-[6rem] lg:-mt-[4rem] xl:-mt-[5rem]">
        {/* Main Profile Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/ahmad.png"
          alt="Background Profile"
          className="
            h-[50vh] sm:h-[65vh] md:h-[88vh] lg:h-[78vh] xl:h-[84vh]
            w-auto max-w-none object-contain object-[center_12%] md:object-[center_15%]
            scale-[1.15] sm:scale-[1.05] md:scale-[1] md:mt-10 lg:mt-0 lg:scale-[0.86] xl:scale-[0.92]
            opacity-[0.18] sm:opacity-[0.20] md:opacity-[0.14] dark:opacity-[0.28]
            grayscale contrast-[1.15] brightness-[0.92]
            drop-shadow-[0_0_80px_rgba(245,158,11,0.12)]
            transition-all duration-700
          "
        />

        {/* Professional Core Glow */}
        <div className="absolute top-[15%] md:top-[18%] left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-amber-500/8 blur-[100px] sm:blur-[140px] rounded-full" />

        {/* Cinematic Vertical Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/50 to-white dark:from-black/10 dark:via-black/40 dark:to-black" />

        {/* Side Fade Horizontal Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-black via-transparent to-white dark:to-black opacity-80" />
      </div>

      {/* Ambient Decorative Light Blurs */}
      <div className="absolute top-[8%] right-[-5%] w-48 sm:w-72 h-48 sm:h-72 bg-amber-500/10 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[8%] left-[-5%] w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/10 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none" />

      {/* MAIN CONTENT CONTAINER */}
      <div className="container mx-auto px-5 relative z-10 pt-[32vh] sm:pt-[42vh] md:pt-[52vh] lg:pt-[50vh] flex flex-col justify-center flex-1 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Main Title Heading */}
          <h1 className="text-4xl mt-18 md:mt-0 sm:text-5xl md:text-6xl font-black leading-[1.15] sm:leading-[1.1] tracking-tight">
            <span className="text-slate-900 dark:text-white block sm:inline">
              Here&apos;s{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300 drop-shadow-[0_0_20px_rgba(251,191,36,0.35)]">
              Waleed Ahmad
            </span>
          </h1>

          {/* Subtitle / Role Badge */}
          <div className="mb-6 mt-4 sm:mt-5">
            <h2
              className="
                inline-block text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight
                px-5 sm:px-8 py-2 sm:py-3 rounded-full
                bg-slate-100/80 dark:bg-zinc-900/50
                backdrop-blur-md
                border border-slate-200/50 dark:border-zinc-800/50
                text-slate-800 dark:text-zinc-100
                shadow-md
              "
            >
              Full Stack Engineer
              <span className="text-amber-500">.</span>
            </h2>
          </div>

          {/* Core Professional Description */}
          <p className="text-sm sm:text-base md:text-xl text-slate-600 dark:text-zinc-400 mb-10 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-medium px-2 sm:px-0">
            As a Full Stack Engineer specializing in the MERN stack, I build
            scalable, efficient, and user-focused web applications. I design
            robust system architectures, optimize performance across the stack,
            and turn complex ideas into production solutions.
          </p>

          {/* ACTION BUTTONS GRID/STACK */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-md sm:max-w-none mx-auto w-full px-4 sm:px-0">
            {/* Primary CTA: Resume Button */}
            <Link
              href="/Waleed_Ahmad_CV.pdf"
              download="Waleed_Ahmad_Resume.pdf"
              className="
                group w-full sm:w-auto
                bg-gradient-to-r from-amber-500 to-orange-500
                hover:from-amber-400 hover:to-orange-400
                text-white px-8 py-4 rounded-xl font-bold
                shadow-lg shadow-amber-500/20
                transition-all duration-300
                hover:scale-[1.03] active:scale-[0.98]
                flex items-center justify-center gap-3 text-xs sm:text-sm uppercase tracking-wider
              "
            >
              My Resume
              <FontAwesomeIcon
                icon={faFileDownload}
                className="group-hover:translate-y-0.5 transition-transform duration-300"
              />
            </Link>

            {/* Secondary CTA: View Work Button */}
            <Link href="/projects" className="w-full sm:w-auto">
              <button
                className="
                  w-full sm:w-auto
                  bg-zinc-900 dark:bg-white
                  text-white dark:text-zinc-900
                  px-8 py-4 rounded-xl font-bold
                  hover:scale-[1.03] active:scale-[0.98]
                  transition-all duration-300
                  flex items-center justify-center gap-3 text-xs sm:text-sm uppercase tracking-wider
                  shadow-md border border-zinc-800 dark:border-transparent cursor-pointer
                "
              >
                View Work
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-xs transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </button>
            </Link>

            {/* Tertiary CTA: Quick Contact Link */}
            <Link
              href="/contact"
              className="
                w-full sm:w-auto
                flex items-center justify-center gap-2
                text-slate-600 dark:text-zinc-400
                font-bold hover:text-amber-500 dark:hover:text-amber-400
                transition-all duration-300
                hover:scale-[1.03] active:scale-[0.98]
                px-6 py-3 text-xs sm:text-sm uppercase tracking-wider
              "
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-xs sm:text-sm"
              />
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

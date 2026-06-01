"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Doctor Appointment System",
    description:
      "A modern doctor appointment system with user authentication, dynamic scheduling, and responsive design for seamless healthcare management.",
    image: "/carepulse.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT Auth",
    ],
    github: "#",
    liveUrl: "https://cardiac-doctor-appointment-system.vercel.app",
  },
  {
    id: "2",
    title: "Library Management System (SaaS)",
    description:
      "Secure multi-user platform with authentication, media uploads, Cloudinary integration, and isolated user data management.",
    image: "/library.png",
    technologies: ["Next.js", "Node.js", "MongoDB", "Cloudinary", "JWT Auth"],
    github: "#",
    liveUrl: "https://library-management-system-five-black.vercel.app",
  },

  {
    id: "3",
    title: " Blog Application",
    description:
      "Modern blog platform with dynamic content management, responsive UI, and optimized deployment using Next.js and MongoDB.",
    image: "/devlog.png",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Vercel"],
    github: "#",
    liveUrl: "https://next-blog-app-deployment.vercel.app",
  },

  {
    id: "4",
    title: "Noor-e-Quran ",
    description:
      "A modern Quran study platform with a user-friendly interface, featuring features like audio playback, verse search, and bookmarking.",
    image: "/roshan.png",
    technologies: ["Next.js", "Tailwind CSS", "Axios", "Vercel"],

    liveUrl: "https://roshan-noor-e-quran.vercel.app",
  },
  {
    id: "5",
    title: "Wireless Headphones ",
    description:
      "Interactive product landing page featuring smooth animations, responsive layouts, and modern UI/UX design principles.",
    image: "/headphone.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    liveUrl: "https://wireless-headphones-deployment.vercel.app",
  },
  {
    id: "6",
    title: "Coders Coffee Shop",
    description:
      "Interactive product landing page featuring smooth animations, responsive layouts, and modern UI/UX design principles.",
    image: "/coffee-shop.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    liveUrl: "https://coders-coffee-shop.vercel.app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-black transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-5 tracking-tight">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300">
              Projects
            </span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A collection of full-stack applications and modern web experiences
            focused on performance, scalability, and clean user experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="
                group
                bg-slate-50 dark:bg-black
                rounded-2xl
                overflow-hidden
                border border-slate-200 dark:border-slate-800
                transition-all duration-300
                shadow-sm hover:shadow-2xl
                hover:shadow-amber-500/10
              "
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    grayscale-[40%]
                    group-hover:grayscale-0
                    transition-all duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-70" />
              </div>

              {/* Content */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-7 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-widest
                        px-3 py-1.5
                        rounded-full
                        bg-white dark:bg-black/80
                        border border-slate-200 dark:border-slate-700
                        text-slate-600 dark:text-slate-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <div className="flex justify-center">
                  <Link
                    href={project.liveUrl || "#"}
                    target="_blank"
                    className="
                      inline-flex items-center justify-center
                      px-8 py-3
                      rounded-md
                      w-full
                      bg-gradient-to-r from-amber-500 to-orange-500
                      hover:from-amber-400 hover:to-orange-400
                      text-white
                      text-sm font-bold uppercase tracking-wider
                      transition-all duration-300
                      shadow-xl shadow-amber-500/20
                      hover:scale-105
                    "
                  >
                    View Live
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

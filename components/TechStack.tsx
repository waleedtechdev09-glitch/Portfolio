"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faReact, 
  faNodeJs, 
  faDocker, 
  faAws, 
  faJs, 
  faPython, 
  faTailwindCss,
  faDeploydog
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode, faAnchorCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faStackpath } from "@fortawesome/free-brands-svg-icons/faStackpath";

const techs = [
   { name: "Next.js", icon: faCode, color: "hover:text-slate-400" },
  { name: "React", icon: faReact, color: "hover:text-blue-400" },
   { name: "TypeScript", icon: faJs, color: "hover:text-blue-600" },
  { name: "Node.js", icon: faNodeJs, color: "hover:text-green-500" },
    { name: "MongoDB", icon: faDatabase, color: "hover:text-green-600" },
    { name: "Postgresql", icon: faDatabase, color: "hover:text-green-600" },
    { name: "Express.js", icon: faCode, color: "hover:text-green-600" },
    { name: "BullMQ", icon: faStackpath, color: "hover:text-green-600" },
    { name: "Kafka", icon: faStackpath, color: "hover:text-green-600" },
    { name: "Tailwind CSS", icon: faTailwindCss, color: "hover:text-green-600" },
    { name: "Framer Motion", icon: faAnchorCircleExclamation, color: "hover:text-green-600" },
    { name: "Shadcn UI", icon: faCode, color: "hover:text-green-600" },
  { name: "Docker", icon: faDocker, color: "hover:text-blue-500" },
  { name: "AWS", icon: faAws, color: "hover:text-orange-400" },
  { name: "Vercel", icon: faDeploydog, color: "hover:text-orange-400" },
  { name: "Render", icon: faDeploydog, color: "hover:text-orange-400" },
  { name: "VS Code", icon: faCode, color: "hover:text-orange-400" },
 

 
];

const TechStack = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-black border-y border-slate-100 dark:border-slate-900">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white">
            Core <span className="text-amber-500">Technologies</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Mera main focus modern web standards aur scalable architecture par hota hai.
          </p>
        </div>

        {/* Static Grid System */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techs.map((tech, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-900/50 rounded-md border border-slate-100 dark:border-slate-800 hover:border-amber-500/50 transition-all duration-300"
            >
              <div className={`text-4xl mb-4 text-slate-400 dark:text-slate-600 transition-colors duration-300 ${tech.color}`}>
                <FontAwesomeIcon icon={tech.icon} />
              </div>
              <span className="font-bold text-slate-900 dark:text-slate-100 tracking-tight text-sm uppercase">
                {tech.name}
              </span>
              
              {/* Decorative Dot */}
              <div className="mt-4 w-1 h-1 rounded-full bg-transparent group-hover:bg-amber-500 transition-colors" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
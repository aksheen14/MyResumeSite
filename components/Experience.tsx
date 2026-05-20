"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Full-Stack Developer",
    company: "Tech Corp",
    date: "Jan 2024 - Present",
    description: "Built scalable web applications using Next.js and Node.js. Improved performance by 30%.",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Startup Inc",
    date: "Jun 2022 - Dec 2023",
    description: "Developed user-facing features with React and Tailwind CSS. Collaborated with designers to ensure pixel-perfect implementation.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-slate-200 dark:border-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-[2px] before:bg-slate-200 dark:before:bg-slate-800 last:before:hidden">
              <div className="absolute left-[-4px] top-2 h-[10px] w-[10px] rounded-full bg-blue-600 dark:bg-blue-500" />
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                <span className="font-medium text-slate-700 dark:text-slate-300">{exp.company}</span>
                <span className="hidden sm:inline">•</span>
                <span>{exp.date}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

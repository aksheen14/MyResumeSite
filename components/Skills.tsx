"use client";

import { motion } from "framer-motion";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "PostgreSQL", "Git", "Figma"
];

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-slate-200 dark:border-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-4 py-2 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-slate-200 text-sm font-medium border border-slate-200 dark:border-zinc-700"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

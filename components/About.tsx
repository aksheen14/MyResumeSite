"use client";

import { motion } from "framer-motion";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "PostgreSQL", "Git", "Figma"
];

export function About() {
  return (
    <section id="about" className="py-24 border-t border-slate-200 dark:border-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="prose prose-slate dark:prose-invert max-w-none text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
          <p className="mb-4">
            [Placeholder: Briefly introduce yourself, your educational background, and what drives you. E.g., "I started my journey into software development during my computer science degree..."]
          </p>
          <p className="mb-4">
            [Placeholder: Talk about your current focus. E.g., "Currently, I'm focused on building accessible, human-centered products at [Company]. I enjoy the challenge of bridging the gap between design and engineering."]
          </p>
          <p>
            [Placeholder: Mention a few hobbies or interests outside of coding. E.g., "When I'm not at the computer, I'm usually hanging out with my friends, reading, or hiking."]
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6">Technologies I work with</h3>
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
        </div>
      </motion.div>
    </section>
  );
}

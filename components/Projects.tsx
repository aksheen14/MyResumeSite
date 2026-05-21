"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Dynamic Flashcard System",
    description: "Built a full-stack adaptive learning platform integrating an FSRS ML model to dynamically schedule flashcards and optimize user memory retention.",
    tags: ["React", "Next.js", "Machine Learning"],
    link: "https://github.com/aksheen14",
    image: "https://placehold.co/600x400/e2e8f0/64748b?text=Dynamic+Flashcard+System"
  },
  {
    id: 2,
    title: "VisionLen AI",
    description: "Built a real-time OCR web app using Google Gemini 1.5 Flash for camera-based text extraction and AI summarization, with Web Speech API feedback.",
    tags: ["React", "Vite", "Google Gemini"],
    link: "https://github.com/aksheen14",
    image: "https://placehold.co/600x400/e2e8f0/64748b?text=VisionLen+AI"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Engineered a frontend platform to consolidate software engineering projects using Next.js and TypeScript, with continuous deployment via Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://aksheenrathod.com",
    image: "https://placehold.co/600x400/e2e8f0/64748b?text=Portfolio+Website"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-slate-200 dark:border-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-zinc-900 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-blue-900/20 transition-all hover:-translate-y-1"
            >
              <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-zinc-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-zinc-800 text-xs font-medium text-slate-600 dark:text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing products, orders, and customers. Features real-time analytics.",
    tags: ["Next.js", "Tailwind CSS", "Prisma"],
    link: "https://example.com",
    image: "https://placehold.co/600x400/e2e8f0/64748b?text=Project+1"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task manager with drag-and-drop functionality and real-time updates.",
    tags: ["React", "Node.js", "Socket.io"],
    link: "https://example.com",
    image: "https://placehold.co/600x400/e2e8f0/64748b?text=Project+2"
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

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="py-24 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12 min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl flex-1 text-center md:text-left"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Hi, I'm <span className="text-green-800 dark:text-green-400">Aksheen</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0">
          I'm a Full-Stack Developer passionate about building beautiful, functional, and scalable web applications.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-slate-900 dark:bg-slate-50 text-slate-50 dark:text-slate-900 px-6 py-3 text-base font-medium hover:opacity-90 transition-opacity"
          >
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-6 py-3 text-base font-medium hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Learn More
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 flex justify-center md:justify-end w-full"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          {/* Subtle glowing background effect */}
          <div className="absolute inset-0 rounded-full bg-blue-600/20 dark:bg-blue-500/20 blur-3xl animate-pulse" />
          
          {/* Image container */}
          <div className="relative w-full h-full rounded-full border-4 border-white dark:border-zinc-800 shadow-2xl overflow-hidden bg-slate-200 dark:bg-zinc-800 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/ARheadshot.jpg" 
              alt="Aksheen Rathod" 
              className="w-full h-full object-cover object-[100%_15%] "
            />

          </div>
        </div>
      </motion.div>
    </section>
  );
}

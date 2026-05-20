"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Mail, FileText } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function Navbar() {
    const { setTheme, theme } = useTheme();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-slate-50/80 dark:bg-zinc-950/80 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8 max-w-5xl">
                <div className="flex items-center gap-6">
                    <a href="#" className="flex items-center h-10 w-10 overflow-hidden rounded-md border border-slate-200 dark:border-slate-800">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo.png" alt="AR Logo" className="h-full w-full object-cover" />
                    </a>
                    <nav className="hidden md:flex gap-6 text-sm font-medium">
                        <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
                        <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
                        <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-zinc-800 transition-colors relative"
                        aria-label="Toggle theme"
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </button>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <button className="flex items-center gap-2 rounded-md bg-slate-900 dark:bg-slate-50 text-slate-50 dark:text-slate-900 px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity">
                                Contact
                            </button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.Content
                                className="min-w-[200px] bg-white dark:bg-zinc-900 rounded-md p-1 shadow-md border border-slate-200 dark:border-zinc-800 z-50"
                                sideOffset={5}
                                align="end"
                            >
                                <DropdownMenu.Item className="group text-sm leading-none text-slate-700 dark:text-slate-300 rounded-[3px] flex items-center h-[35px] px-[5px] relative select-none outline-none data-[highlighted]:bg-blue-600 data-[highlighted]:text-white cursor-pointer">
                                    <a href="mailto:aksheen14@gmail.com" className="flex items-center w-full">
                                        <Mail className="mr-2 h-4 w-4" /> Email
                                    </a>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="group text-sm leading-none text-slate-700 dark:text-slate-300 rounded-[3px] flex items-center h-[35px] px-[5px] relative select-none outline-none data-[highlighted]:bg-blue-600 data-[highlighted]:text-white cursor-pointer">
                                    <a href="https://www.linkedin.com/in/aksheen-rathod214/" target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                                        <FaLinkedin className="mr-2 h-4 w-4" /> LinkedIn
                                    </a>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="group text-sm leading-none text-slate-700 dark:text-slate-300 rounded-[3px] flex items-center h-[35px] px-[5px] relative select-none outline-none data-[highlighted]:bg-blue-600 data-[highlighted]:text-white cursor-pointer">
                                    <a href="https://github.com/aksheen14" target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                                        <FaGithub className="mr-2 h-4 w-4" /> GitHub
                                    </a>
                                </DropdownMenu.Item>
                                <DropdownMenu.Separator className="h-[1px] bg-slate-200 dark:bg-zinc-800 my-[5px]" />
                                <DropdownMenu.Item className="group text-sm leading-none text-slate-700 dark:text-slate-300 rounded-[3px] flex items-center h-[35px] px-[5px] relative select-none outline-none data-[highlighted]:bg-blue-600 data-[highlighted]:text-white cursor-pointer">
                                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                                        <FileText className="mr-2 h-4 w-4" /> View Resume
                                    </a>
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                </div>
            </div>
        </header>
    );
}

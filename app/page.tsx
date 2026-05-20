import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-8 max-w-4xl">
       <Hero /> 
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portprojbg from "../assets/portfolioproj.jpg";
import pagebg from "../assets/reactprojbg.jpeg";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A sleek and interactive personal portfolio website crafted using React for component-based architecture, Tailwind CSS for rapid and responsive styling, and Framer Motion for smooth animations and transitions. This project showcases a clean user interface with animated section reveals, project highlights, and a contact form — all optimized for performance and mobile responsiveness. Built to leave a lasting impression, it's perfect for developers, designers, or creatives looking to present their work in a professional and engaging way.",
    image: portprojbg,
  },
  {
    title: "React Pages",
    description: "A collection of modular and reusable React components and full-page layouts built using Vite and React.js. This project serves as a boilerplate for developers to quickly scaffold new projects or prototypes with a modern development experience. Designed for speed, maintainability, and scalability, it includes optimized routing, responsive design structures, and clean component architecture. Ideal for developers who want to skip setup overhead and jump straight into building high-performance React apps..",
    image: pagebg,
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleWheel = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {}, 500);
    };

    const container = containerRef.current;
    container?.addEventListener("wheel", handleWheel);
    return () => container?.removeEventListener("wheel", handleWheel);
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    const scrollTop = container.scrollTop;
    const sectionHeight = container.clientHeight;
    const newIndex = Math.floor(scrollTop / sectionHeight);
    if (newIndex !== currentIndex && newIndex < projects.length) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section
      ref={containerRef}
      onScroll={handleScroll}
      className="h-screen overflow-y-scroll bg-[#111] text-white"
    >
      <div className={`flex h-[${projects.length * 100}vh] relative`}>
        {/* Left Sticky Card */}
        <div className="sticky top-0 w-1/2 h-screen flex items-center justify-center bg-[#111]">
          <div className="w-[25rem] h-[32rem] bg-zinc-900 rounded-[2rem] shadow-[0_15px_50px_rgba(0,0,0,0.3)] p-10 flex flex-col  justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[currentIndex]?.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl font-bold mb-6 leading-tight">
                  {projects[currentIndex]?.title}
                </h2>
                <p className="text-base  text-zinc-300 mb-6">
                  {projects[currentIndex]?.description}
                </p>
                
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Scrollable Project Cards */}
        <div className="w-5/6  flex flex-col">
          {projects.map((project, index) => (
            <div
              key={index}
              className="h-screen flex items-center justify-center p-8"
            >
              <div className="bg-white rounded-[2rem] shadow-[0_15px_50px_rgba(0,0,0,0.3)] overflow-hidden w-[62rem] h-[32rem] flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

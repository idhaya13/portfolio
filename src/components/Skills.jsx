import React, { useEffect, useRef } from "react";

const skills = [
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "Git & GitHub",
  "HTML",
  "MongoDB",
  "MySQL",
  "Python",
];

export default function SkillsScrollWords() {
  const containerRef = useRef();
  const randomOffsets = useRef([]);

  // Generate random positions once
  useEffect(() => {
    randomOffsets.current = skills.map(() => ({
      x: (Math.random() - 0.5) * 400,
      y: (Math.random() - 0.5) * 400,
      z: -300 - Math.random() * 500,
    }));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const screenHeight = window.innerHeight;
      const start = screenHeight * 0.1;
      const end = screenHeight * 0.9;

      const progress = 1 - Math.min(Math.max((rect.top - start) / (end - start), 0), 1);

      const items = container.querySelectorAll(".skill-word");

      items.forEach((item, index) => {
        const { x, y, z } = randomOffsets.current[index];
        const delay = index * 0.05;
        const localProgress = Math.max(0, Math.min(1, progress - delay));

        // Reverse the effect: start blurry and low opacity, get clearer
        const currentZ = z + localProgress * -z;
        const currentX = x - x * localProgress;
        const currentY = y - y * localProgress;
        const scale = 0.7 + localProgress * 0.3; // small to normal
        const opacity = localProgress; // low to full
        const blur = (1 - localProgress) * 10; // blur to sharp

        item.style.transform = `translate3d(${currentX}px, ${currentY}px, ${currentZ}px) scale(${scale})`;
        item.style.opacity = opacity;
        item.style.filter = `blur(${blur}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Sticky Section */}
      <div className="h-[100vh] sticky top-0 bg-black z-10">
        <div
          ref={containerRef}
          className="h-full grid grid-cols-3 grid-rows-3 place-items-center [perspective:1000px]"
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              className="skill-word text-white text-[5vmin] font-bold will-change-transform transition-transform duration-200"
              style={{
                transform: "translate3d(0px, 0px, -1000px)",
                opacity: 0,
                filter: "blur(10px)",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

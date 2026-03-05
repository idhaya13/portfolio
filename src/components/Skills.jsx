import React, { useEffect, useState } from "react";

const skills = [
  "React",
  "Python",
  "Django",
  "JavaScript",
  "MongoDB",
  "MySQL",
  "Docker",
  "Git",
  "Redux",
  "Tailwind",
  "HTML5",
  "CSS3",
];

const GalaxySkills = () => {

  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  /* ⭐ Generate Stars */
  useEffect(() => {

    const starArray = Array.from({ length: 220 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2.5 + 1.5,
      delay: Math.random() * 3,
      depth: Math.random() * 30 + 10,
    }));

    setStars(starArray);

  }, []);

  /* ☄️ Generate Meteors */
  useEffect(() => {

    const interval = setInterval(() => {

      const meteor = {
        id: Date.now(),
        skill: skills[Math.floor(Math.random() * skills.length)],
        left: Math.random() * 100,
        duration: 4 + Math.random() * 4,
        size: 0.9 + Math.random() * 1.2,
      };

      setMeteors(prev => [...prev.slice(-25), meteor]);

    }, 900);

    return () => clearInterval(interval);

  }, []);

  /* 🖱 Mouse Parallax */
  const handleMouseMove = (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 40;

    setOffset({ x, y });

  };

  return (

    <div
      className="galaxy-container"
      onMouseMove={handleMouseMove}
    >

      {/* ⭐ Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            transform: `translate(${offset.x / star.depth}px, ${offset.y / star.depth}px)`
          }}
        />
      ))}

      {/* ☄️ Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            left: `${meteor.left}%`,
            animationDuration: `${meteor.duration}s`,
            fontSize: `${meteor.size}rem`
          }}
        >
          {meteor.skill}
        </div>
      ))}

    </div>

  );
};

export default GalaxySkills;
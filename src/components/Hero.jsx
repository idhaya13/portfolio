import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import herobg from "../assets/herobg.mp4";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={herobg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Animated Text Content */}
      <motion.div
        className="relative z-10 px-6 w-full max-w-4xl text-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-4 whitespace-nowrap ">
          <TypeAnimation
            sequence={[
              "Hi, I'm Maria",
              1000,
              "",
              "I am a FullStack Developer",
              1000,
              "",
              "Hi, I'm Maria",
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
          />
        </h1>

        <motion.p
          className="text-white text-lg md:text-xl max-w-xl mb-20"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          A fresher passionate about building clean and responsive web applications.
          I love turning ideas into real-world interactive websites using React, Node, and more.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;

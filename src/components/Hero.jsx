import { motion } from "framer-motion";
import heroBg from "../assets/herobg.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center pt-0.5 pb-30 pr-15" // moved content up
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Optional overlay for contrast, adjust opacity or remove if not needed */}
      <div className="absolute inset-0 bg-black/10"></div>

      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-white text-5xl md:text-6xl font-bold drop-shadow-md">
          Hi, I'm Maria
        </h1>
        <p className="mt-4 text-xl text-white drop-shadow-sm">
          FullStack Developer | React Enthusiast
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;

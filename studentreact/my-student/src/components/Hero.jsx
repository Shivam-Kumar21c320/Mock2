import React from "react";
import { motion } from "framer-motion";
 
const Hero = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center text-center px-4 sm:px-8 h-[70vh] bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
        Welcome to My Website
      </h2>
      <p className="text-base sm:text-lg md:text-xl mb-6 max-w-xl">
        Responsive and interactive React app with Tailwind CSS
      </p>
      <button className="bg-blue-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
        Get Started
      </button>
    </motion.section>
  );
};
 
export default Hero;
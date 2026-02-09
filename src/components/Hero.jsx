import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 pt-20 pb-10">
      {/* Background blobs - Adjusted to be responsive */}
      <div className="absolute top-0 -left-4 w-48 h-48 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-48 h-48 md:w-72 md:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-48 h-48 md:w-72 md:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-10 3xl:max-w-[2000px] text-center flex flex-col items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center gap-4 md:gap-6"
        >
          {/* Main Title - Responsive sizing */}
          <h1 className="mt-10 md:mt-16 text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl 3xl:text-9xl font-extrabold tracking-tight leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Python & Django Developer
            </span>
          </h1>

          {/* Subtitle - Gradient as requested */}
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
             [ Engineering Scalable : Intelligent Web Solutions ]
            </span>
          </h2>

          <p className="mt-6 md:mt-8 text-base xs:text-lg sm:text-xl md:text-2xl text-gray-600 max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-medium">
            Results-driven full-stack developer specializing in Python, Django,
            and React, with a strong focus on clean architecture, performance
            optimization, and building data-driven applications that scale with
            business needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 xs:mt-10 md:mt-12 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="inline-flex justify-center items-center px-6 py-3 md:px-8 md:py-4 border border-transparent text-base md:text-lg font-bold rounded-xl shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            View Projects <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex justify-center items-center px-6 py-3 md:px-8 md:py-4 border border-gray-200 text-base md:text-lg font-bold rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 xs:mt-12 flex justify-center space-x-6 md:space-x-8 text-gray-400"
        >
          <a
            href="https://linkedin.com/in/sanjeeth5555"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors transform hover:scale-110 p-2"
          >
            <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a
            href="mailto:sanjeeth5555@gmail.com"
            className="hover:text-red-500 transition-colors transform hover:scale-110 p-2"
          >
            <Mail className="w-6 h-6 md:w-8 md:h-8" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

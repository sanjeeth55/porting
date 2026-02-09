import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="pt-0 pb-16 md:pt-0 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-10 3xl:max-w-[2000px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 md:mb-12">
            About <span className="text-blue-600">Me</span>
          </h2>

          <div className="bg-blue-50/50 p-6 xs:p-8 md:p-12 rounded-3xl border border-blue-100 shadow-sm relative overflow-hidden mx-auto max-w-4xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>

            <div className="flex flex-col gap-6 md:gap-8 text-base xs:text-lg md:text-xl text-gray-700 leading-relaxed text-center font-medium">
              <p>
                Python and Django Developer with hands-on experience in
                full-stack web development, API integrations, and technical
                support. Proven ability to design and deliver scalable,
                high-performance applications with clean architecture and
                responsive user interfaces. Adept at building data-driven
                solutions that align technology with business objectives.
              </p>

              {/* Decorative separator */}
              <div className="w-16 h-1 bg-blue-200 rounded-full mx-auto opacity-60"></div>

              <p>
                Brings a strong foundation in troubleshooting, cross-functional
                collaboration, and continuous improvement, leveraging modern
                frameworks and best practices to enhance system reliability,
                user experience, and overall business outcomes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

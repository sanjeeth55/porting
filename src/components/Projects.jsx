import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ShoppingBag,
  Stethoscope,
  MessageSquare,
  Activity,
  Server,
  Github,
} from "lucide-react";

const projects = [
  {
    title: "SMD Textile Website",
    description:
      "Created Website and Application for SMD Textile company built and deployed a responsive business website using ReactJS and Firebase Hosting, delivering fast performance, clean UI, and reliable online accessibility.",
    tags: ["ReactJS", "Firebase", "Tailwind CSS"],
    link: "https://smd-textile-business.web.app/", // Valid link
    icon: <ShoppingBag className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />,
    color: "bg-blue-50",
  },
  {
    title: "Hospital Appointment Booking",
    description:
      "Built a responsive hospital website inspired by Manipal Hospital with doctor listings and online appointment booking. Developed using React/HTML/CSS with clean UI, reusable components, and mobile optimization.",
    tags: ["React", "HTML/CSS", "Mobile Opt"],
    link: "#",
    icon: <Stethoscope className="w-8 h-8 md:w-10 md:h-10 text-emerald-500" />,
    color: "bg-emerald-50",
  },
  {
    title: "AI Social Media Analysis",
    description:
      "Created a dynamic chatbot using the OpenAI API that receives user input from a website, processes it through the API, and delivers intelligent, context-aware responses in natural language.",
    tags: ["OpenAI API", "Python", "Chatbot"],
    link: "#",
    icon: <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-purple-500" />,
    color: "bg-purple-50",
  },
  {
    title: "Smart Walking Cane",
    description:
      "Developed a smart walking cane using Raspberry Pi and ultrasonic sensors that detects obstacles and alerts the user through vibrations or audio feedback based on real-time distance measurements.",
    tags: ["Raspberry Pi", "IoT", "Sensors"],
    link: "#",
    icon: <Activity className="w-8 h-8 md:w-10 md:h-10 text-orange-500" />,
    color: "bg-orange-50",
  },
  {
    title: "Sephora Server Management",
    description:
      "Managed Sephora’s website and server operations, ensuring high performance, uptime, and security. Handled software maintenance, authentication, and credential management.",
    tags: ["Server Ops", "Security", "Maintenance"],
    link: "#",
    icon: <Server className="w-8 h-8 md:w-10 md:h-10 text-pink-500" />,
    color: "bg-pink-50",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pt-0 pb-16 md:pt-0 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-10 3xl:max-w-[2000px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            A selection of projects demonstrating full-stack capabilities and AI
            integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              {/* Floating shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent z-10 pointer-events-none"></div>

              <div className="p-6 xs:p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`${project.color} w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center cursor-pointer shadow-inner shrink-0`}
                  >
                    {project.icon}
                  </motion.div>

                  {/* Conditionally render link button */}
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group-hover:bg-blue-50 group-hover:text-blue-600"
                    >
                      <ExternalLink
                        size={20}
                        className="text-gray-400 group-hover:text-blue-600 transition-colors"
                      />
                    </a>
                  )}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-50">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-bold bg-gray-50 text-gray-600 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

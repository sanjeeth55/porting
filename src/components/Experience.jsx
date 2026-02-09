import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Leapsurge Business Innvation",
      period: "Since Dec 2025 - Present",
      description:
        "Contributing to the development of AI-driven web applications using Django and React.",
      color: "text-orange-500",
      bg: "bg-orange-50",
      border: "border-orange-100",
    },
    {
      role: "Python Full Stack Intern",
      company: "IBM",
      period: "Apr 2024 - May 2025",
      description:
        "Gained hands-on experience in full-stack development, utilizing Python and modern web technologies to build scalable solutions.",
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      role: "Social Media Marketing Intern",
      company: "Thistle Media",
      period: "Oct 2023 - Mar 2024",
      description:
        "Assisted in managing social media campaigns and analyzing engagement metrics to optimize digital marketing strategies.",
      color: "text-green-500",
      bg: "bg-green-50",
      border: "border-green-100",
    },
  ];

  return (
    <section id="experience" className="pt-8 pb-12 md:pt-8 md:pb-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-10 3xl:max-w-[1800px] border-b border-gray-200 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-extrabold text-gray-900">
            Work <span className="text-blue-600">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Central Timeline Line - Hidden on small mobile to give more space */}
          <div className="hidden md:block absolute left-0 md:left-[50%] top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-8" style={{ '--tw-space-y-reverse': 0, marginTop: 'calc(2rem * calc(1 - var(--tw-space-y-reverse)))' }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Spacer for uneven grid */}
                <div className="flex-1 w-full hidden md:block"></div>

                {/* Timeline Dot - Hidden on mobile */}
                <div
                  className={`hidden md:flex absolute md:left-[50%] md:-translate-x-1/2 items-center justify-center w-8 h-8 rounded-full border-4 border-white shadow-sm z-10 md:translate-y-0 top-0 md:top-auto ${exp.color.replace(
                    "text",
                    "bg"
                  )} text-white`}
                >
                  {/* No inner icon needed if size is small dot, or keep briefcase if prefer. 
                      Education uses simple colorful dots. Let's make it consistent but keep the briefcase if user liked it, 
                      BUT user asked for "same color combination". Education has "bg-color" dots. 
                      Let's stick to the Briefcase but with colorful bg. */}
                  <Briefcase size={14} />
                </div>

                {/* Content Card */}
                <div className="flex-1 w-full md:w-auto pl-0 md:px-10">
                  <div
                    className={`${
                      exp.bg
                    } p-6 xs:p-8 rounded-2xl shadow-sm border ${
                      exp.border
                    } hover:shadow-md transition-all relative ${
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    {/* Date Tag */}
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-gray-600 text-xs font-bold mb-4 shadow-sm ${
                        index % 2 !== 0 ? "md:flex-row-reverse md:ml-auto" : ""
                      }`}
                    >
                      <Calendar size={12} className={exp.color} />
                      <span className={exp.color}>{exp.period}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                      {exp.role}
                    </h3>
                    <h4 className={`text-lg font-medium mb-3 ${exp.color}`}>
                      {exp.company}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

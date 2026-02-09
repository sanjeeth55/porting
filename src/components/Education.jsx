import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Sc Computer Technology",
      year: "2020 - 2023",
      school: "Dr. N.G.P. Arts and Science College",
      description:
        "Bachelor’s Degree in Computer Science, with a strong foundation in core computer science concepts and programming — 74%.",
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-100",
      icon: <GraduationCap size={28} />,
    },
    {
      degree: "HSC",
      year: "2019 - 2020",
      school: "Saradha Vidyalaya Matric Hr. Secondary School",
      description:
        "Completed Higher Secondary Education (HSC) in Mathematics and Computer Science — 70%",
      color: "text-pink-500",
      bg: "bg-pink-50",
      border: "border-pink-100",
      icon: <BookOpen size={28} />,
    },
    {
      degree: "SSLC",
      year: "2017 - 2018",
      school: "Saradha Vidyalaya Matric Hr. Secondary School",
      description: "Secondary School Leaving Certificate (SSLC) - 72%",
      color: "text-purple-500",
      bg: "bg-purple-50",
      border: "border-purple-100",
      icon: <Award size={28} />,
    },
  ];

  return (
    <section id="education" className="pt-8 pb-12 md:pt-8 md:pb-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-10 3xl:max-w-[1800px] border-b border-gray-200 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-extrabold text-gray-900">
            My <span className="text-purple-600">Education</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Central Timeline Line - Moved outside to ensure full connection */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>

          <div className="space-y-8" style={{ '--tw-space-y-reverse': 0, marginTop: 'calc(2rem * calc(1 - var(--tw-space-y-reverse)))' }}>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-0 md:pl-0"
            >
              <div
                className={`flex flex-col md:flex-row items-center justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Empty side for layout balance */}
                <div className="flex-1 hidden md:block"></div>

                {/* Center Dot - Responsive */}
                <div
                  className={`hidden md:block absolute left-[50%] top-6 w-4 h-4 rounded-full border-4 border-white shadow-md transform -translate-x-1/2 z-10 ${edu.color.replace(
                    "text",
                    "bg"
                  )}`}
                ></div>

                {/* Content Card */}
                <div className="w-full md:flex-1 md:px-10">
                  <div
                    className={`${edu.bg} p-6 xs:p-8 rounded-2xl border ${edu.border} shadow-sm hover:shadow-md transition-all relative`}
                  >
                    {/* Mobile Icon Float */}
                    <div
                      className={`md:hidden absolute -top-5 left-6 p-2 rounded-lg bg-white shadow-sm border border-gray-100 ${edu.color}`}
                    >
                      {edu.icon}
                    </div>

                    <div className="flex flex-col gap-2 mb-4 mt-2 md:mt-0">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                            {edu.degree}
                          </h3>
                          <p
                            className={`font-medium ${edu.color} mt-1 text-sm md:text-base`}
                          >
                            {edu.school}
                          </p>
                        </div>
                        <div className="mt-2 md:mt-0 flex items-center text-gray-400 text-xs md:text-sm font-semibold shrink-0 bg-white/50 px-2 py-1 rounded-md self-start md:self-auto">
                          <Calendar size={14} className="mr-1" />
                          {edu.year}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className={`hidden md:block p-3 bg-white rounded-xl shadow-sm ${edu.color} shrink-0`}
                      >
                        {React.cloneElement(edu.icon, { size: 24 })}
                      </div>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
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

export default Education;

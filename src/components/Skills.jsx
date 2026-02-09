import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Layout, Terminal, Server } from "lucide-react";

const Skills = () => {
  // Categories and Skills data
  const skillCategories = [
    {
      id: "languages",
      name: "Languages & Frameworks",
      icon: <Code size={24} />,
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-100",
      skills: [
        "Python",
        "Django",
        "FastAPI",
        "ReactJS",
        "Node.js",
        "JavaScript",
      ],
    },
    {
      id: "database_cloud",
      name: "Database & Cloud",
      icon: <Database size={24} />,
      color: "text-purple-500",
      bg: "bg-purple-50",
      border: "border-purple-100",
      skills: ["SQL", "Azure", "Firebase"],
    },
    {
      id: "styling",
      name: "Styling & Frontend",
      icon: <Layout size={24} />,
      color: "text-pink-500",
      bg: "bg-pink-50",
      border: "border-pink-100",
      skills: ["Tailwind CSS", "HTML5", "CSS3", "Bootstrap"],
    },
    {
      id: "tools",
      name: "Tools & Environment",
      icon: <Terminal size={24} />,
      color: "text-green-500",
      bg: "bg-green-50",
      border: "border-green-100",
      skills: ["VS Code", "Cursor", "Antigravity"],
    },
    {
      id: "datascience",
      name: "Data Science & AI",
      icon: <Server size={24} />,
      color: "text-orange-500",
      bg: "bg-orange-50",
      border: "border-orange-100",
      skills: ["Pandas", "NumPy", "PyTorch", "Opencv"],
    },
  ];

  const getSkillLink = (skill) => {
    const links = {
      Python: "https://www.python.org/",
      Django: "https://www.djangoproject.com/",
      SQL: "https://en.wikipedia.org/wiki/SQL",
      Azure: "https://azure.microsoft.com/",
      // Add default link if needed
    };
    return links[skill] || "#";
  };

  return (
    <section
      id="skills"
      className="pt-8 pb-12 md:pt-8 md:pb-12 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-10 3xl:max-w-[2000px] border-b border-gray-200 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            A comprehensive toolset for building scalable and efficient
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 xs:p-8 ${category.bg} border ${category.border} hover:shadow-lg transition-all duration-300 flex flex-col`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-xl bg-white shadow-sm ${category.color} shrink-0`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <a
                    key={skill}
                    href={getSkillLink(skill)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="px-3 py-1.5 bg-white rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:shadow-sm transition-colors border border-gray-100 cursor-pointer">
                      {skill}
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

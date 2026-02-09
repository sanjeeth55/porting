import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ExternalLink, Maximize2 } from "lucide-react";

const certificates = [
  {
    title: "Python Full Stack Developer",
    issuer: "Besant Technologies",
    description:
      "Comprehensive training in Python, Django, REST APIs, and Front-end technologies.",
    image: "/assets/python-fullstack-cert.jpg",
  },
  {
    title: "Web Development Internship",
    issuer: "Coitor IT Tech",
    description:
      "Internship program focused on Web Development with Raspberry Pi.",
    image: "/assets/iot-cert.jpg",
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certificates"
      className="pt-0 pb-16 md:pt-0 md:pb-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-10 3xl:max-w-[1800px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            My <span className="text-blue-600">Certificates</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCert(cert)}
              className="group bg-white rounded-3xl p-6 xs:p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 flex flex-col md:flex-row items-center gap-6"
            >
              <div className="w-full md:w-32 h-48 md:h-32 bg-gray-100 rounded-2xl overflow-hidden shrink-0 relative">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-300">
                    <Award size={32} />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Maximize2 className="text-white drop-shadow-md" size={24} />
                </div>
              </div>

              <div className="text-center md:text-left flex-1">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {cert.title}
                </h3>
                <p className="text-blue-600 font-medium text-sm mb-3">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Image Viewing */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 xs:p-6 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl p-2 max-w-4xl w-full relative shadow-2xl max-h-[90vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full hover:shadow-md transition-all z-10"
                >
                  <X size={24} className="text-gray-700" />
                </button>
                <div className="w-full bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 overflow-auto custom-scrollbar">
                  {selectedCert.image ? (
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="w-auto h-auto max-w-full max-h-[85vh] object-contain"
                    />
                  ) : (
                    <div className="text-center p-20">
                      <Award size={60} className="mx-auto mb-2 opacity-50" />
                      <p>Image not available</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Download, Eye, X } from "lucide-react";

const Resume = () => {
  // Set the resume file path and filename here (edit manually)
  // Example: "/assets/Sanjeeth_Resume.pdf"
  const resumeUrl = "/assets/sanjeeth_Kumar_Resume.pdf";
  const fileName = "Sanjeeth_Resume.pdf";
  
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="resume"
      className="pt-8 pb-16 md:pt-8 md:pb-24 bg-gradient-to-br from-blue-50/50 to-purple-50/50"
    >
      <div className="max-w-4xl mx-auto px-4 xs:px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 text-center relative overflow-hidden border border-gray-100"
        >
          {/* Decorative Top Border */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shadow-sm animate-pulse-slow">
              <FileText size={40} />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            My <span className="text-blue-600">Resume / CV</span>
          </h2>

          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Check out my detailed professional journey, skills, and
            qualifications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-all hover:scale-105 shadow-md"
            >
              <Eye
                size={20}
                className="group-hover:text-blue-400 transition-colors"
              />
              View Resume
            </button>

            <a
              href={resumeUrl}
              download={fileName}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all hover:scale-105 shadow-md shadow-blue-200"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>

          {/* PDF Viewer Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto relative"
              >
                {/* Close Button */}
                <div className="sticky top-0 flex justify-end p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-b">
                  <button
                    onClick={() => setShowModal(false)}
                    className="p-2 hover:bg-gray-200 rounded-full transition-all"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* PDF Viewer using iframe */}
                <div className="w-full h-[70vh]">
                  <iframe
                    src={`${resumeUrl}#toolbar=0`}
                    className="w-full h-full border-none"
                    title="Resume PDF"
                  />
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;

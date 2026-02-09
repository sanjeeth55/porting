import React from "react";
import { Mail, Smartphone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-white border-t border-gray-100 pt-0 pb-8 md:pt-0 md:pb-10"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-10 3xl:max-w-[2000px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16 pt-10 md:pt-16">
          {/* Brand & Message */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Get in <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md">
              Whether you have a project in mind or just want to connect, feel
              free to reach out. I'm always open to discussing new opportunities
              and ideas.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <a
              href="mailto:sanjeeth5555@gmail.com"
              className="flex items-center gap-4 p-3 xs:p-4 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="p-2 xs:p-3 bg-blue-50 text-blue-600 rounded-full group-hover:bg-blue-100 transition-colors shrink-0">
                <Mail size={20} className="xs:w-6 xs:h-6" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs xs:text-sm text-gray-400 font-medium">
                  Email Me
                </p>
                <p className="text-sm xs:text-base md:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors break-words">
                  sanjeeth5555@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-3 xs:p-4 rounded-xl hover:bg-gray-50 transition-colors group cursor-default">
              <div className="p-2 xs:p-3 bg-green-50 text-green-600 rounded-full group-hover:bg-green-100 transition-colors shrink-0">
                <Smartphone size={20} className="xs:w-6 xs:h-6" />
              </div>
              <div>
                <p className="text-xs xs:text-sm text-gray-400 font-medium">
                  Call Me
                </p>
                <p className="text-sm xs:text-base md:text-lg font-bold text-gray-900">
                  +91 63838 69026
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 xs:p-4 rounded-xl hover:bg-gray-50 transition-colors group cursor-default">
              <div className="p-2 xs:p-3 bg-purple-50 text-purple-600 rounded-full group-hover:bg-purple-100 transition-colors shrink-0">
                <MapPin size={20} className="xs:w-6 xs:h-6" />
              </div>
              <div>
                <p className="text-xs xs:text-sm text-gray-400 font-medium">
                  Location
                </p>
                <p className="text-sm xs:text-base md:text-lg font-bold text-gray-900">
                  Bangalore, Karnataka, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separate Copyright Container */}
      <div className="border-t border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-10 3xl:max-w-[2000px] py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 font-medium text-sm text-center md:text-left">
            © {new Date().getFullYear()} Sanjeeth. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/sanjeeth5555"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors font-bold flex items-center gap-2 text-sm"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

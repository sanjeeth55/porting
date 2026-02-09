import React from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans overflow-x-hidden">
      <Toaster position="top-right" />
      <Navbar />
      <Hero />
      <About />
      <Resume />
      {/* Reordered as requested: Experience -> Projects -> Skills */}
      <Experience />
      <Projects />
      <Skills />

      <Education />
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;

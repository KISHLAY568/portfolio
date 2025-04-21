import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;

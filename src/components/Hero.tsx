import React from "react";
import { Github as GitHub, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import kishlayImg from "./kishlay.jpg";
const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="animate-fade-in-up">
              <h2 className="text-gray-600 text-xl md:text-2xl mb-2 font-medium">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                Kishlay Kumar
              </h1>
              <h3 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
                Computer Science Engineering Student
              </h3>
              <p className="text-gray-600 mb-8 max-w-lg text-lg">
                Passionate about web development and creating innovative
                solutions through technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors text-center"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors text-center"
                >
                  Contact Me
                </a>
              </div>

              <div className="flex flex-wrap gap-6">
                <a
                  href="https://github.com/KISHLAY568"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <GitHub size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/kishlaykumar568"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:[email address removed]"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail size={20} />
                  <span>Email</span>
                </a>
                <a
                  href="tel:+917494016678"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Phone size={20} />
                  <span>+91-7494016678</span>
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-60 h-60 md:w-80 md:h-80 bg-blue-600 rounded-full overflow-hidden border-4 border-white shadow-xl animate-fade-in">
                <img
                  src={kishlayImg}
                  alt="Kishlay Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white px-6 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-blue-600" />
                  <span className="font-medium">Patna, Bihar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

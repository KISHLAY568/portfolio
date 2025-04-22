import React from "react";
import {
  Github as GitHub,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 mt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kishlay Kumar</h3>
            <p className="text-gray-400 mb-4">
              Computer Science Engineering Student passionate about creating
              innovative solutions through technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/KISHLAY568"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <GitHub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/kishlaykumar568"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#certificates"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Certificates
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Education
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-400 mt-1" />
                <span className="text-gray-400">Patna, Bihar 803303</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-blue-400 mt-1" />
                <a
                  href="mailto:kishlayk568@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  kishlayk568@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-blue-400 mt-1" />
                <a
                  href="tel:+917494016678"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91-7494016678
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-400 mb-4">
              Feel free to reach out for collaborations, job opportunities, or
              just to say hi!
            </p>
            <a
              href="mailto:[email address removed]"
              className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors inline-block"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Kishlay Kumar. All rights
            reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

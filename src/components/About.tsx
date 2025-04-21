import React from 'react';
import { Code, Server, Database, Layers } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Who I Am</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a Computer Science Engineering student at Lovely Professional University with a passion for building innovative web applications. I enjoy solving complex problems and learning new technologies to create efficient and user-friendly solutions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My journey in technology has equipped me with strong foundations in web development using the MERN stack, along with expertise in data structures and algorithms. I'm constantly seeking opportunities to enhance my skills and contribute to meaningful projects.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, participating in hackathons, and contributing to open-source projects. I believe in continuous learning and applying my knowledge to create impactful solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Code size={28} className="text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Frontend</h4>
              <p className="text-gray-600">
                Building responsive and interactive user interfaces using modern frameworks and libraries.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Server size={28} className="text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Backend</h4>
              <p className="text-gray-600">
                Developing robust server-side applications and RESTful APIs for seamless data flow.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Database size={28} className="text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Databases</h4>
              <p className="text-gray-600">
                Working with SQL and NoSQL databases to store and manage application data efficiently.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Layers size={28} className="text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Full Stack</h4>
              <p className="text-gray-600">
                Integrating all parts of the application to create complete and functioning products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
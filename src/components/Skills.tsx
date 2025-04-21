import React from 'react';
import { Code, Server, Database, Cpu, Terminal, Hammer, Globe } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Array<{
    name: string;
    logo: string;
  }>;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: <Code size={28} className="text-blue-600" />,
      skills: [
        { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
      ]
    },
    {
      title: 'Frameworks',
      icon: <Hammer size={28} className="text-blue-600" />,
      skills: [
        { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }
      ]
    },
    {
      title: 'Databases',
      icon: <Database size={28} className="text-blue-600" />,
      skills: [
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
      ]
    },
    {
      title: 'Development Tools',
      icon: <Terminal size={28} className="text-blue-600" />,
      skills: [
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Postman', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'NPM', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' }
      ]
    },
    {
      title: 'Skills',
      icon: <Cpu size={28} className="text-blue-600" />,
      skills: [
        { name: 'Data Structures', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Algorithms', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Problem-Solving', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Responsive Design', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My technical expertise spans across various programming languages, frameworks, tools, and concepts.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 flex items-center shadow-sm"
                  >
                    <img 
                      src={skill.logo} 
                      alt={skill.name} 
                      className="w-6 h-6 mr-2"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 text-white rounded-lg p-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-4 md:mb-0">
              <Globe size={40} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Looking for new opportunities</h3>
              <p className="text-blue-100 max-w-2xl mx-auto">
                I'm currently seeking opportunities to apply and enhance my skills in a collaborative environment.
                If you're looking for a dedicated developer with a passion for creating efficient solutions, let's connect!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
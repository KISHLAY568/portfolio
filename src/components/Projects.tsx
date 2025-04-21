import React from 'react';
import { Github as GitHub, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  githubLink: string;
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Wanderlust',
      description: 'A web application using the MVC architecture for members to list and discover hotels.',
      features: [
        'Mapbox integration for travelers to view locations',
        'Member reviews for hotel accommodations (MongoDB)',
        'Real-time feedback with flash messages and error handling',
        'Dynamic data handling from MongoDB, responsive design, REST APIs'
      ],
      technologies: ['MongoDB', 'Express.js', 'Node.js', 'Bootstrap', 'JavaScript'],
      githubLink: 'https://github.com/KISHLAY568/Project-WanderLust',
      image: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'EyeShop',
      description: 'A customer-friendly e-commerce platform for browsing and purchasing spectacles.',
      features: [
        'Cart functionalities with seamless customer experiences (React)',
        'Filtering and sorting options (price, categories)',
        'Wishlist feature',
        'Mobile-responsive design'
      ],
      technologies: ['React', 'JavaScript', 'CSS', 'HTML', 'Context API'],
      githubLink: 'https://github.com/KISHLAY568/EyeShop---Eye-Glasses-E-Commerce-App',
      image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Car Rental',
      description: 'A full-featured web application for renting cars and managing bookings.',
      features: [
        'User authentication and role-based access control',
        'Dynamic car search with filters (location, price, car type)',
        'Admin panel to manage vehicles, bookings, testimonials',
        'Admin dashboard for monitoring registrations, bookings, and subscriptions'
      ],
      technologies: ['PHP', 'JavaScript', 'MySQL', 'XAMPP', 'HTML', 'CSS'],
      githubLink: 'https://github.com/KISHLAY568/Car-Rental-Management-System',
      image: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and expertise in different technologies.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`grid md:grid-cols-2 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="h-72 md:h-auto">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="text-gray-600 mb-6 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={project.githubLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      <GitHub size={20} />
                      <span>View on GitHub</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
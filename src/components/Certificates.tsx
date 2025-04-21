import React from 'react';
import { Award, FileText, ExternalLink } from 'lucide-react';

interface Certificate {
  name: string;
  provider: string;
  date: string;
  link?: string;
}

const Certificates: React.FC = () => {
  const certificates: Certificate[] = [
    {
      name: 'Cloud Computing',
      provider: 'NPTEL',
      date: 'July 2024',
      link: 'https://drive.google.com/file/d/1I3Cp4WVvNgwZoVnWuYPcPZHYkM5TNWsq/view?usp=sharing'
    },
    {
      name: 'Data Structures and Algorithms',
      provider: 'Programming Pathsala',
      date: 'October 2024',
      link: 'https://drive.google.com/file/d/19ytudzrf8sXxm1NkCIzpmL1SH2g_r7EK/view?usp=sharing'
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Certificates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional certifications that validate my skills and knowledge in various technologies.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Award size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{certificate.name}</h3>
                    <p className="text-gray-600 mb-3">
                      {certificate.provider} • {certificate.date}
                    </p>
                    {certificate.link && (
                      <a 
                        href={certificate.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        <FileText size={16} />
                        <span>View Certificate</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
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

export default Certificates;
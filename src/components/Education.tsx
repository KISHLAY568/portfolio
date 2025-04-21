// import React from 'react';
// import { GraduationCap, MapPin, Calendar } from 'lucide-react';

// interface Education {
//   institution: string;
//   degree: string;
//   location: string;
//   year: string;
//   grade: string;
// }

// const Education: React.FC = () => {
//   const educationDetails: Education[] = [
//     {
//       institution: 'Lovely Professional University',
//       degree: 'Bachelor of Technology in Computer Science and Engineering',
//       location: 'Phagwara, Punjab',
//       year: 'Since 2022',
//       grade: 'CGPA: 8.47'
//     },
//     {
//       institution: 'Digdarshan Secondary School',
//       degree: '12th with Science',
//       location: 'Patna, Bihar',
//       year: '2020-2021',
//       grade: 'Percentage: 76%'
//     },
//     {
//       institution: 'DAV Public School',
//       degree: '10th with Science',
//       location: 'Patna, Bihar',
//       year: '2018-2019',
//       grade: 'Percentage: 93%'
//     }
//   ];

//   return (
//     <section id="education" className="py-20 bg-white mb-32">
//       <div className="container mx-auto px-4 md:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Education</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             My academic journey that has provided me with a strong foundation in computer science and engineering.
//           </p>
//           <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
//         </div>

//         <div className="relative max-w-3xl mx-auto">
//           <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
          
//           {educationDetails.map((edu, index) => (
//             <div key={index} className={`relative mb-16 md:mb-24 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
//               <div className="absolute top-0 md:top-6 left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg"></div>
              
//               <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:float-left' : 'md:float-right'}`}>
//                 <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 md:mb-4">
//                     <GraduationCap size={24} className="text-blue-600" />
//                   </div>
                  
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.institution}</h3>
//                   <h4 className="text-lg font-medium text-blue-600 mb-3">{edu.degree}</h4>
                  
//                   <div className="flex flex-col gap-2 text-gray-600">
//                     <div className="flex items-center gap-2">
//                       <MapPin size={16} className="text-blue-500" />
//                       <span>{edu.location}</span>
//                     </div>
                    
//                     <div className="flex items-center gap-2">
//                       <Calendar size={16} className="text-blue-500" />
//                       <span>{edu.year}</span>
//                     </div>
                    
//                     <div className="mt-2 font-medium">{edu.grade}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;

// import React from "react";

// const Education: React.FC = () => {
//   return (
//     <section id="education" className="bg-gray-100 py-16">
//       <div className="container mx-auto px-4 md:px-8">
//         <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

//         <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {/* B.Tech Card */}
//           <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
//             <h3 className="text-xl font-semibold mb-2">
//               B.Tech - Computer Science & Engineering
//             </h3>
//             <p className="text-gray-600 mb-1">Lovely Professional University</p>
//             <p className="text-gray-500">2021 - Present</p>
//           </div>

//           {/* Intermediate Card */}
//           <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
//             <h3 className="text-xl font-semibold mb-2">Intermediate (12th)</h3>
//             <p className="text-gray-600 mb-1">DIGDARSHAN SEC SCHOOL, Patna</p>
//             <p className="text-gray-500">76.2% | 2021</p>
//           </div>

//           {/* Matriculation Card */}
//           <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
//             <h3 className="text-xl font-semibold mb-2">Matriculation (10th)</h3>
//             <p className="text-gray-600 mb-1">
//               DAV PUBLIC SCHOOL, Mokama, Patna
//             </p>
//             <p className="text-gray-500">93.2% | 2019</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;


import React from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

interface Education {
  institution: string;
  degree: string;
  location: string;
  year: string;
  grade: string;
}

const Education: React.FC = () => {
  const educationDetails: Education[] = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      location: "Phagwara, Punjab",
      year: "Since 2022",
      grade: "CGPA: 8.47",
    },
    {
      institution: "Digdarshan Secondary School",
      degree: "12th with Science",
      location: "Patna, Bihar",
      year: "2020-2021",
      grade: "Percentage: 76%",
    },
    {
      institution: "DAV Public School",
      degree: "10th with Science",
      location: "Patna, Bihar",
      year: "2018-2019",
      grade: "Percentage: 93%",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white mb-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Education
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic journey that has provided me with a strong foundation in
            computer science and engineering.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Grid Layout for cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {educationDetails.slice(0, 2).map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <GraduationCap size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {edu.institution}
              </h3>
              <h4 className="text-lg font-medium text-blue-600 mb-3">
                {edu.degree}
              </h4>
              <div className="flex flex-col gap-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-blue-500" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-blue-500" />
                  <span>{edu.year}</span>
                </div>
                <div className="mt-2 font-medium">{edu.grade}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Third card centered below */}
        <div className="mt-10 max-w-md mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <GraduationCap size={24} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {educationDetails[2].institution}
            </h3>
            <h4 className="text-lg font-medium text-blue-600 mb-3">
              {educationDetails[2].degree}
            </h4>
            <div className="flex flex-col gap-2 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-500" />
                <span>{educationDetails[2].location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-blue-500" />
                <span>{educationDetails[2].year}</span>
              </div>
              <div className="mt-2 font-medium">
                {educationDetails[2].grade}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

import React from 'react';

// Sample static data (you can later replace this with a dynamic import or props)
const companies = [
  {
    company: 'Qualcomm',
    roles: [
      {
        title: 'Embedded Engineer',
        skills: ['C', 'Microcontrollers'],
      },
      {
        title: 'DSP Engineer',
        skills: ['Signal Processing', 'MATLAB'],
      },
    ],
  },
  {
    company: 'TCS',
    roles: [
      {
        title: 'System Engineer',
        skills: ['Java', 'OOP', 'Spring Boot'],
      },
    ],
  },
];

const CompanyExplorer = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
        🏢 Explore Companies & Roles
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company, index) =>
          company.roles.map((role, roleIndex) => (
            <div
              key={`${index}-${roleIndex}`}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-blue-700">{role.title}</h3>
              <p className="text-sm text-gray-500 mt-1">Company: {company.company}</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 text-sm">
                {role.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CompanyExplorer;

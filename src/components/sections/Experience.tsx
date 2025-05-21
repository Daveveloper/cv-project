import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-gray-50">
      <div className="container section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Experience</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">Senior React Developer & People Manager - Publicis Sapient</h3>
              <span className="text-sm text-gray-500">Jan 2021 - Present</span>
            </div>
            <p className="text-gray-600 mb-4">4 years of experience at Publicis Sapient</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Lead React developer for enterprise-level applications</li>
              <li>People Manager responsible for team growth and career development</li>
              <li>Conduct technical interviews and participate in talent acquisition</li>
              <li>Mentor junior developers and conduct regular code reviews</li>
              <li>Architect and implement scalable frontend solutions</li>
              <li>Collaborate with global teams on large-scale projects</li>
              <li>Drive adoption of modern React practices and performance optimizations</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">React Developer - Accenture</h3>
              <span className="text-sm text-gray-500">Nov 2018 - Dec 2020</span>
            </div>
            <p className="text-gray-600 mb-4">2 years of experience at Accenture</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Developed and maintained React-based web applications for enterprise clients</li>
              <li>Collaborated with cross-functional teams in an agile environment</li>
              <li>Implemented responsive and accessible user interfaces</li>
              <li>Worked with enterprise-level codebases and development practices</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 
import React from 'react';

const ProjectCard: React.FC<{
  title: string;
  period: string;
  description: string;
  technologies: string[];
}> = ({ title, period, description, technologies }) => (
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
    <div className="mb-6">
      <h3 className="text-2xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-red-600 text-sm font-medium">{period}</p>
    </div>
    <div className="mb-6">
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
    <div className="space-y-3">
      <h4 className="font-semibold text-gray-900">Technologies Used:</h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span 
            key={tech} 
            className="px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium hover:bg-red-100 transition-colors duration-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Optum Healthcare Platform",
      period: "Publicis Sapient (2023-Present)",
      description: "Developing features for Optum's healthcare platform, a United Health Group solution. Implementing components and functionality for healthcare management and service delivery using Next.js and AEM integration.",
      technologies: ["React", "Next.js", "GraphQL", "SASS", "AEM", "TypeScript"]
    },
    {
      title: "Soriana E-commerce Platform",
      period: "Publicis Sapient (2022-2023)",
      description: "Developed key features for Soriana's e-commerce platform using Salesforce's React-based framework. Focused on implementing shopping functionalities and user interface components for Mexico's major retail chain.",
      technologies: ["React", "Salesforce Commerce", "PWA", "TypeScript"]
    },
    {
      title: "BJ's Restaurant - Digital Platform",
      period: "Publicis Sapient (2021-2022)",
      description: "Developed features for BJ's Restaurant's digital platform using React and Next.js. Implemented components and functionality to enhance the dining and ordering experience.",
      technologies: ["React", "Next.js", "GraphQL", "SASS", "TypeScript"]
    },
    {
      title: "Nissan Global - Vehicle Configurator",
      period: "Publicis Sapient (2021)",
      description: "Developed features for Nissan's global vehicle configuration application. Implemented components that allow customers to customize and explore vehicle options.",
      technologies: ["Vue.js", "AEM", "JavaScript", "REST APIs"]
    }
  ];

  return (
    <section id="projects" className="bg-gray-50">
      <div className="container section">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
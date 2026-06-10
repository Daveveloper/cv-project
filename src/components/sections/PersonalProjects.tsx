import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';
import { SiTypescript, SiVite, SiTailwindcss, SiSupabase } from 'react-icons/si';
import { FaReact, FaCode } from 'react-icons/fa';
import { useInView } from '../../hooks/useInView';

const ProjectCard: React.FC<{
  title: string;
  description: string;
  technologies: { name: string; icon: React.ElementType }[];
  link: string;
  index: number;
  isInView: boolean;
}> = ({ title, description, technologies, link, index, isInView }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="block bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
  >
    <div className="mb-6">
      <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-red-600 transition-colors duration-200">{title}</h3>
    </div>
    <div className="mb-6">
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
    <div className="space-y-3">
      <h4 className="font-semibold text-gray-900">Technologies Used:</h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span 
            key={tech.name} 
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium hover:bg-red-100 transition-colors duration-200"
          >
            <tech.icon className="w-4 h-4" />
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  </motion.a>
);

const PersonalProjects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, 0.2);

  const projects = [
    {
      title: "Quincena App",
      description: "Personal finance manager.",
      technologies: [
        { name: 'React', icon: FaReact },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Vite', icon: SiVite },
        { name: 'Tailwind', icon: SiTailwindcss },
        { name: 'Zustand', icon: FaCode },
        { name: 'Supabase', icon: SiSupabase },
      ],
      link: "https://quincena-kappa.vercel.app/"
    },
    {
      title: "Todo App",
      description: "Task manager application.",
      technologies: [
        { name: 'React', icon: FaReact },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Vite', icon: SiVite },
        { name: 'Tailwind', icon: SiTailwindcss },
        { name: 'Zustand', icon: FaCode },
        { name: 'Supabase', icon: SiSupabase },
      ],
      link: "https://todoz-app-tau.vercel.app/"
    }
  ];

  return (
    <section id="personal-projects" ref={sectionRef} className="bg-white">
      <div className="container section">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 flex items-center gap-3">
          <FaRocket className="w-8 h-8 text-red-600" />
          Portfolio Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;

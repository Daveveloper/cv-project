import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { useInView } from '../../hooks/useInView';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, 0.2);

  return (
    <section id="experience" ref={sectionRef} className="bg-gray-50">
      <div className="container section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
          <FaBriefcase className="w-8 h-8 text-red-600" />
          Experience
        </h2>
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex flex-col mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Senior Experience Engineer - Publicis Sapient</h3>
              <span className="text-sm text-red-600 mt-1 font-medium">Jan 2021 - August 2026</span>
            </div>
            <p className="text-gray-600 mb-4">5 years of experience at Publicis Sapient</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Lead React developer for enterprise-level applications</li>
              <li>People Manager responsible for team growth and career development</li>
              <li>Conduct technical interviews and participate in talent acquisition</li>
              <li>Mentor junior developers and conduct regular code reviews</li>
              <li>Architect and implement scalable frontend solutions</li>
              <li>Collaborate with global teams on large-scale projects</li>
              <li>Drive adoption of modern React practices and performance optimizations</li>
              <li>Leverage AI tools and prompt engineering to accelerate development workflows and explore emerging technologies</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex flex-col mb-4">
              <h3 className="text-xl font-semibold text-gray-900">React Developer - Accenture</h3>
              <span className="text-sm text-red-600 mt-1 font-medium">Nov 2018 - Dec 2020</span>
            </div>
            <p className="text-gray-600 mb-4">2 years of experience at Accenture</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Developed and maintained React-based web applications for enterprise clients</li>
              <li>Collaborated with cross-functional teams in an agile environment</li>
              <li>Implemented responsive and accessible user interfaces</li>
              <li>Worked with enterprise-level codebases and development practices</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 
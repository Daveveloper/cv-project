import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaLaptopCode } from 'react-icons/fa';
import { useInView } from '../../hooks/useInView';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, 0.3);

  return (
    <section ref={sectionRef} id="hero" className="pt-32 pb-16 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              Full Stack Developer
              <FaLaptopCode className="text-red-600" />
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-8">
              Full Stack Developer | People Manager | AI Explorer | Building enterprise-grade applications and leading teams.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex md:flex-col gap-6 justify-center md:justify-start"
          >
            <a
              href="https://github.com/Daveveloper"
              target="_blank"
              rel="noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
              title="Visit my GitHub profile"
            >
              <FaGithub className="w-8 md:w-10 h-8 md:h-10 text-gray-700 hover:text-red-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/davelopercr/"
              target="_blank"
              rel="noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
              title="Connect with me on LinkedIn"
            >
              <FaLinkedin className="w-8 md:w-10 h-8 md:h-10 text-gray-700 hover:text-red-600" />
            </a>
            <a
              href="mailto:dave.webdeveloper@gmail.com"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <FaEnvelope className="w-8 md:w-10 h-8 md:h-10 text-gray-700 hover:text-red-600" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
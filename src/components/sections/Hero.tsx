import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const Hero: React.FC = () => {
  const handleDownloadCV = () => {
    const cvUrl = '/DeividAraya_CV.pdf';
    window.open(cvUrl, '_blank');
  };

  return (
    <section className="pt-32 pb-16 bg-white">
      <div className="container">
        <div className="flex items-start justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              React Developer 👋
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Hi, I'm Deivid Araya. A passionate Frontend Developer with 6 years of experience, based in Heredia, Costa Rica. Currently expanding my expertise in AI prompting and exploring cutting-edge technologies to stay at the forefront of web development.
            </p>
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-md"
            >
              <FaFileDownload className="w-5 h-5" />
              Download CV
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <a 
              href="https://github.com/Daveveloper" 
              target="_blank" 
              rel="noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
              title="Visit my GitHub profile"
            >
              <FaGithub className="w-10 h-10 text-gray-700 hover:text-red-600" />
            </a>
            <a 
              href="https://www.linkedin.com/in/davelopercr/" 
              target="_blank" 
              rel="noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
              title="Connect with me on LinkedIn"
            >
              <FaLinkedin className="w-10 h-10 text-gray-700 hover:text-red-600" />
            </a>
            <a 
              href="mailto:dave.webdeveloper@gmail.com"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <FaEnvelope className="w-10 h-10 text-gray-700 hover:text-red-600" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
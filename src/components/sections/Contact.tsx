import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-50">
      <div className="container section">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Get In Touch</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red-100 p-4 rounded-full">
                  <FaEnvelope className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">Let's connect via email</p>
                </div>
              </div>
              <a 
                href="mailto:dave.webdeveloper@gmail.com"
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium block"
              >
                dave.webdeveloper@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red-100 p-4 rounded-full">
                  <FaPhone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">Available for calls</p>
                </div>
              </div>
              <a 
                href="tel:+50687626435"
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium block"
              >
                <img 
                  src="https://flagcdn.com/w20/cr.png"
                  srcSet="https://flagcdn.com/w40/cr.png 2x"
                  width="20"
                  height="13"
                  alt="Costa Rica"
                  className="inline-block mr-2"
                />
                (+506) 8762-6435
              </a>
            </motion.div>
          </div>

          <div className="flex justify-center gap-8">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              href="https://github.com/Daveveloper"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="bg-red-100 p-4 rounded-full mb-2 group-hover:bg-red-200 transition-colors duration-200">
                <FaGithub className="w-6 h-6 text-red-600" />
              </div>
              <span className="text-gray-700 group-hover:text-red-600 transition-colors duration-200">GitHub</span>
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              href="https://www.linkedin.com/in/davelopercr/"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="bg-red-100 p-4 rounded-full mb-2 group-hover:bg-red-200 transition-colors duration-200">
                <FaLinkedin className="w-6 h-6 text-red-600" />
              </div>
              <span className="text-gray-700 group-hover:text-red-600 transition-colors duration-200">LinkedIn</span>
            </motion.a>
          </div>
        </div>

        <p className="text-sm text-gray-500 italic text-center mt-16">
          This CV was created using{' '}
          <a 
            href="https://cursor.ai" 
            target="_blank" 
            rel="noreferrer" 
            className="text-red-600 hover:underline"
          >
            cursor.ai
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact; 
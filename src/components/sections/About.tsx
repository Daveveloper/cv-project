import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';
import profileImage from '../../assets/Deivid.jpeg';
import { useInView } from '../../hooks/useInView';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, 0.3);

  return (
    <section id="about" ref={sectionRef} className="bg-gray-50">
      <div className="container section">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 w-full md:w-auto flex justify-center"
          >
            <div className="w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full overflow-hidden border-4 border-gray-900 shadow-lg relative group">
              <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0 z-10"></div>
              <img
                src={profileImage}
                alt="Deivid Araya"
                className="w-full h-full object-cover transform scale-[1.02]"
                style={{
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden'
                }}
                loading="eager"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 text-center md:text-right"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-900 flex items-center gap-3 justify-center md:justify-end">
              <FaUser className="w-7 md:w-8 h-7 md:h-8 text-red-600" />
              About Me
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              I'm a Senior Frontend/Full Stack Developer and People Manager with over 7 years of experience building modern web applications. Based in Heredia, Costa Rica, I specialize in React, TypeScript, and Next.js — leading enterprise-level projects and mentoring development teams. Currently expanding into AI and emerging technologies, exploring agent creation, prompt engineering, and new tools to stay at the cutting edge of development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 
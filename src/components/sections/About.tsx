import React from 'react';
import { FaUser } from 'react-icons/fa';
import profileImage from '../../assets/Deivid.jpeg';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-50">
      <div className="container section">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
            <div className="w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full overflow-hidden border-4 border-gray-900 shadow-lg relative group">
              <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0 z-10"></div>
              <img 
                src={profileImage}
                alt="Deivid Araya" 
                className="w-full h-full object-cover transform scale-[1.02]"
                style={{ 
                  imageRendering: 'crisp-edges',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden'
                }}
                loading="eager"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-right">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-900 flex items-center gap-3 justify-center md:justify-end">
              <FaUser className="w-7 md:w-8 h-7 md:h-8 text-red-600" />
              About Me
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              I am a 34-year-old, I am a Frontend Developer with 6 years of experience in building modern web applications. 
              Based in the beautiful city of Heredia, Costa Rica, I specialize in creating responsive and 
              user-friendly interfaces using React and its ecosystem. My passion lies in writing clean, 
              maintainable code and implementing best practices in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
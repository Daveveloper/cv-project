import React from 'react';
import profileImage from '../../assets/Deivid.jpeg';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-50">
      <div className="container section">
        <div className="flex items-center gap-12">
          <div className="flex-shrink-0">
            <div className="w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-gray-900 shadow-lg">
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

          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">About Me</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              I am a 34-year-old React Developer with 6 years of experience in building modern web applications. 
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
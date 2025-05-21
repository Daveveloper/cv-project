import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="container h-20 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Deivid Araya</h1>
        <div className="flex gap-6">
          <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors duration-200">About</a>
          <a href="#skills" className="text-gray-700 hover:text-red-600 transition-colors duration-200">Skills</a>
          <a href="#experience" className="text-gray-700 hover:text-red-600 transition-colors duration-200">Experience</a>
          <a href="#projects" className="text-gray-700 hover:text-red-600 transition-colors duration-200">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors duration-200">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header; 
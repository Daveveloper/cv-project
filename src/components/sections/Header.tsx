import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaCode, FaBriefcase, FaLaptopCode, FaEnvelope } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: '#about', text: 'About', icon: <FaUser className="w-5 h-5" /> },
    { href: '#skills', text: 'Skills', icon: <FaCode className="w-5 h-5" /> },
    { href: '#experience', text: 'Experience', icon: <FaBriefcase className="w-5 h-5" /> },
    { href: '#projects', text: 'Projects', icon: <FaLaptopCode className="w-5 h-5" /> },
    { href: '#contact', text: 'Contact', icon: <FaEnvelope className="w-5 h-5" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="container h-20 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Deivid Araya</h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="text-gray-700 hover:text-red-600 transition-colors duration-200 flex items-center gap-2"
            >
              {item.icon}
              {item.text}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-700 hover:text-red-600 transition-colors duration-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black"
                onClick={toggleMenu}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg z-50"
              >
                <div className="flex flex-col p-6">
                  <div className="flex justify-end mb-8">
                    <button 
                      onClick={toggleMenu}
                      className="p-2 text-gray-700 hover:text-red-600 transition-colors duration-200"
                      aria-label="Close menu"
                    >
                      <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex flex-col gap-6">
                    {menuItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-lg font-medium flex items-center gap-3"
                        onClick={toggleMenu}
                      >
                        {item.icon}
                        {item.text}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header; 
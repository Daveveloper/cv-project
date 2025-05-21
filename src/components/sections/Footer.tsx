import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container text-center text-gray-600">
        <p>© {new Date().getFullYear()} Deivid Araya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800">Bibhu Ranjan</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition">Home</a>
            <a href="#fun-projects" className="text-gray-600 hover:text-blue-600 transition">Projects</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600 transition">Experience</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition">Skills</a>
            <a href="#achievements" className="text-gray-600 hover:text-blue-600 transition">Achievements</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
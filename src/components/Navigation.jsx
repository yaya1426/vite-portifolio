import React, { useState } from 'react';

const Navigation = ({ onPageChange, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 bg-white shadow">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Site Title */}
          <div className="text-xl font-bold text-blue-600">
            Yehia Tech
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <button 
              onClick={() => onPageChange('home')}
              className={`hover:text-blue-500 ${currentPage === 'home' ? 'text-blue-500' : 'text-gray-700'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onPageChange('about')}
              className={`hover:text-blue-500 ${currentPage === 'about' ? 'text-blue-500' : 'text-gray-700'}`}
            >
              About
            </button>
            <button 
              onClick={() => onPageChange('contact')}
              className={`hover:text-blue-500 ${currentPage === 'contact' ? 'text-blue-500' : 'text-gray-700'}`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <button 
              onClick={() => {
                onPageChange('home');
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded hover:bg-gray-100 ${
                currentPage === 'home' ? 'text-blue-500' : 'text-gray-700'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => {
                onPageChange('about');
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded hover:bg-gray-100 ${
                currentPage === 'about' ? 'text-blue-500' : 'text-gray-700'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => {
                onPageChange('contact');
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded hover:bg-gray-100 ${
                currentPage === 'contact' ? 'text-blue-500' : 'text-gray-700'
              }`}
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 
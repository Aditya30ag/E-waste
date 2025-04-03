import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem('userToken'); // Clear the token from local storage
    window.location.href = '/'; // Redirect to the home page
  }
  return (
    <nav className="w-full md:w-auto">
      {/* Mobile menu button */}
      <div className="md:hidden flex justify-end">
        <button 
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-2`}>
        <div className="flex flex-col space-y-2">
          <Link to="/" className="px-3 py-2 rounded hover:bg-green-800 transition duration-200">Home</Link>
          <Link to="/about" className="px-3 py-2 rounded hover:bg-green-800 transition duration-200">About</Link>
          <Link to="/services" className="px-3 py-2 rounded hover:bg-green-800 transition duration-200">Services</Link>
          <Link to="/resources" className="px-3 py-2 rounded hover:bg-green-800 transition duration-200">Resources</Link>
          <Link to="/blog" className="px-3 py-2 rounded hover:bg-green-800 transition duration-200">Blog</Link>
          <Link to="/contact" className="px-3 py-2 rounded hover:bg-green-800 transition duration-200">Contact</Link>
          <button onClick={handleLogout} className="mt-2 flex items-center justify-center bg-white text-green-700 px-4 py-2 rounded-md font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Logout
          </button>
        </div>
      </div>
      
      {/* Desktop menu */}
      <div className="hidden md:flex md:items-center space-x-6">
        <Link to="/dashboard" className="hover:text-green-200 transition duration-200">Home</Link>
        <Link to="/services" className="hover:text-green-200 transition duration-200">Services</Link>
        <Link to="/overview" className="hover:text-green-200 transition duration-200">Overview</Link>
        <button onClick={handleLogout} to="/" className="flex items-center bg-white text-green-700 px-4 py-2 rounded-md font-medium hover:bg-green-100 transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
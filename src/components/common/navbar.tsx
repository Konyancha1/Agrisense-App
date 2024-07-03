import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/images/agrisense - Logo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-3 shadow-md font-sans">
      <div className="flex items-center justify-between mx-4 lg:mx-24">
        <img src={logo} alt="Agrisense Logo" className="h-auto w-48" />
        <div className="hidden md:flex items-center space-x-8 mx-auto">
          <Link to="/" className="text-gray-700 hover:text-green-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-green-600">
            About Us
          </Link>
          <Link to="/solution" className="text-gray-700 hover:text-green-600">
            Our Solution
          </Link>
          <Link to="/demo" className="text-gray-700 hover:text-green-600">
            Product Demo
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button
            className="bg-green-600 p-3 text-sm text-white font-bold rounded-lg cursor-pointer transition duration-300 hover:bg-green-700 md:px-6 md:py-3 md:text-base"
            onClick={() => navigate('/auth/farmer')}
          >
            Farmer
          </button>
          <button
            className="bg-green-600 p-3 text-sm text-white font-bold rounded-lg cursor-pointer transition duration-300 hover:bg-green-700 md:px-6 md:py-3 md:text-base"
            onClick={() => navigate('/auth/cooperative')}
          >
            Cooperative
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-700 hover:text-green-600 focus:outline-none"
            onClick={handleMenuToggle}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-2">
          <Link to="/" className="text-gray-700 hover:text-green-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-green-600">
            About Us
          </Link>
          <Link to="/solution" className="text-gray-700 hover:text-green-600">
            Our Solution
          </Link>
          <Link to="/demo" className="text-gray-700 hover:text-green-600">
            Product Demo
          </Link>
          <button
            className="bg-green-600 p-3 text-sm text-white font-bold rounded-lg cursor-pointer transition duration-300 hover:bg-green-700 w-[50%] text-center"
            onClick={() => navigate('/auth/farmer')}
          >
            Farmer
          </button>
          <button
            className="bg-green-600 p-3 text-sm text-white font-bold rounded-lg cursor-pointer transition duration-300 hover:bg-green-700 w-[50%] text-center"
            onClick={() => navigate('/auth/cooperative')}
          >
            Cooperative
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
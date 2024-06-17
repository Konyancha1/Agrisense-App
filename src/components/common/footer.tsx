import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/images/agrisense - Logo.png';
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4 lg:mb-0">
          <img src={logo} alt="Logo" className="h-8" />
          <span className="text-sm">© 2024 AgriSense Technologies LTD</span>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:space-x-6 mb-4 lg:mb-0">
          <a href="#" className="hover:text-green-600 mb-2 lg:mb-0 lg:mr-6">Privacy Policy</a>
          <a href="#" className="hover:text-green-600 mb-2 lg:mb-0 lg:mr-6">Terms of Service</a>
          <a href="#" className="hover:text-green-600 mb-2 lg:mb-0">Contact Us</a>
        </div>

        <div className="flex items-center justify-center lg:justify-end space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
            <FaFacebook  />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
            <FaTwitter  />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
            <AiOutlineInstagram  />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
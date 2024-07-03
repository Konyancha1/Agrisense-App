import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/images/cooperative.png'

const CooperativePage: React.FC = () => {
  return (
    <div className="flex h-screen font-sans">
      <div
        className="hidden lg:block w-[45%] h-full relative"
        style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>
      <div className="flex w-full lg:w-[55%] items-center justify-center">
        <div className="w-full md:w-[60%] text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Coming Soon</h1>
          <p className="text-lg md:text-2xl">
            We're working hard to bring you something amazing. Stay tuned!
          </p>
          <div className="mt-10">
            <svg
              className="animate-spin h-8 w-8 text-green-600 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
          <div className="mt-10">
            <Link to="/" className="text-green-600 hover:text-green-700 text-lg font-semibold">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CooperativePage;

import React from 'react';
import Rwacof from '../assets/images/rwacof-logo.png';
import icon from '../assets/images/icon1.png';
import image1 from '../assets/images/Group-1707477770-2.png.png';
import image2 from '../assets/images/Group2.png'
import icon2 from '../assets/images/Growth-icon.png.png';
import Card from '../components/ui/card';
import AdvantageCard from '../components/ui/advantageCard';
import ImageCard from '../components/ui/imageCard';

const HomePage: React.FC = () => {
  const handleContactClick = (): void => {
    window.location.href = 'mailto:agrisense.coffee@gmail.com';
  };

  return (
    <>
      <div className="flex items-center mb-10">
        <div className="container mx-auto px-4 mt-16 md:mt-32">
          <div className="flex flex-col items-center lg:items-start justify-center font-sans">
            <div className="lg:px-16 px-4 w-full text-center">
              <h1 className="text-3xl lg:text-6xl text-green-600 leading-tight">
                Empowering Coffee Farmers, Enhancing Quality, Maximizing Profits
              </h1>
              <p className="text-lg lg:text-xl mt-4 lg:mt-8 text-gray-700">
                Revolutionizing coffee farming with intelligent disease detection technology, empowering farmers to protect harvest quality.
              </p>
              <button
                className="bg-green-600 p-3 mt-6 text-sm text-white font-semibold rounded-lg cursor-pointer transition duration-300 hover:bg-green-700 md:px-6 md:py-3 md:text-base"
                onClick={handleContactClick}
                title="mailto:agrisense.coffee@gmail.com"
              >
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-10 p-8 rounded-lg shadow-lg text-center bg-gray-50 mx-auto lg:w-[50%] md:w-[60%] w-[70%]">
        <p className="text-gray-700 md:text-lg text-sm font-semibold">Trusted by</p>
        <div className="flex justify-center mt-2">
          <img src={Rwacof} alt="RwaCof_Logo" className="h-12 mx-2" />
        </div>
      </div>

      <div className="flex flex-col items-center bg-gray-100 p-10 mb-20">
        <img src={icon} alt="Icon" className="h-12 mt-6" />
        <div className="font-bold text-xl font-sans text-center mt-4">We are Coffee Intelligence.</div>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-10 mb-10 w-full">
          <div className="grid grid-cols-1 md:flex md:flex-col md:mx-0 mx-auto items-center lg:items-start w-auto space-y-4 lg:mr-10">
            <Card title="Card 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <Card title="Card 2" text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Card title="Card 3" text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." />
            <Card title="Card 4" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." />
          </div>
          <img src={image1} alt="Image" className="h-64 md:h-72 mt-10 lg:mt-0" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-20 w-full">
        <div className="font-bold text-2xl mb-6">The AgriSense Advantage</div>
        <div className="flex flex-col lg:flex-row justify-center items-center w-[60%] lg:w-auto space-y-4 lg:space-y-0 lg:space-x-4">
          <AdvantageCard icon={icon} title="Advantage 1" text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <AdvantageCard icon={icon} title="Advantage 2" text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <AdvantageCard icon={icon} title="Advantage 3" text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." />
        </div>
      </div>

      <div className="flex flex-col items-center bg-gray-100 p-10">
        <img src={icon2} alt="Icon" className="h-12 mt-4" />
        <div className="font-bold text-xl font-sans text-center mt-4">Data Driven Insights.</div>
        
        {/* Large Screens */}
        <div className="hidden md:flex md:flex-col items-center w-full">
          <div className="flex flex-col md:flex-row items-center justify-center w-full">
            <div className="flex flex-col items-center lg:items-end lg:w-1/3 space-y-4 mb-4 lg:mb-0">
              <ImageCard title="" text="Lorem ipsum" icon={icon} />
              <ImageCard title="" text="Dolor sit amet" icon={icon} />
              <ImageCard title="" text="Consectetur" icon={icon} />
            </div>
            <img src={image2} alt="Centered Image" className="h-72 mx-auto lg:mx-10 mb-4 lg:mb-0" />
            <div className="flex flex-col items-start lg:w-1/3 space-y-4">
              <ImageCard title="" text="Adipiscing elit" icon={icon} />
              <ImageCard title="" text="Sed do eiusmod" icon={icon} />
              <ImageCard title="" text="Tempor incididunt" icon={icon} />
            </div>
          </div>
        </div>

        {/* Smaller screens */}
        <div className='items-center w-full md:hidden'>
          <div className='grid grid-cols-2'>
            <ImageCard title="" text="Lorem ipsum" icon={icon} />
            <ImageCard title="" text="Dolor sit amet" icon={icon} />
            <ImageCard title="" text="Consectetur" icon={icon} />
            <ImageCard title="" text="Adipiscing elit" icon={icon} />
            <ImageCard title="" text="Sed do eiusmod" icon={icon} />
            <ImageCard title="" text="Tempor incididunt" icon={icon} />
          </div>
          <img src={image2} alt="Centered Image" className="h-72 mx-auto mb-4" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
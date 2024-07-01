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
            <Card title="Early and accurate detection" text="Reduces coffee yield and quality losses by 70% in increase by 45% each season," />
            <Card title="Advanced Analytics" text="Get comprehensive insights into farm health, including soil moisture, pest activity, and crop conditions." />
            <Card title="Digital Traceability" text="Ensures you stringent traceability and sustainability measures in coffee exports." />
            <Card title="AI Agronomist" text="Fill the knowledge gap among farmers through tailored advance in local language." />
            <Card title="Weather Alert" text="Beat the unpredictable weather patterns that can lead to significant crop losses." />
            <Card title="Reduce Chemical Use" text="Precise disease management reducing the need for chemical interventions and improve soil and plant health." />
          </div>
          <img src={image1} alt="Image" className="h-64 md:h-72 mt-10 lg:mt-0" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-20 w-full">
        <div className="font-bold text-2xl mb-6">The AgriSense Advantage</div>
        <div className="flex flex-col lg:flex-row justify-center items-center w-[60%] lg:w-auto space-y-4 lg:space-y-0 lg:space-x-4">
          <AdvantageCard icon={icon} title="Improve your supply operations" text="When agriculture becomes demand-led, standardization, and traceability become vital to ensure the quality and recal ability of the end product. Ensure direct supply agreements with farmers." />
          <AdvantageCard icon={icon} title="Boost your revenue" text="Higher yields and reduced farm input applications translate to better ROI and reduced cost of production. Knowing precisely where troubled areas are means targeted applications can be enough. " />
          <AdvantageCard icon={icon} title="Reach sustainability goals" text="Reducing your carbon footprint and targeted chemical applications not only saves money, it brings growers closer to reaching sustainability goals. " />
        </div>
      </div>

      <div className="flex flex-col items-center bg-gray-100 p-10">
        <img src={icon2} alt="Icon" className="h-12 mt-4" />
        <div className="font-bold text-xl font-sans text-center mt-4">Data Driven Insights.</div>
        
        {/* Large Screens */}
        <div className="hidden md:flex md:flex-col items-center w-full">
          <div className="flex flex-col md:flex-row items-center justify-center w-full">
            <div className="flex flex-col items-center lg:items-end lg:w-1/3 space-y-4 mb-4 lg:mb-0">
              <ImageCard title="" text="Early identification of coffee diseases with specific recommendations for intervention." icon={icon} />
              <ImageCard title="" text="Insights to reduce operational costs." icon={icon} />
              <ImageCard title="" text="Critical insights for sustainable farming" icon={icon} />
            </div>
            <img src={image2} alt="Centered Image" className="h-72 mx-auto lg:mx-10 mb-4 lg:mb-0" />
            <div className="flex flex-col items-start lg:w-1/3 space-y-4">
              <ImageCard title="" text="Data-driven recommendations for efficient use of water, fertilizers, and other inputs." icon={icon} />
              <ImageCard title="" text="Accurate forecasting of coffee yield based on current and historical farm data" icon={icon} />
              <ImageCard title="" text="Track coffee from farm to consumer, ensuring traceability." icon={icon} />
            </div>
          </div>
        </div>

        {/* Smaller screens */}
        <div className='items-center w-full md:hidden'>
          <div className='grid grid-cols-2'>
            <ImageCard title="" text="Early identification of coffee diseases with specific recommendations for intervention." icon={icon} />
            <ImageCard title="" text="Insights to reduce operational costs." icon={icon} />
            <ImageCard title="" text="Critical insights for sustainable farming" icon={icon} />
            <ImageCard title="" text="Data-driven recommendations for efficient use of water, fertilizers, and other inputs." icon={icon} />
            <ImageCard title="" text="Accurate forecasting of coffee yield based on current and historical farm data" icon={icon} />
            <ImageCard title="" text="Track coffee from farm to consumer, ensuring traceability." icon={icon} />
          </div>
          <img src={image2} alt="Centered Image" className="h-72 mx-auto mb-4" />
        </div>
      </div>
    </>
  );
};

export default HomePage;

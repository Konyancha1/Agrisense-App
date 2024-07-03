import React from 'react';
import leaf from '../assets/images/Image4.png';  
import sdg from '../assets/images/Container (1).png'; 

const AboutPage: React.FC = () => {
  const handleContactClick = (): void => {
    window.location.href = 'mailto:agrisense.coffee@gmail.com';
  };

  return (
    <>
      <section className="container mx-auto px-4 mb-10 mt-16">
        <div className="flex flex-col items-center justify-center font-sans">
          <div className="lg:px-16 px-6 lg:w-[90%] text-center">
            <h1 className="text-2xl md:text-5xl leading-tight mb-10">
              We work hard to provide you with the highest quality data for your agricultural decisions.
            </h1>
            <p className='text-base md:text-xl mb-2'>
              At <span className='text-green-600 font-semibold'>AgriSense</span>, we are dedicated to revolutionizing agriculture through innovative technologies 
              that empower farmers with data-driven insights and solutions.
            </p>
            <p className='text-base md:text-xl'>
              Our mission is to <span className='text-green-600 font-semibold'>enhance crop quality, optimize production, and ensure sustainable agricultural practices</span> globally.
            </p>
          </div>
        </div>
      </section>

      <section className='bg-gray-100 p-6 flex flex-col items-center justify-center'>
        <h2 className="text-lg md:text-2xl font-semibold leading-tight mb-5">Get In Touch</h2>
        <p className='text-base md:text-xl mb-5'>
          Now that we know each other, reach out with any questions.
        </p>
        <button
          className="bg-green-600 p-3 text-sm text-white font-semibold rounded-lg cursor-pointer transition duration-300 hover:bg-green-700 md:px-6 md:py-3 md:text-base mb-5"
          onClick={handleContactClick}
          title="mailto:agrisense.coffee@gmail.com"
        >
          Contact AgriSense
        </button>
      </section>

      <section className='flex flex-col items-center justify-center mt-10'>
        <img src={leaf} className='h-8 mb-4' alt="Leaf icon" />
        <h2 className='text-2xl text-green-600 font-semibold'>AgriSense's Pledge for Earth</h2>
        <p className='md:w-[80%] text-center p-6'>
          To help monitor and reduce chemical inputs per hectare. To guide for increasing yield and efficiency. To service monitoring cover crops across
          the whole year. To cooperate for carbon insetting by incorporating carbon-reducing processes for 
          its partners and clients. We support agro-industry and growers in reaching their sustainability goals globally.
        </p>
        <img src={sdg} className='p-6 lg:w-[60%]' alt="Sustainability Goals" />
      </section>
    </>
  );
};

export default AboutPage;
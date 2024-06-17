import React from 'react';

const AboutPage: React.FC = () => {
  const handleContactClick = (): void => {
    window.location.href = 'mailto:agrisense.coffee@gmail.com';
  };

  return (
    <>
      <div className="items-center">
        <div className="container mx-auto px-4 mb-10 mt-16">
          <div className="flex flex-col items-center justify-center font-sans">
            <div className="lg:px-16 px-6 lg:w-[70%] text-center">
              <h1 className="text-2xl md:text-5xl leading-tight mb-10">
                We work hard to provide you with the highest quality data for your agricultural decisions.
              </h1>
              <div className='text-base md:text-xl mb-2'>
                At <span className='text-green-600 font-semibold'>AgriSense</span>, we are dedicated to revolutionizing agriculture through innovative technologies 
                that empower farmers with data-driven insights and solutions. 
              </div>
              <div className='text-base md:text-xl'>
              Our mission is to <span className='text-green-600 font-semibold'>enhance crop quality, optimize production, and ensure sustainable agricultural practices</span> globally.
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray-100 p-6 flex flex-col items-center justify-center'>
          <h1 className="text-lg md:text-2xl font-semibold leading-tight mb-5">
            Get In Touch
          </h1>
          <div className='text-base md:text-xl mb-5'>
            Now that we know each other, reach out with any questions.
          </div>
          <button
            className="bg-green-600 p-3 text-sm text-white font-semibold rounded-lg cursor-pointer transition duration-300 hover:bg-green-700 md:px-6 md:py-3 md:text-base mb-5"
            onClick={handleContactClick}
            title="mailto:agrisense.coffee@gmail.com"
          >
            Contact AgriSense
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
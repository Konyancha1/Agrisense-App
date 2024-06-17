import React from 'react';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';

const SolutionPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-10 min-h-screen font-sans">
        <h2 className="text-2xl lg:text-4xl text-black text-center mb-5">Our Solution</h2>
        <p className='text-base md:text-xl mb-10 text-center'>Precision Agriculture enables more efficient use of crop inputs.</p>
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-2 mb-10 w-[90%] md:w-[70%]">
          <img src={image2} alt="Solution1" className="h-48 md:h-64" />
          <p className="text-base md:text-lg text-center md:text-left">
            Developing an AI-powered system for early coffee disease detection. 
            Utilizing machine learning algorithms to analyze coffee berry and coffee leaf images, 
            identifying disease symptoms, and quality attributes. Empowering farmers with proactive measures 
            to protect crops and optimize yield.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center justify-center md:space-x-10 space-y-2 mb-10 w-[90%] md:w-[70%]">
          <img src={image3} alt="Solution2" className="h-48 md:h-64" />
          <p className="text-base md:text-lg text-center md:text-left">
            Implementing an image analysis system for coffee disease detection. 
            Collecting images via a web platform, analyzing with AI models trained on labeled datasets. 
            Identifying disease indicators like color and texture abnormalities, providing real-time feedback
             and recommendations to farmers.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-2 w-[90%] md:w-[70%]">
          <img src={image1} alt="Solution3" className="h-48 md:h-64" />
          <p className="text-base md:text-lg text-center md:text-left">
            Enabling coffee cooperatives and corporations to monitor farmers' crop health through our 
            analytics dashboard. Offering customized farmer support based on real-time insights. 
            Resulting in improved income for farmers and increased revenue and profit margins for 
            corporations by selling high-quality coffee cherry and beans at better prices.
          </p>
        </div>
      </div>
    </>
  );
};

export default SolutionPage;
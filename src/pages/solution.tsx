import React from 'react';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';

const SolutionPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 min-h-screen font-sans">
      <h2 className="text-2xl lg:text-4xl text-black text-center mb-5">Our Solution</h2>
      <p className='text-base md:text-xl mb-10 text-center'>Precision Agriculture enables more efficient use of crop inputs.</p>

      {/* Solution 1 */}
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-4 md:space-y-0 mb-10 w-full md:w-[90%]">
        <img src={image2} alt="Solution1" className="h-48 md:h-64" />
        <p className="text-sm md:text-base text-center md:text-left max-w-xl">
        Early detection through Agrisense's AI-driven platform means more targeted and less frequent interventions, saving time and money throughout the growing season.
        By analyzing these images, our AI can accurately identify a wide range of pests and diseases early. Our advanced technology captures detailed images from your field, enabling precise pest and disease detection down to the leaf level. 
        To ensure accuracy and reliability, our professional agronomists review and verify the AI's findings, leaving no room for doubt. This proactive approach not only optimizes pest and disease management but also enhances overall farm productivity and sustainability.
        </p>
      </div>

      {/* Solution 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center md:space-x-10 space-y-4 md:space-y-0 mb-10 w-full md:w-[90%]">
        <img src={image3} alt="Solution2" className="h-48 md:h-64" />
        <p className="text-sm md:text-base text-center md:text-left max-w-xl">
        Collect real-time data from various sensors and manual inputs. Analyzes data to provide continuous updates on crop health and soil condition. Enables proactive management of farm activities by
        identifying potential issues before they escalate. Identify trouble zones in your field for yield losses. Enhances farm productivity and sustainability while reducing operational risks.
        </p>
      </div>

      {/* Solution 3 */}
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-4 md:space-y-0 mb-10 w-full md:w-[90%]">
        <img src={image1} alt="Solution3" className="h-48 md:h-64" />
        <p className="text-sm md:text-base text-center md:text-left max-w-xl">
          Enabling coffee cooperatives and corporations to monitor farmers' crop health through our analytics dashboard. Offering customized farmer support based on real-time insights. Resulting in improved income for farmers and increased revenue and profit margins for corporations by selling high-quality coffee cherry and beans at better prices.
        </p>
      </div>
    </div>
  );
};

export default SolutionPage;

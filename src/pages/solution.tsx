import React, { useMemo } from 'react';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/Container (2).png';
import image5 from '../assets/images/Container (3).png';

const solutions = [
  {
    title: '1. Crop Diagnostic for Pest and Diseases',
    text: `Early detection through Agrisense's AI-driven platform means more targeted and less frequent interventions, saving time and money throughout the growing season.
    By analyzing these images, our AI can accurately identify a wide range of pests and diseases early. Our advanced technology captures detailed images from your field, enabling precise pest and disease detection down to the leaf level.
    To ensure accuracy and reliability, our professional agronomists review and verify the AI's findings, leaving no room for doubt.
    This proactive approach not only optimizes pest and disease management but also enhances overall farm productivity and sustainability.`,
    image: image2,
    reverse: false,
  },
  {
    title: '2. Comprehensive Farm Health Monitoring',
    text: `Collect real-time data from various sensors and manual inputs.
    Analyzes data to provide continuous updates on crop health and soil condition.
    Enables proactive management of farm activities by identifying potential issues before they escalate.
    Identify trouble zones in your field for yield losses.
    Enhances farm productivity and sustainability while reducing operational risks.`,
    image: image3,
    reverse: true,
  },
  {
    title: '3. Advanced Data Analytics',
    text: `Aggregate data from multiple sources, including historical yield data, weather patterns, and market trends and use machine learning algorithms to generate insights.
    Predict yields, optimizes resource allocation, and identifies market opportunities, informing strategic decision-making.
    Boosts productivity and reduces input costs by up to 20-30% and increases profitability through better resource management.`,
    image: image1,
    reverse: false,
  },
  {
    title: '4. Digital Traceability',
    text: `Use technology to log every step of the coffee production process.
    Provide a transparent record from farm to consumer.
    Compare week over week to observe trends and patterns.
    Ensures compliance with sustainability regulations, such as the EU's deforestation and sustainability standards and builds consumer trust and enhances marketability.
    Increase market access and potential premiums.
    Strengthens brand reputation.`,
    image: image4,
    reverse: true,
  },
  {
    title: '5. AI Agronomist Support',
    text: `Analyzes field data to provide tailored advice on disease management.
    Delivers information in local languages, such as Kinyarwanda.
    Reduces the knowledge gap among farmers and provides actionable steps to manage and prevent diseases.
    Empowers farmers with expert knowledge.
    Promotes self-reliance and effective disease control.`,
    image: image5,
    reverse: false,
  },
];

const SolutionPage: React.FC = () => {
  // Memoize the solutions array to prevent unnecessary re-renders
  const memoizedSolutions = useMemo(() => solutions, []);

  return (
    <div className="flex flex-col items-center justify-center p-10 min-h-screen font-sans">
      <h2 className="text-2xl lg:text-4xl text-black text-center mb-5">Our Solution</h2>
      <p className="text-base md:text-xl mb-10 text-center">Precision Agriculture enables more efficient use of crop inputs.</p>

      {memoizedSolutions.map((solution, index) => (
        <div
          key={index}
          className={`flex flex-col ${solution.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center md:space-x-10 space-y-4 md:space-y-0 mb-10 w-full md:w-[90%]`}
        >
          <img src={solution.image} alt={solution.title} className="h-48 md:h-64" />
          <p className="text-sm md:text-base text-center md:text-left max-w-xl whitespace-pre-line">
            <span className="text-green-600 font-semibold">{solution.title}</span><br /><br />
            {solution.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SolutionPage;
const AdvantageCard: React.FC<{ icon: string, title: string, text: string }> = ({ icon, title, text }) => (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-full sm:w-64 h-[22rem]">
        <img src={icon} alt="Icon" className="h-12 mb-4" />
        <div className="font-bold text-lg mb-2 text-center">{title}</div>
        <p className="text-center">{text}</p>
    </div>
);

export default AdvantageCard;
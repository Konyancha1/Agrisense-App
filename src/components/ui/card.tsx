const Card: React.FC<{ title: string; text: string }> = ({ title, text }) => (
    <div className="bg-white p-4 m-2 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 w-[18rem] h-auto">
        <h3 className="font-bold text-xl text-center">{title}</h3>
        <p className="text-gray-700 mt-2">{text}</p>
    </div>
);

export default Card;
const ImageCard: React.FC<{ title: string, text: string, icon: string }> = ({ title, text, icon }) => (
    <div className="flex flex-col items-center bg-transparent p-4">
      <img src={icon} alt="Icon" className="h-12 mb-2" />
      {title && <div className="font-bold text-lg mb-2">{title}</div>}
      <p className="text-center">{text}</p>
    </div>
  );

export default ImageCard;
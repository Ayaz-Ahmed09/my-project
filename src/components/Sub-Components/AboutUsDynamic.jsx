const AboutUs = ({ title, text, imageSrc, imageAlt, points = [] }) => {
  return (
    <div className="container mx-auto px-4">
      {/* Title */}
      <h1 className="text-center text-2xl font-bold text-blue-500 font-serif lg:text-4xl mt-6">
        {title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Text Section */}
        <div className="items-center mb-1 text-center">
          <p className="sm:text-lg md:text-lg md:mt-16 lg:text-xl">{text}</p>

          {points?.length > 0 && (
            <ul className="grid grid-cols-2 gap-6 p-2 mt-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center bg-[url('/1.png')] bg-cover bg-center">
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="eager"
            className="w-full h-auto md:h-[500px] md:w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

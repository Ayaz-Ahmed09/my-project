const AboutUs = ({ title, text, imageSrc, imageAlt }) => {
  return (
    <div className="container mx-auto px-4">
      {/* Title */}
      <h1 className="text-center text-2xl font-bold text-blue-500 font-serif lg:text-4xl mt-6">
        {title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Text Section */}
        <div className="flex items-center mb-8 text-center">
          <p className="sm:text-lg md:text-lg lg:text-xl">{text}</p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center bg-[url('/1.png')] bg-cover bg-center">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto md:h-[500px] md:w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

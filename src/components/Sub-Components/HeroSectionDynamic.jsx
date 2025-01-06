import Button from "../Button";

const HeroSectionDynamic = ({
  title,
  subtitle,
  backgroundImage,
  image,
  buttonText,
}) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat flex flex-row items-center justify-between px-6"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Set dynamic background image
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 lg:mb-0 relative z-10">
        <div>
          <img
            src={image}
            alt="Hero Section"
            className="w-full h-auto object-cover md:h-[500px] md:w-auto"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center lg:text-left lg:w-1/2">
        <h2 className="text-4xl sm:text-sm md:text-4xl lg:text-5xl font-serif font-bold text-black">
          {title} {/* Dynamic Title */}
          <span className="text-blue-500 text-4xl sm:text-sm md:text-4xl lg:text-5xl font-bold">
            {subtitle} {/* Dynamic Subtitle */}
          </span>
        </h2>
        <div className="mt-6 lg:mr-[380px]">
          <Button name={buttonText} />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionDynamic;

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
            loading="eager"
            className="w-full h-auto object-cover md:h-[500px] md:w-auto"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center lg:text-left lg:w-1/2 mt-8 lg:mt-0">
        <p className="text-2xl lg:ml-14 sm:text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-black">
          {title} {/* Dynamic Title */}
          <span className="text-blue-500  sm:text-2xl md:text-4xl lg:text-5xl font-bold">
            {subtitle} {/* Dynamic Subtitle */}
          </span>
        </p>
        <div className="mt-6 lg:mr-[380px] lg:ml-[100px]">
          <Button name={buttonText} />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionDynamic;

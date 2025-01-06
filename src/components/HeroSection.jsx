import Button from "./Button";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="bg-[url('/homebg.jpg')] bg-cover bg-center bg-no-repeat flex flex-row items-center justify-between px-6">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 lg:mb-0 relative z-10">
        <div>
          <img
            src="/HomeBP.png"
            alt="Handyman Services"
            className="w-full h-auto object-cover md:h-[500px] md:w-auto"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center lg:text-left lg:w-1/2">
        <h1 className="text-4xl sm:text-sm md:text-4xl lg:text-5xl font-bold font-serif text-black">
          Maintenance
          <span className="hero-text text-4xl sm:text-lg md:text-4xl lg:text-5xl font-bold">
            {" "}
            {/* Wrap each character of "Services" in a span */}
            <span className="strokeme">s</span>
            <span className="strokeme">e</span>
            <span className="strokeme">r</span>
            <span className="strokeme">v</span>
            <span className="strokeme">i</span>
            <span className="strokeme">c</span>
            <span className="strokeme">e</span>
            <span className="strokeme">s</span>
          </span>
        </h1>
        <div className="mt-6 lg:mr-[380px]">
          <Button name="Call Now" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

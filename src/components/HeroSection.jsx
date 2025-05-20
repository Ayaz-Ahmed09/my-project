import Button from "./Button";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="bg-[url('/front.jpg')] bg-cover bg-center bg-no-repeat flex flex-row items-center justify-between px-6">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 lg:mb-0 relative z-10">
        <div>
          <img
            src="/HomeBP.png"
            alt="house and building maintenance services near you
"
            loading="eager"
            className="w-full h-auto object-cover md:h-[500px] md:w-auto"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center lg:text-left lg:w-1/2">
        <p className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold font-serif text-black">
          Your Property Deserves
          <span className="hero-text text-center  sm:text-lg md:text-4xl lg:text-5xl font-bold">
            {" "}
            {/* Wrap each character of "Services" in a span */}
            <span className="strokeme">B</span>
            <span className="strokeme">e</span>
            <span className="strokeme">s</span>
            <span className="strokeme">t</span>
            {/* <span className="strokeme">i</span>
            <span className="strokeme">c</span>
            <span className="strokeme">e</span>
            <span className="strokeme">s</span> */}
          </span>
        </p>
        <div className="mt-6 lg:mr-[380px] md:mr-0">
          <Button name="Call Now" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// import React from "react";
import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
const PlumbingService = () => {
  const PlumberServices = [
    {
      title: "Emergency Service",
      description:
        "From addressing burst pipes, and gas leaks to sewage issues, hire our emergency plumbers in Dubai available 24/7 for your convenience.",
      image: "/emergncy.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Sanitary Fitting",
      description:
        "Upgrade your space now with expert installation and repair of toilets, sinks, and showers. Call for optimal functionality and sanitation.",
      image: "/santry.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Water Leakage Repair",
      description:
        "Leaky pipes? Don’t wait! Get a swift water leakage repair service in Dubai now to prevent further damage. Call us for quick solutions!",
      image: "/leakage.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Water Tank Cleaning",
      description:
        "From overhead to underground tanks, rely on us for top-notch water tank cleaning service in Dubai to ensure safety & hygienic living. So, call us now! ",
      image: "/tank.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Water Pump Repair",
      description:
        "From water pump installation to its maintenance and repair in Dubai, hire our expert plumbers to ensure efficient water circulation.",
      image: "/waterP.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Bath Tub Installation",
      description:
        " From handling bathtub installation, and repair to maintenance, hire our experts to ensure its functionality for well-draining tubs.",
      image: "/Bath.jpeg",
      callNowLink: "+923096194974",
    },
  ];
  return (
    <div>
      <HeroSectionDynamic
        title="Plumber At Your"
        subtitle=" Services"
        backgroundImage="/new.jpeg"
        image="/phb.png"
        buttonText="Book Now"
      />
      <div>
        <AboutUsDynamic
          title="Home and Building Maintenance Services in Dubai"
          text="We are a full-service building maintenance company specializing in residential, commercial, and commercial/residential mixed-use developments. Our team of experienced professionals and skilled technicians will work tirelessly to ensure your home, office, or commercial space is in top condition."
          imageSrc="/p2.png"
          imageAlt="Image of man having all tools in hand"
        />
      </div>
      <div>
        <h1 className="text-center text-3xl font-bold mt-6">
          Plumbing Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {PlumberServices.map((service, index) => (
            <SubCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              callNowLink={service.callNowLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlumbingService;

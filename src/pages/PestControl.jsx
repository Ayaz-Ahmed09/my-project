import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";

const PestControl = () => {
  const PoolService = [
    {
      title: "bed pest control",
      description: "",
      image: "/mos.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Mosquito Control",
      description: " ",
      image: "/bed.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "indoor Pest control",
      description: "",
      image: "/outdoor.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Outdoor Pest control",
      description: "",
      image: "/outdoor2.jpeg",
      callNowLink: "+923096194974",
    },
  ];
  return (
    <div>
      <HeroSectionDynamic
        title="Pest Control"
        subtitle="Services"
        backgroundImage="/new.jpeg"
        image="/pestH.png"
        buttonText="Book Now"
      />
      <AboutUsDynamic
        title="Home and Building Maintenance Services in Dubai"
        text="We are a full-service building maintenance company specializing in residential, commercial, and commercial/residential mixed-use developments. Our team of experienced professionals and skilled technicians will work tirelessly to ensure your home, office, or commercial space is in top condition."
        imageSrc="/ph2.png"
        imageAlt="Image of man having all tools in hand"
      />
      <div>
        <h1 className="text-center text-3xl font-bold mt-6">
          Renovation Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {PoolService.map((service, index) => (
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

export default PestControl;

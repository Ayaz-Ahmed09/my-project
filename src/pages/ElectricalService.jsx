import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
const ElectricalService = () => {
  const ElectricalService = [
    {
      title: "Shot Circuit",
      description:
        "Our 24/7 electricians are ready to quickly fix short circuits and restore power.",
      image: "/Shot.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Socket Installation",
      description:
        " Get professional socket installation services in Dubai to ensure electrical safety and efficiency.",
      image: "/public/socket.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Chandelier Repairing",
      description:
        "From chandelier maintenance to electrical repairs, our experts can tackle a wide range of electrical issues, from simple to complex.",
      image: "/c.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Tidying Cables",
      description:
        "Transform your cluttered space into a clean and organized environment with our professional cable tidying service.",
      image: "/tidi.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Surge Protection",
      description:
        "Protect your investment in electronics with our cutting-edge surge protection technology.",
      image: "/Surge.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Electrical Upgrades",
      description:
        " Upgrade your electrical system to meet modern standards, enhance your home’s safety, and improve energy efficiency.",
      image: "/upgrade.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Intercom Installation & Fixing",
      description:
        "Don’t let leaky AC ducts ruin your comfort. Call us today to improve your home’s air quality with our AC duct cleaning and repair services.",
      image: "/intercom.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Rewiring Service",
      description:
        "Upgrade your outdated wiring to avoid costly repairs and potential disasters. Don’t wait for an electrical emergency. Call us today for a safety inspection.",
      image: "/cable.jpeg",
      callNowLink: "+923096194974",
    },
  ];
  return (
    <div>
      <HeroSectionDynamic
        title="Electrician At Your"
        subtitle="Services"
        backgroundImage="/new.jpeg"
        image="/electrician 2.png"
        buttonText="Book Now"
      />
      <AboutUsDynamic
        title="Home and Building Maintenance Services in Dubai"
        text="We are a full-service building maintenance company specializing in residential, commercial, and commercial/residential mixed-use developments. Our team of experienced professionals and skilled technicians will work tirelessly to ensure your home, office, or commercial space is in top condition."
        imageSrc="/ele.png"
        imageAlt="Image of man having all tools in hand"
      />
      <div>
        <h1 className="text-center text-3xl font-bold mt-6">
          Renovation Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {ElectricalService.map((service, index) => (
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

export default ElectricalService;

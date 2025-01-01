import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
const RenovationService = () => {
  const PlumberServices = [
    {
      title: "Bathroom",
      description:
        "Upgrade your bathroom’s fixtures & flooring to create a modern & more functional space, with our renovation services in Dubai.",
      image: "/Bathroom.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Ceiling",
      description:
        " Our renovation experts will add aesthetic brilliance to your interior with custom gypsum ceiling installation and repair solutions.",
      image: "/Celling.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Kitchen",
      description:
        "From cabinet making to countertop installation and custom kitchen designs, we’ll add aesthetics & functionality to your kitchen. ",
      image: "/Kitchen.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Roofing",
      description:
        "Trust our professionals to tackle installation and repairs of your property’s roofs, ensuring durability and peace of mind promptly.",
      image: "/roofing.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Gardening Or Landscaping",
      description:
        " Our landscaping services will enhance your home’s curb appeal. We’ll consider your lifestyle, preferences, and budget to create a customized landscape design that exceeds your expectations.",
      image: "/Garden.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Tile Installation Or Fixing",
      description:
        " Enhance your space with stunning tile fixings or installations that complement your home’s style and functionality. Our skilled technicians ensure a flawless finish.",
      image: "/flooring.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Garage Door Repair or Installation",
      description:
        " Our expert technicians ensure your garage door opens and closes effortlessly every time. Whether it’s a simple repair or a complete replacement, we have the expertise to get the job done right.",
      image: "/grage.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Brick Wall Breaker",
      description:
        " Our team of experienced professionals is equipped to handle demolition projects of any size or complexity, from small interior demolition to large-scale structural demolition.",
      image: "/brick.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Apartment Renovation Service",
      description:
        "Our apartment renovation services will not only improve the look of your apartment but also enhance its functionality and overall comfort. By upgrading, you’ll be investing in your well-being and creating a space that truly reflects your personal style.",
      image: "/Apartment.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Villa Renovation Service",
      description:
        " Our expert Villa renovation services will elevate your space, from grand living rooms to serene bedrooms and a kitchen, create a spa-like bathroom, or enhance your outdoor living areas; we’ll exceed your expectations.",
      image: "/villa.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Home Renovation",
      description:
        "Transform your home into a beautiful and functional space. Our skilled team can handle everything from minor upgrades to full-scale house renovations. From kitchen and bathroom remodeling to flooring and painting, we’ll bring your vision to life.",
      image: "/Hr.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Office Renovation Services",
      description:
        " Transform your workspace with our expert office renovation services. From open-plan layouts to private offices, we’ll create a functional and stylish environment.",
      image: "/Office.jpeg",
      callNowLink: "+923096194974",
    },
  ];
  return (
    <div>
      <HeroSectionDynamic
        title="Renovation"
        subtitle="Services"
        backgroundImage="/new.jpeg"
        image="/renoHome.png"
        buttonText="Book Now"
      />
      <AboutUsDynamic
        title="Home and Building Maintenance Services in Dubai"
        text="We are a full-service building maintenance company specializing in residential, commercial, and commercial/residential mixed-use developments. Our team of experienced professionals and skilled technicians will work tirelessly to ensure your home, office, or commercial space is in top condition."
        imageSrc="/reno2.png"
        imageAlt="Image of man having all tools in hand"
      />
      <div>
        <h1 className="text-center text-3xl font-bold mt-6">
          Renovation Services
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

export default RenovationService;

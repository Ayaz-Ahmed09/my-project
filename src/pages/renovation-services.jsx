import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
import TestimonialDynamic from "../components/Sub-Components/TestimonialDynamic";
import { FaTools, FaShieldAlt, FaRegClock } from "react-icons/fa";
import WhyChooseUs from "../components/Sub-Components/WhyChooseUs";
import { useEffect } from "react";
const RenovationService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const RenoServices = [
    {
      title: "Bathroom",
      description:
        "Upgrade your bathroom’s fixtures & flooring to create a modern & more functional space, with our renovation services in Dubai.",
      image: "/bath12.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Ceiling",
      description:
        " Our renovation experts will add aesthetic brilliance to your interior with custom gypsum ceiling installation and repair solutions.",
      image: "/celling.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Kitchen",
      description:
        "From cabinet making to countertop installation and custom kitchen designs, we’ll add aesthetics & functionality to your kitchen. ",
      image: "/kichten.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Roofing",
      description:
        "Trust our professionals to tackle installation and repairs of your property’s roofs, ensuring durability and peace of mind promptly.",
      image: "/roof.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Gardening Or Landscaping",
      description:
        " Our landscaping services will enhance your home’s curb appeal. We’ll consider your lifestyle, preferences, and budget to create a customized landscape design that exceeds your expectations.",
      image: "/garden.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Tile Installation Or Fixing",
      description:
        " Enhance your space with stunning tile fixings or installations that complement your home’s style and functionality. Our skilled technicians ensure a flawless finish.",
      image: "/tile.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Garage Door Repair or Installation",
      description:
        " Our expert technicians ensure your garage door opens and closes effortlessly every time. Whether it’s a simple repair or a complete replacement, we have the expertise to get the job done right.",
      image: "/garage.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Brick Wall Breaker",
      description:
        " Our team of experienced professionals is equipped to handle demolition projects of any size or complexity, from small interior demolition to large-scale structural demolition.",
      image: "/brick.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Apartment Renovation Service",
      description:
        "Our apartment renovation services will not only improve the look of your apartment but also enhance its functionality and overall comfort. By upgrading, you’ll be investing in your well-being and creating a space that truly reflects your personal style.",
      image: "/appart.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Villa Renovation Service",
      description:
        " Our expert Villa renovation services will elevate your space, from grand living rooms to serene bedrooms and a kitchen, create a spa-like bathroom, or enhance your outdoor living areas; we’ll exceed your expectations.",
      image: "/villa.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Home Renovation",
      description:
        "Transform your home into a beautiful and functional space. Our skilled team can handle everything from minor upgrades to full-scale house renovations. From kitchen and bathroom remodeling to flooring and painting, we’ll bring your vision to life.",
      image: "/home.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Office Renovation Services",
      description:
        " Transform your workspace with our expert office renovation services. From open-plan layouts to private offices, we’ll create a functional and stylish environment.",
      image: "/office.jpeg",
      callNowLink: "+971569096124",
    },
  ];
  const RenoTestimonials = [
    {
      image: "/r15.png",
      name: "Omar Al-Khalid",
      position: "Customer",
      message:
        "The renovation team transformed my outdated kitchen with exceptional quality and completed it on time!",
    },
    {
      image: "/r-8.png",
      name: "Zayed",
      position: "Customer",
      message:
        "My bathroom renovation was flawless; the team was professional and the result is fantastic!",
    },
    {
      image: "/r160.png",
      name: "Nabil Al-Rashid",
      position: "Customer",
      message:
        "Supreme revamped my living room beautifully; their attention to detail and craftsmanship was top-notch!",
    },
    {
      image: "/r130.png",
      name: "Maya Saeed",
      position: "Customer",
      message:
        "Supreme renovated my entire home with respect to my space and timeline, and the final result exceeded my expectations!",
    },
  ];

  const whyChooseUsData = {
    heading: "Why Choose Us For Renovation Services",
    subheading:
      "We understand that every project is unique. That’s why at Supreme Maintenance, we’re dedicated to transforming your space. Our team of skilled professionals offers a wide range of renovation services near you in Dubai tailored to your unique needs. From kitchen and bathroom remodeling to complete villa, apartment, office, and home renovations, we’ll bring your vision to life. We prioritize quality craftsmanship, attention to detail, and customer satisfaction.",
    points: [
      {
        icon: FaTools,
        title: "Expert Technicians",
        // description:
        // "Our handymen are highly skilled and experienced in various home repair tasks, ensuring quality work every time.",
      },
      {
        icon: FaShieldAlt,
        title: "Trustworthy & Reliable",
        // description:
        // "We pride ourselves on building trust with our customers. Our team is background-checked and fully insured.",
      },
      {
        icon: FaRegClock,
        title: "On-Time Service",
        // description:
        // "We value your time. Our handymen arrive on time and complete the job efficiently and within the estimated time frame.",
      },
    ],
  };
  return (
    <div>
      <HeroSectionDynamic
        title="Renovation"
        subtitle="Services"
        backgroundImage="/new.jpeg"
        image="/reno.png"
        buttonText="Call Now"
      />
      <AboutUsDynamic
        title="Renovation Services In Dubai For Residential And Commercial Properties"
        text="At Supreme Renovators & Maintenance Services, we’re committed to transforming your home into a space you’ll love. With our expertise and dedication, we deliver exceptional renovation services that exceed expectations. From modernizing your kitchen to creating a serene bedroom retreat, our team of skilled professionals is ready to bring your vision to life.We use the latest techniques and high-quality materials to ensure long-lasting results. Our attention to detail and commitment to customer satisfaction set us apart. Whether you’re looking for a complete home renovation or a simple room, kitchen, and bathroom remodeling, we’re here to help."
        points={["Trusted Team", "Reliable Work", "Experience Team"]}
        imageSrc="/reno2.png"
        imageAlt="Image of man having all tools in hand"
      />
      <div>
        <h2 className="text-center font-serif text-blue-500 text-3xl font-bold mt-6">
          Renovation Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
          {RenoServices.map((service, index) => (
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
      <h2 className="text-center font-serif text-blue-500 text-3xl font-bold mt-6">
        Our Client Testimonials
      </h2>
      <TestimonialDynamic testimonialData={RenoTestimonials} />
      <div>
        <WhyChooseUs
          heading={whyChooseUsData.heading}
          subheading={whyChooseUsData.subheading}
          points={whyChooseUsData.points}
        />
      </div>
    </div>
  );
};

export default RenovationService;

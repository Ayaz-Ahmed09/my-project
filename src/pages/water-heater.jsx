import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
import TestimonialDynamic from "../components/Sub-Components/TestimonialDynamic";
import { FaTools, FaShieldAlt, FaRegClock } from "react-icons/fa";
import WhyChooseUs from "../components/Sub-Components/WhyChooseUs";
import { useEffect } from "react";
const WaterHeater = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const HeaterService = [
    {
      title: "Blower Motor",
      description:
        "Repair or replace the blower motor to ensure proper air circulation and efficient heating in your water heater.",
      image: "/Blower.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Heating Element",
      description:
        "Replace or repair the heating element to restore optimal heating performance and ensure consistent hot water.",
      image: "/Heating.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Light Element",
      description:
        "Fix or replace the light element for efficient water heating, ensuring a reliable source of hot water every time.",
      image: "/Light.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Gas Safety",
      description:
        "Ensure safety with gas leak detection, repairs, and regular maintenance to keep your water heater functioning safely and efficiently.",
      image: "/Gas.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Heater Installation",
      description:
        "Professional heater installation services ensuring safe, efficient, and reliable heating solutions for your home or office.",
      image: "/installtion.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Tankless Heater Installation",
      description:
        "Expert installation of tankless water heaters for energy-efficient, on-demand hot water solutions.",
      image: "/tankless.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Solar Heater Installation",
      description:
        "Comprehensive heater inspection and testing to ensure optimal performance and safety.",
      image: "/solar.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Heater Testing & Inspections",
      description:
        "Comprehensive heater inspection and testing to ensure optimal performance and safety.",
      image: "/inspection.jpeg",
      callNowLink: "+971569096124",
    },
  ];
  const waterTestimonials = [
    {
      image: "/r2.png",
      name: "Zayd Al-Khalid",
      position: "Customer",
      message:
        "The water heater installation was quick, efficient, and the technician was very professional!",
    },
    {
      image: "/r3.png",
      name: "Fatima Al-Zahrani",
      position: "Customer",
      message:
        "Excellent water heater repair service! My heater is working like new again, thanks to their expertise.",
    },
    {
      image: "/r23.png",
      name: "Omar Al-Hashimi",
      position: "Customer",
      message:
        "I had an issue with my water heater, and the team fixed it swiftly and with minimal disruption to my day.",
    },
    {
      image: "/r22.png",
      name: "Rashid",
      position: "Customer",
      message:
        "Great service for our water heater repair, the team was knowledgeable, and the price was very reasonable!",
    },
  ];

  const whyChooseUsData = {
    heading: "Why Choose Us For Water Heater Services",
    subheading:
      "Choose us for expert water heater services in Dubai. We offer reliable installation, prompt repairs, and professional replacements for all types of water heaters. Our skilled technicians prioritize customer satisfaction and ensure your water heater operates safely and efficiently. Contact us today for a free quote.",
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
        title="WaterHeater At Your"
        subtitle="Services"
        backgroundImage="/new.jpeg"
        image="/H1.png"
        buttonText="Call Now"
      />
      <AboutUsDynamic
        title="Best Water Heater Repairing And Installation Service In Dubai"
        text="Experience the comfort of reliable hot water with our professional water heater installation and repair services in Dubai. Whether you need a new water heater installed, or your existing unit requires repair, our expert technicians have the skills and experience to handle it all. We specialize in installing and repairing all types of water heaters, including electric, gas, and tankless models.
        Our services include installation, repair, maintenance, and replacement, ensuring your water heater operates efficiently and safely. We prioritize customer satisfaction and offer competitive pricing, making us your trusted partner for all your water heater needs in Dubai."
        imageSrc="/H2.png"
        imageAlt="Image of man having all tools in hand"
      />
      <div>
        <h2 className="text-center text-3xl font-bold mt-6">
          Our Water Heater Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
          {HeaterService.map((service, index) => (
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
      <TestimonialDynamic testimonialData={waterTestimonials} />
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

export default WaterHeater;

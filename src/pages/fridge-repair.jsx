import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
import TestimonialDynamic from "../components/Sub-Components/TestimonialDynamic";
import { FaTools, FaShieldAlt, FaRegClock } from "react-icons/fa";
import WhyChooseUs from "../components/Sub-Components/WhyChooseUs";
const FridgeRepair = () => {
  const FridgeService = [
    {
      title: "Fridge compressor ",
      description:
        "Is your fridge not cooling? Our expert technicians specialize in fridge compressor repair, diagnosing and fixing issues quickly to restore your refrigerator’s cooling efficiency.",
      image: "/fc.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Condenser Coils",
      description:
        " Dirty condenser coils lower cooling efficiency and raise energy bills. We expertly clean and repair coils for optimal fridge performance.",
      image: "/cc.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Door Gaskets",
      description:
        "s your fridge door seal damaged? This can lead to food spoilage and higher energy bills. We provide quick and efficient door gasket replacement services.",
      image: "/fd.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Evaporator coils & Fans",
      description:
        "For proper cooling, your fridge needs a functioning evaporator coil and fan. We offer expert inspection, cleaning, repair, and replacement services for these essential components.",
      image: "/ecf.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Gas Refill ",
      description:
        "Is your refrigerator not cooling sufficiently? It may need refrigerant recharging (gas refilling). We offer professional refrigerant recharging services to restore optimal cooling performance.",
      image: "/gas.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Thermostat",
      description:
        "Is your refrigerator too warm or too cold? A faulty thermostat could be the problem. We diagnose and replace refrigerator thermostats to ensure accurate temperature control.",
      image: "/ft.jpeg",
      callNowLink: "+971569096124",
    },
  ];
  const FridgeTestimonials = [
    {
      image: "/r16.png",
      name: "Omar Al-Mansoori",
      position: "Customer",
      message:
        "The refrigerator repair service was quick and efficient, and my fridge is as good as new now!",
    },
    {
      image: "/r17.png",
      name: "Mona Rashid",
      position: "Customer",
      message:
        "I was impressed with the professionalism and skill of the technician who fixed my fridge in no time!",
    },
    {
      image: "/r28.png",
      name: "Sami Juma",
      position: "Customer",
      message:
        "Excellent fridge repair service; my fridge has been running perfectly ever since!",
    },
    {
      image: "/r19.png",
      name: "Noura Al-Farsi",
      position: "Customer",
      message:
        "The team did an amazing job fixing my refrigerator, and the service was hassle-free!",
    },
  ];

  const whyChooseUsData = {
    heading: "Why Choose Us For Fridge Repairing Services",
    subheading:
      "When your refrigerator breaks down, you need a reliable and efficient repair service you can trust. Here’s why we’re the right choice for all your refrigerator repair needs: We use the latest diagnostic equipment and repair tools to quickly and accurately identify and fix any refrigerator issue. This means faster repairs and less disruption to your daily routine. This protects your investment and prevents future breakdowns.",
    points: [
      {
        icon: FaTools,
        title: "Expert Technicians",
        description:
          "Our handymen are highly skilled and experienced in various home repair tasks, ensuring quality work every time.",
      },
      {
        icon: FaShieldAlt,
        title: "Trustworthy & Reliable",
        description:
          "We pride ourselves on building trust with our customers. Our team is background-checked and fully insured.",
      },
      {
        icon: FaRegClock,
        title: "On-Time Service",
        description:
          "We value your time. Our handymen arrive on time and complete the job efficiently and within the estimated time frame.",
      },
    ],
  };
  return (
    <div>
      <HeroSectionDynamic
        title="Fridge Machinic At Your"
        subtitle="Services"
        backgroundImage="/new.jpeg"
        image="/fridge1.png"
        buttonText="Book Now"
      />
      <AboutUsDynamic
        title="Best Refrigerator Repairing Services Near You In Dubai"
        text="Looking for a professional refrigerator repair service near you in Dubai? Look no further than Fix It Fast Maintenance. We specialize in providing top-notch fridge repair solutions tailored to your specific needs. We offer the best refrigerator repair services in Dubai, whether you’re facing cooling issues, leaks, noise problems, or any other malfunctions. Our technicians are highly trained professionals ready to handle any refrigerator repair job, no matter how big or small.
         10 years Experience
         Licensed Company
         Certified Technicians
         Free Estimation
         Quality Work Guaranteed
         Reasonable Cost"
        imageSrc="/fridge2.png"
        imageAlt="Image of man having all tools in hand"
      />
      <div>
        <h2 className="text-center font-serif text-blue-500 text-3xl font-bold mt-6">
          Refrigerator Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {FridgeService.map((service, index) => (
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
        Our Testimonials
      </h2>
      <TestimonialDynamic testimonialData={FridgeTestimonials} />
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

export default FridgeRepair;

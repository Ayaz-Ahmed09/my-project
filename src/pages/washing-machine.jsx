import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
import TestimonialDynamic from "../components/Sub-Components/TestimonialDynamic";
import { FaTools, FaShieldAlt, FaRegClock } from "react-icons/fa";
import WhyChooseUs from "../components/Sub-Components/WhyChooseUs";
import { useEffect } from "react";
const Washingmechine = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const WashingService = [
    {
      title: "Baring ",
      description:
        "Is your washing machine making excessive noise or vibrating excessively? Worn bearings could be the cause. We provide quick and efficient bearing replacement services.",
      image: "/baring.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Belt repair ",
      description:
        "If your washing machine drum isn’t turning, a worn or broken belt is often the cause. We offer professional belt replacement services to get your washer spinning again.",
      image: "/Belt.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Door Fixing",
      description:
        "A properly functioning washing machine door is essential for effective and leak-free washing. We offer expert inspection, repair, and replacement services for all door-related issues.",
      image: "/wdr.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Drum Fixing",
      description:
        "A damaged washing machine drum can affect washing performance and potentially damage clothes. We expertly repair and replace drums for optimal washing results.",
      image: "/DrumRepair.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Motor repair",
      description:
        "Is your washing machine not spinning? Our expert technicians specialize in washing machine motor repair and replacement, quickly restoring your washer’s functionality.",
      image: "/Motor.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Pump repair",
      description:
        "A properly functioning washing machine pump is essential to prevent water damage and ensure efficient draining. We offer expert inspection, repair, and replacement services for all pump-related issues.",
      image: "/Pump.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Timer repair",
      description:
        "For strengthening your foundation and adding timeless beauty to your home, trust our expert installations and repairs.",
      image: "/timing.jpeg",
      callNowLink: "+971569096124",
    },
  ];
  const WashingTestimonials = [
    {
      image: "/r11.png",
      name: "Omar Khaled",
      position: "Customer",
      message:
        "Supreme Maintenance fixed my washing machine issues in no time and at a great price – highly recommended!",
    },
    {
      image: "/r10.png",
      name: "Maya Al-Mansoor",
      position: "Customer",
      message:
        "The team quickly diagnosed and repaired my washing machine – it works like new now!",
    },
    {
      image: "/r9.png",
      name: "Zayd Al-Fahad",
      position: "Customer",
      message:
        "Impressive washing machine repair service! Fast, professional, and the price was reasonable.",
    },
    {
      image: "/r12.png",
      name: "Laila Al-Sayed",
      position: "Customer",
      message:
        "The washing machine repair was flawless – quick service and my machine is running smoothly again.",
    },
  ];

  const whyChooseUsData = {
    heading: "Why Choose Us For Washing Machine Services",
    subheading:
      "A malfunctioning washing machine can throw off your entire week. That’s why you need a repair service that’s fast, reliable, and effective. We use the latest diagnostic tools to quickly identify the issue and the most efficient repair methods to get your washing machine back in action with minimal disruption to your daily life. This also helps prevent future problems, saving you both time and money in the long run.",
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
        title="Washing Machine At Your"
        subtitle="Services"
        backgroundImage="/new.jpeg"
        image="/wmh.png"
        buttonText="Call Now"
      />
      <AboutUsDynamic
        title="Best Washing Machine Fix or Repairing Services Near You In Dubai"
        text="Need a washing machine repair service near you in Dubai? Supreme Maintenance offers top-notch washing machine repair solutions tailored to your needs. Whether it’s not spinning, leaking, making noise, drainage issues and faulty motors to broken belts and more, our highly trained technicians handle all makes and models."
        points={[
          "10 years Experience",
          "Licensed Company",
          "Certified Technicians",
          "Free Estimation",
          "Quality Work Guaranteed",
          "Reasonable Cost",
        ]}
        imageSrc="/wm2.png"
        imageAlt="Image of man having all tools in hand"
      />
      <div>
        <h2 className="text-center font-serif text-blue-500 text-3xl font-bold mt-6">
          Washing Machine Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {WashingService.map((service, index) => (
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
      <TestimonialDynamic testimonialData={WashingTestimonials} />
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

export default Washingmechine;

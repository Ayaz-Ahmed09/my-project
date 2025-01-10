import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import Cards from "../components/Re-useable/Cards";
import TestimonialDynamic from "../components/Sub-Components/TestimonialDynamic";
import { FaTools, FaShieldAlt, FaRegClock, FaPhoneAlt } from "react-icons/fa";
import WhyChooseUs from "../components/Sub-Components/WhyChooseUs";
import { useEffect } from "react";
import Counter from "../components/Re-useable/Counter";
import ContactUs from "../components/ConatctUs";
const HomeAppliance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const HomeService = [
    {
      name: "Dishwasher",
      description:
        "Get your dishwasher working like new with our expert repair services, ensuring efficient cleaning and optimal performance.",
      link: "/home-appliance/dishwasher-reparing",
      image: "/Dish1.jpeg",
      callNowLink: "+971569096124",
    },
    {
      name: "Water Heater",
      description:
        "Ensure a steady supply of hot water with our water heater repair services, fixing issues like leaks, heating problems, or malfunctions.",
      link: "/plumbing-services/water-heater",
      image: "/waterH.jpeg",
      callNowLink: "+971569096124",
    },
    {
      name: "Washing Machine",
      description:
        "Restore your washing machine to full functionality with our expert repairs, solving problems from water drainage to motor issues.",
      link: "/home-appliance/washing-machine",
      image: "/Washing.jpeg",
      callNowLink: "+971569096124",
    },
    {
      name: "Refrigerator",
      description:
        "Keep your food fresh with our professional refrigerator repair services, fixing cooling issues, leaks, and other appliance malfunctions.",
      link: "/home-appliance/refrigerator-repair",
      image: "/fridge.jpg",
      callNowLink: "+971569096124",
    },
  ];
  const HomeTestimonials = [
    {
      image: "/r11.png",
      name: "Ahmed Al-Farsi",
      position: "Customer",
      message:
        "My dishwasher broke down just before a big family gathering, but Supreme's team arrived quickly and fixed it in no time. The service was efficient, and my dishwasher works like new again!",
    },
    {
      image: "/r10.png",
      name: "Hassan",
      position: "Customer",
      message:
        "I had a refrigerator issue where it stopped cooling. Supreme's technician diagnosed the problem right away and had it repaired in no time. Excellent service, and my fridge is back to working perfectly!",
    },
    {
      image: "/r9.png",
      name: "Faisal Al-Mansoori",
      position: "Customer",
      message:
        "I was having trouble with my water heater, and the Supreme team came to the rescue. They identified the issue quickly and provided a fast and effective repair. I’m very happy with their work!",
    },
    {
      image: "/r12.png",
      name: "Shamsi",
      position: "Customer",
      message:
        "My washing machine had a strange noise and stopped spinning. I called Supreme, and their technician arrived on time, fixed the issue, and explained everything clearly. Now my washing machine is working like a charm!",
    },
  ];

  const whyChooseUsData = {
    heading: "Why Choose Us For Home Appliance Services",
    subheading:
      "Choose us for the best home appliance repair service in Dubai and experience the difference. We prioritize customer satisfaction above all else, offering prompt and reliable service for all your major appliances including washing machines, water heaters, refrigerators, and dishwashers. Our team of highly skilled and certified technicians possess in-depth knowledge and expertise in repairing all major brands, ensuring quick and effective solutions to any appliance issue. We use genuine parts and employ the latest repair techniques to guarantee lasting results. With competitive pricing, transparent service quotes, and a commitment to customer satisfaction, we strive to provide the best possible value and an exceptional service experience that exceeds your expectations.",
    points: [
      {
        icon: FaTools,
        title: "Expert Technicians",
      },
      {
        icon: FaShieldAlt,
        title: "Trustworthy & Reliable",
      },
      {
        icon: FaRegClock,
        title: "On-Time Service",
      },
      {
        icon: FaPhoneAlt,
        title: "24 Hours Services",
      },
    ],
  };
  return (
    <>
      <title> Best Home Appliances Repairing Service In Dubai</title>
      <div>
        <HeroSectionDynamic
          title="Home Appliance"
          subtitle="Services"
          backgroundImage="/new.jpeg"
          image="/h1.png"
          buttonText="Call Now"
        />
        <AboutUsDynamic
          title="Cost-Effective Home Appliance Repairing Service In Dubai"
          text="With years of experience and a commitment to customer satisfaction, we are the trusted choice for home appliance repairs in Dubai. Our team of expert technicians possesses in-depth knowledge of various appliance brands and models, enabling them to accurately diagnose and resolve a wide range of issues. We utilize the latest tools and techniques to ensure efficient and effective repairs, backed by a guarantee of quality workmanship."
          // points={["10 years of experience", "Trusted Team"]}
          imageSrc="/h2.png"
          imageAlt="Image of man having all tools in hand"
        />
        <div>
          <Counter services={4} experience={10} satisfiedClients={500} />
        </div>
        <div>
          <h2 className="text-center text-3xl font-serif text-blue-500 font-bold mt-6">
            Our Home Appliance Repairing Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
            {HomeService.map((service, index) => (
              <Cards
                key={index}
                title={service.name}
                description={service.description}
                viewDetailLink={service.link}
                image={service.image}
                callNowLink={service.callNowLink}
              />
            ))}
          </div>
        </div>
        <h2 className="text-center font-serif text-blue-500 text-3xl font-bold mt-6">
          Our Client Testimonials
        </h2>
        <TestimonialDynamic testimonialData={HomeTestimonials} />
        <div>
          <WhyChooseUs
            heading={whyChooseUsData.heading}
            subheading={whyChooseUsData.subheading}
            points={whyChooseUsData.points}
          />
        </div>
        <div>
          <ContactUs />
        </div>
      </div>
    </>
  );
};

export default HomeAppliance;

import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import Cards from "../components/Re-useable/Cards";
import TestimonialDynamic from "../components/Sub-Components/TestimonialDynamic";
import { FaTools, FaShieldAlt, FaRegClock } from "react-icons/fa";
import WhyChooseUs from "../components/Sub-Components/WhyChooseUs";
import { useEffect } from "react";
const HomeAppliance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const HomeService = [
    {
      name: "Dishwasher",
      description:
        "Get your dishwasher working like new with our expert repair services, ensuring efficient cleaning and optimal performance.",
      link: "/home-appliance/dishwasher-repairing",
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
        "I had a plumbing issue that needed urgent attention, and Supreme maintenance team responded quickly and professionally. The work was done perfectly, and they even cleaned up afterward. Highly recommend!",
    },
    {
      image: "/r10.png",
      name: "Layla Hassan",
      position: "Customer",
      message:
        "The handyman service was outstanding. From fixing my kitchen sink to installing new shelves in my living room, everything was done with attention to detail. I'm very happy with the quality and speed of the service.",
    },
    {
      image: "/r9.png",
      name: "Faisal Al-Mansoori",
      position: "Customer",
      message:
        "I needed some electrical work done in my apartment, and I couldn't be more impressed with Supreme team. They arrived on time, diagnosed the issue right away, and fixed it efficiently. Exceptional service, will definitely call them again!",
    },
    {
      image: "/r12.png",
      name: "Shamsi",
      position: "Customer",
      message:
        "I had an issue with a broken door and a leaking tap in my villa, and Supreme's handyman was at my place in no time. He fixed both issues quickly, and the pricing was very reasonable for the quality of service. I'm a loyal customer now!",
    },
  ];
  const whyChooseUsData = {
    heading: "Why Choose Us For Home Appliance Services",
    subheading:
      "Choose us for the best home appliance repair service in Dubai and experience the difference. We prioritize customer satisfaction above all else, offering prompt and reliable service for all your major appliances including washing machines, water heaters, refrigerators, and dishwashers. Our team of highly skilled and certified technicians possess in-depth knowledge and expertise in repairing all major brands, ensuring quick and effective solutions to any appliance issue. ",
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
          points={["10 years of experience", "Trusted Team"]}
          imageSrc="/h2.png"
          imageAlt="Image of man having all tools in hand"
        />
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
      </div>
    </>
  );
};

export default HomeAppliance;

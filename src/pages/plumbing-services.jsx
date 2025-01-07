// import React from "react";
import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
import TestimonialDynamic from "../components/Sub-Components/TestimonialDynamic";
import { FaTools, FaShieldAlt, FaRegClock } from "react-icons/fa";
import WhyChooseUs from "../components/Sub-Components/WhyChooseUs";
import { useEffect } from "react";
const PlumbingService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const PlumberServices = [
    {
      title: "Sanitary Fitting",
      description:
        "Upgrade your space now with expert installation and repair of toilets, sinks, and showers. Call for optimal functionality and sanitation.",
      image: "/santry.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Water Leakage Repair",
      description:
        "Leaky pipes? Don’t wait! Get a swift water leakage repair service in Dubai now to prevent further damage. Call us for quick solutions!",
      image: "/leakage.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Water Tank Cleaning",
      description:
        "From overhead to underground tanks, rely on us for top-notch water tank cleaning service in Dubai to ensure safety & hygienic living. So, call us now! ",
      image: "/wt.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Water Pump Repair",
      description:
        "From water pump installation to its maintenance and repair in Dubai, hire our expert plumbers to ensure efficient water circulation.",
      image: "/waterP.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Bath Tub Installation",
      description:
        " From handling bathtub installation, and repair to maintenance, hire our experts to ensure its functionality for well-draining tubs.",
      image: "/bath.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Water Heater",
      description:
        "Ensure a steady supply of hot water with our water heater repair services, fixing issues like leaks, heating problems, or malfunctions.",
      // link: "/plumbing-services/water-heater",
      image: "/waterH.jpeg",
      callNowLink: "+971569096124",
    },
  ];
  const PlumberTestimonials = [
    {
      image: "/r17.png",
      name: "Omar Al-Khalid",
      position: "Customer",
      message:
        "Impressed with the plumber's professionalism; they fixed the issue quickly and cleaned up afterward!",
    },
    {
      image: "/r16.png",
      name: "Karim",
      position: "Customer",
      message:
        "Outstanding plumbing service, from fixing the sink to installing pipes—efficient and detail-oriented!",
    },
    {
      image: "/r13.png",
      name: "Yasir Al-Fayed",
      position: "Customer",
      message:
        "Had a serious leak, but the team arrived quickly and resolved it efficiently—great service!",
    },
    {
      image: "/r14.png",
      name: "Dalia Saeed",
      position: "Customer",
      message:
        "Plumber fixed my water heater and faucet quickly, and the service was both friendly and affordable!",
    },
  ];

  const whyChooseUsData = {
    heading: "Why Choose Us For Plumbing Services ",
    subheading:
      "Our team goes beyond basic fixes, delivering the best plumbing solutions tailored to your needs. We use high-quality materials and meticulous attention to detail to ensure perfect results and long-lasting installations. We prioritize clear communication, fair pricing, and exceeding your expectations. Experience prompt and reliable service with one of our technicians arriving at your doorstep in no time. Choose The Supreme Maintenance for a superior plumbing experience in Dubai.",
    points: [
      {
        icon: FaTools,
        title: "Expert Technicians",
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
        // "We value your time. Our Plumber arrive on time and complete the job efficiently and within the estimated time frame.",
      },
    ],
  };
  return (
    <div>
      <HeroSectionDynamic
        title="Plumber At Your"
        subtitle=" Services"
        backgroundImage="/new.jpeg"
        image="/phb.png"
        buttonText="Call Now"
      />
      <div>
        <AboutUsDynamic
          title="Professional Plumbing Services Near You In Dubai"
          text="Finding a reliable plumber near you in Dubai can be a time-consuming task. You need someone trustworthy who can handle a variety of plumbing issues efficiently and professionally. Look no further than The Supreme Maintenance. We are your trusted experts for all your plumbing needs, from fixing those annoying leaks and unclogging stubborn drains to installing new fixtures like sinks, toilets, and showers, and even connecting major appliances like washing machines and dishwashers.
Our certified plumbers possess the skills and experience to handle any plumbing issue, big or small. We understand the importance of a smoothly functioning plumbing system in your home and strive to provide prompt and efficient service to minimize disruption to your daily routine.

Choose The Supreme Maintenance for dependable, professional, and efficient plumbing services. Contact us today to schedule your appointment and experience the best in plumbing care. We are available to assist you with all your plumbing needs, from minor repairs to major installations."
          points={[
            "10 years Experience",
            "Licensed Company",
            "Certified Plumbers",
            "Free Estimation",
            "Quality Work Guaranteed",
            "Affordable Cost",
          ]}
          imageSrc="/p2.png"
          imageAlt="Image of man having all tools in hand"
        />
      </div>
      <div>
        <h2 className="text-center text-3xl font-serif text-blue-500 font-bold mt-6">
          Our Plumbing Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
          {PlumberServices.map((service, index) => (
            <SubCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              callNowLink={service.callNowLink}
              viewDetailsLink={service.viewDetailsLink}
            />
          ))}
        </div>
      </div>
      <h2 className="text-center text-3xl font-serif text-blue-500 font-bold mt-6">
        Our Client Testimonial
      </h2>
      <TestimonialDynamic testimonialData={PlumberTestimonials} />
      <div>
        <WhyChooseUs
          heading={whyChooseUsData.heading}
          subheading={whyChooseUsData.subheading}
          points={whyChooseUsData.points}
        />
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default PlumbingService;

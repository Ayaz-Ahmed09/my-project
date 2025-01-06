import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
import TestimonialDynamic from "../components/Sub-Components/TestimonialDynamic";
import { FaTools, FaShieldAlt, FaRegClock } from "react-icons/fa";
import WhyChooseUs from "../components/Sub-Components/WhyChooseUs";
const PoolMaintenance = () => {
  const PoolService = [
    {
      title: "Regular Cleaning",
      description:
        "From addressing debris buildup to maintaining pool clarity and hygiene, hire our experts to keep your pool pristine.",
      image: "/rc.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Chemical Balancing",
      description:
        " From correcting pH imbalances to ensuring balanced chemicals, book our expert services for safe, clear water.",
      image: "/chemical.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Skimmer & Pump Basket Cleaning",
      description:
        "From optimizing water flow to clearing debris & preventing clogs, hire our experts to do it.",
      image: "/s.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Filter Cleaning",
      description:
        "Hire our experts to eliminate blockages to maintain filtration efficiency and water clarity. Book our cleaning service now!",
      image: "/filter.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Tile Scrubbing",
      description:
        "Restore the site aesthetics by removing grime & prevent damage. Hire our experts & get best tile scrubbing service now!",
      image: "/wc.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Equipment Inspection",
      description:
        " Schedule an inspection to detect issues early to prevent costly repairs and ensure the operational efficiency of pool.",
      image: "/equ.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Water Quality Testing",
      description:
        "Book our water quality testing service to maintain the safe swimming conditions by identifying particles in it.",
      image: "/wq.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Vacuuming",
      description:
        "Remove dirt & debris to maintain a clean pool floor & prevent algae growth. Hire our experts for vacuuming today.",
      image: "/Vacum.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Brushing",
      description:
        "To prevent algae buildup and maintain a smooth pool surface, hire our experts to maintain a pristine pool. Book now!",
      image: "/burshing.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Backwash and Rinse",
      description:
        "Maintain water clarity & filtration efficiency by clearing filters. Book your pool backwash service & experience cleanliness today!",
      image: "/backwash.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Chemical Shock Treatment",
      description:
        "Eliminate bacteria and algae to get clean water. Request a chemical shock treatment today & let our experts ensure your safety.",
      image: "/chemical.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Winterization Services",
      description:
        "Protect your pool from cold weather damage and keep it functional during this season. Schedule your appointment today!",
      image: "/winter.jpeg",
      callNowLink: "+971569096124",
    },
  ];
  const poolTestimonials = [
    {
      image: "/r30.png",
      name: "Rajiv Kumar",
      position: "Customer",
      message:
        "The pool maintenance team was excellent! They kept my pool clean and sparkling all year round. I’m extremely satisfied with their services.",
    },
    {
      image: "/r31.png",
      name: "Sophia Williams",
      position: "Customer",
      message:
        "Supreme did a fantastic job with my pool cleaning and upkeep. Their attention to detail is unmatched, and my pool has never looked better!",
    },
    {
      image: "/r12.png",
      name: "Elias Cruz",
      position: "Customer",
      message:
        "I’ve had multiple pool services, but none compare to the quality and professionalism of Supreme. They handle everything with care and precision. Highly recommend them!",
    },
  ];

  const whyChooseUsData = {
    heading: "Why Choose Us For Interior & Exterior Painting Service",
    subheading:
      "At Supreme Maintenance, we understand that every painting project is unique. That’s why we offer a wide range of professional interior and exterior painting services for houses, villas, and offices to meet all your needs. Our team of skilled painters is committed to delivering top-notch painting solutions.",
    points: [
      {
        icon: FaTools,
        title: "Expert Technicians",
        description:
          "Our plumber are highly skilled and experienced in various home repair tasks, ensuring quality work every time.",
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
          "We value your time. Our Plumber arrive on time and complete the job efficiently and within the estimated time frame.",
      },
    ],
  };
  return (
    <div>
      <HeroSectionDynamic
        title="PoolMaintenance"
        subtitle="Services"
        backgroundImage="/new.jpeg"
        image="/poolh.png"
        buttonText="Book Now"
      />
      <AboutUsDynamic
        title="Home and Building Maintenance Services in Dubai"
        text="We are a full-service building maintenance company specializing in residential, commercial, and commercial/residential mixed-use developments. Our team of experienced professionals and skilled technicians will work tirelessly to ensure your home, office, or commercial space is in top condition."
        imageSrc="/pool2.png"
        imageAlt="Image of man having all tools in hand"
      />
      <div>
        <h1 className="text-center text-3xl font-bold mt-6">
          Pool maintenance Services
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
      <TestimonialDynamic testimonialData={poolTestimonials} />
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

export default PoolMaintenance;

import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
const PoolMaintenance = () => {
  const PoolService = [
    {
      title: "Regular Cleaning",
      description:
        "From addressing debris buildup to maintaining pool clarity and hygiene, hire our experts to keep your pool pristine.",
      image: "/rc.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Chemical Balancing",
      description:
        " From correcting pH imbalances to ensuring balanced chemicals, book our expert services for safe, clear water.",
      image: "/public/socket.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Skimmer & Pump Basket Cleaning",
      description:
        "From optimizing water flow to clearing debris & preventing clogs, hire our experts to do it.",
      image: "/s.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Filter Cleaning",
      description:
        "Hire our experts to eliminate blockages to maintain filtration efficiency and water clarity. Book our cleaning service now!",
      image: "/filter.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Tile Scrubbing",
      description:
        "Restore the site aesthetics by removing grime & prevent damage. Hire our experts & get best tile scrubbing service now!",
      image: "/wc.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Equipment Inspection",
      description:
        " Schedule an inspection to detect issues early to prevent costly repairs and ensure the operational efficiency of pool.",
      image: "/equ.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Water Quality Testing",
      description:
        "Book our water quality testing service to maintain the safe swimming conditions by identifying particles in it.",
      image: "/wq.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Vacuuming",
      description:
        "Remove dirt & debris to maintain a clean pool floor & prevent algae growth. Hire our experts for vacuuming today.",
      image: "/Vacum.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Brushing",
      description:
        "To prevent algae buildup and maintain a smooth pool surface, hire our experts to maintain a pristine pool. Book now!",
      image: "/burshing.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Backwash and Rinse",
      description:
        "Maintain water clarity & filtration efficiency by clearing filters. Book your pool backwash service & experience cleanliness today!",
      image: "/backwash.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Chemical Shock Treatment",
      description:
        "Eliminate bacteria and algae to get clean water. Request a chemical shock treatment today & let our experts ensure your safety.",
      image: "/chemical.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Winterization Services",
      description:
        "Protect your pool from cold weather damage and keep it functional during this season. Schedule your appointment today!",
      image: "/winter.jpeg",
      callNowLink: "+923096194974",
    },
  ];
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
          Renovation Services
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
    </div>
  );
};

export default PoolMaintenance;

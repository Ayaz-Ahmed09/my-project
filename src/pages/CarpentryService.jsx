import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
const CarpentryService = () => {
  const CarpenterService = [
    {
      title: "Furniture Assembly",
      description:
        "From crafting bespoke or custom furniture to assembling pieces, we provide solutions customized to your requirements.",
      image: "/fa1.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Partition Making",
      description:
        " Choose us for wooden partition making to effortlessly enhance style, privacy, and functionality in your home or office.",
      image: "/wp.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Parquet Floor Making",
      description:
        "Experience timeless elegance with our custom parquet floors, crafted with precision and unique designs.",
      image: "/wf.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Door Repairing",
      description:
        " We repair everything from door squeaks to cracks and chipped wood, seamlessly bringing back function and charm.",
      image: "/door.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Floor Beams",
      description:
        "For strengthening your foundation and adding timeless beauty to your home, trust our expert installations and repairs.",
      image: "/fb1.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Wooden Wall Installation",
      description:
        " Trust our expertise in wooden wall installations and repairs to bring calmness and natural aesthetics to your home.",
      image: "/ww.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Roofing Walls",
      description:
        "Our carpenters provide roofing solutions that boost your home’s aesthetic and structural integrity, ensuring lasting results.",
      image: "/wr.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Wood Stairs",
      description:
        "We deliver custom wooden stair installation and repair services in Dubai, combining premium aesthetics with lasting durability.",
      image: "/ws.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Wardrobe Installation & Repairing",
      description:
        "iLet our expert team transform your space with stylish and functional wardrobe solutions. From installation to repair, we’ve got you covered.",
      image: "/wa.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Kitchen Cabinet Installation",
      description:
        "We deliver custom kitchen cabinet installation and repair services in Dubai, combining premium aesthetics with lasting durability.",
      image: "/wkc.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Plywood Work",
      description:
        "Our experienced carpenters deliver custom plywood solutions that are both durable and perfectly suited to your needs.",
      image: "/pw.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Maintenance Service",
      description:
        "We provide expert wooden repairs and maintenance to ensure the long-term protection of your property.",
      image: "/main.jpeg",
      callNowLink: "+923096194974",
    },
  ];
  return (
    <div>
      <HeroSectionDynamic
        title="Carpenter At Your"
        subtitle="Services"
        backgroundImage="/new.jpeg"
        image="/ch.png"
        buttonText="Book Now"
      />
      <AboutUsDynamic
        title="Home and Building Maintenance Services in Dubai"
        text="We are a full-service building maintenance company specializing in residential, commercial, and commercial/residential mixed-use developments. Our team of experienced professionals and skilled technicians will work tirelessly to ensure your home, office, or commercial space is in top condition."
        imageSrc="/ch2.png"
        imageAlt="Image of man having all tools in hand"
      />
      <div>
        <h1 className="text-center text-3xl font-bold mt-6">
          Renovation Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {CarpenterService.map((service, index) => (
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

export default CarpentryService;

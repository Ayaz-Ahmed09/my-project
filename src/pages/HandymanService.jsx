import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
const HandymanService = () => {
  const handymanServices = [
    {
      title: "Renovation",
      description:
        "Our renovators will transform your space into a stunning showcase of quality and style with expert craftsmanship.",
      image: "/win.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Bath Fixing",
      description:
        "Our expert plumbers provide efficient and reliable solutions for all your plumbing challenges. Our skilled technicians tackle even the toughest plumbing issues.",
      image: "/Bath.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Picture Hanging",
      description:
        "Fom removal to installation of large/small frames, our experts guarantee each piece is perfectly positioned to enhance your home or office decor. Call now!.",
      image: "/ph.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "TV Mounting",
      description:
        "From tidying up tangled wires to securely mounting your TV, hire our experts to ensure a seamless and enjoyable entertainment setup. So, book now!",
      image: "/tv.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Fixing Shelves",
      description:
        " Whether it’s organizing clutter or enhancing your decor, hire our team of handyman experts who ensures sturdy and stylish shelf installations in minimal time!",
      image: "/shalve.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Furniture Assembly",
      description:
        " Hire our experts to get the Furniture Assembly Service to put together the furniture pieces that will save you time and hassle promptly.",
      image: "/fa.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Installing Curtains & Binds",
      description:
        " Hire our expert handyman team to ensure perfect curtains fit and style, turning your home into a haven of elegance.",
      image: "/window.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Flooring",
      description:
        " Hire us to repair damaged floors, install new flooring materials like tiles, laminate, or vinyl, and refinish hardwood floors.",
      image: "/floor.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "General Maintenance",
      description:
        " We’ll help repair minor damages, such as drywall holes, loose tiles, squeaky doors, or leaky faucets to maintain your property.",
      image: "/gm.jpeg",
      callNowLink: "+923096194974",
    },
  ];
  return (
    <div>
      <HeroSectionDynamic
        title="Handyman"
        subtitle="Services"
        backgroundImage="/new.jpeg"
        image="/hand.png"
        buttonText="Book Now"
      />
      <div>
        <AboutUsDynamic
          title="Home and Building Maintenance Services in Dubai"
          text="We are a full-service building maintenance company specializing in residential, commercial, and commercial/residential mixed-use developments. Our team of experienced professionals and skilled technicians will work tirelessly to ensure your home, office, or commercial space is in top condition."
          imageSrc="/handban.png"
          imageAlt="Image of man having all tools in hand"
        />
      </div>
      <div>
        <h1 className="text-center text-3xl font-bold mt-6">
          Handyman Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {handymanServices.map((service, index) => (
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

export default HandymanService;

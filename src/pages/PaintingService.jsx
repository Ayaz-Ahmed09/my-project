import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
const PaintingService = () => {
  const PainterService = [
    {
      title: "Interior Painting",
      description:
        "Hire the Finest Interior Painting service in Dubai so that not only you but your house feels clean as well.",
      image: "/ip.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Exterior Painting",
      description:
        "Whether for Commercial or Residential Spaces, let your exterior speak boldly with our exceptional painting service.",
      image: "/ep.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "End Tenancy",
      description:
        "Rent out your property quickly with our top-notch end-of-tenancy painting service in Dubai. Call us now",
      image: "/tp.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Wallpaper Installation",
      description:
        " Our experts can do everything from choosing the best suitable wallpaper design to installation and fixing in Dubai.",
      image: "/wallp.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Villa Painting",
      description:
        "Be ensure that your villa makes a striking first impression. Opt for the finest service in Dubai to avoid worn-off paints.",
      image: "/vp.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Apartment Painting",
      description:
        "Let the small places be transformed into  something beautiful with the best Apartment painter service in Dubai.",
      image: "/ap.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Office Painting",
      description:
        "Painted walls play a very chief role in maintaining your space. Get your office walls painted from the best painting service in Dubai.",
      image: "/op.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Wall Staining",
      description:
        "Our experts boost the aesthetics of your home and workplace with our professional wall staining service in Dubai.",
      image: "/wp1.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Drywall Repair",
      description:
        "We have a team of professional handymen to help you provide the best drywall repair solutions for both residential and commercial spaces.",
      image: "/dwp.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Door Painting",
      description:
        "Choose premier door painting service in Dubai to ensure your doors are free from worn-off paints and radiate elegance at every entrance.",
      image: "/dp.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "House Painting",
      description:
        " Hire our house painting service in Dubai to steer clear of faded, worn-off walls, ensuring vibrant, long-lasting colors for your house.",
      image: "/hp.jpeg",
      callNowLink: "+923096194974",
    },
    {
      title: "Best Painting Company",
      description:
        "Don’t settle for worn-off paints when you can elevate your property with precision and expertise of the best painting company.",
      image: "/main.jpeg",
      callNowLink: "+923096194974",
    },
  ];
  return (
    <div>
      <HeroSectionDynamic
        title="Painter At Your"
        subtitle="Services"
        backgroundImage="/new.jpeg"
        image="/painter.png"
        buttonText="Book Now"
      />
      <AboutUsDynamic
        title="Home and Building Maintenance Services in Dubai"
        text="We are a full-service building maintenance company specializing in residential, commercial, and commercial/residential mixed-use developments. Our team of experienced professionals and skilled technicians will work tirelessly to ensure your home, office, or commercial space is in top condition."
        imageSrc="/pf.png"
        imageAlt="Image of man having all tools in hand"
      />
      <div>
        <h1 className="text-center text-3xl font-bold mt-6">
          Renovation Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {PainterService.map((service, index) => (
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

export default PaintingService;

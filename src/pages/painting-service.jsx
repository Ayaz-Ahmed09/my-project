import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
import TestimonialDynamic from "../components/Sub-Components/TestimonialDynamic";
import { FaTools, FaShieldAlt, FaRegClock } from "react-icons/fa";
import WhyChooseUs from "../components/Sub-Components/WhyChooseUs";
import { useEffect } from "react";
const PaintingService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const PainterService = [
    {
      title: "Interior Painting",
      description:
        "Hire the Finest Interior Painting service in Dubai so that not only you but your house feels clean as well.",
      image: "/ip.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Exterior Painting",
      description:
        "Whether for Commercial or Residential Spaces, let your exterior speak boldly with our exceptional painting service.",
      image: "/ep.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "End Tenancy",
      description:
        "Rent out your property quickly with our top-notch end-of-tenancy painting service in Dubai. Call us now",
      image: "/tp.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Wallpaper Installation",
      description:
        " Our experts can do everything from choosing the best suitable wallpaper design to installation and fixing in Dubai.",
      image: "/wallp.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Villa Painting",
      description:
        "Be ensure that your villa makes a striking first impression. Opt for the finest service in Dubai to avoid worn-off paints.",
      image: "/vp.jpeg",
      callNowLink: "+971569096124",
      viewDetailsLink: "/painting-service/villa-painting",
    },
    {
      title: "Apartment Painting",
      description:
        "Let the small places be transformed into  something beautiful with the best Apartment painter service in Dubai.",
      image: "/ap.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Office Painting",
      description:
        "Painted walls play a very chief role in maintaining your space. Get your office walls painted from the best painting service in Dubai.",
      image: "/op.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Wall Staining",
      description:
        "Our experts boost the aesthetics of your home and workplace with our professional wall staining service in Dubai.",
      image: "/wp1.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Drywall Repair",
      description:
        "We have a team of professional handymen to help you provide the best drywall repair solutions for both residential and commercial spaces.",
      image: "/dwp.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Door Painting",
      description:
        "Choose premier door painting service in Dubai to ensure your doors are free from worn-off paints and radiate elegance at every entrance.",
      image: "/dp.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "House Painting",
      description:
        " Hire our house painting service in Dubai to steer clear of faded, worn-off walls, ensuring vibrant, long-lasting colors for your house.",
      image: "/hp.jpeg",
      callNowLink: "+971569096124",
      viewDetailsLink: "/painting-service/house-painting",
    },
    {
      title: "Best Painting Company",
      description:
        "Don’t settle for worn-off paints when you can elevate your property with precision and expertise of the best painting company.",
      image: "/main.jpeg",
      callNowLink: "+971569096124",
    },
  ];
  const PaintingTestimonials = [
    {
      image: "/r30.png",
      name: "Ali Nasir",
      position: "Customer",
      message:
        "The painting service was exceptional, my house looks brand new with flawless walls and vibrant colors!",
    },
    {
      image: "/r31.png",
      name: "Zayed",
      position: "Customer",
      message:
        "I’m thrilled with the quality and precision of the painting work, it’s exactly what I envisioned!",
    },
    {
      image: "/r12.png",
      name: "Hassan Al-Rashid",
      position: "Customer",
      message:
        "The team was professional and quick, and the results exceeded my expectations. Highly recommend!",
    },
  ];

  const whyChooseUsData = {
    heading: " Why Choose Us for Painting Services",
    subheading:
      "At Supreme Maintenance, we understand that every painting project is unique. That’s why we offer a wide range of professional interior and exterior painting services for houses, villas, and offices to meet all your needs. Our team of skilled painters is committed to delivering top-notch painting solutions.",
    points: [
      {
        icon: FaTools,
        title: "Expert Technicians",
        // description:
        // "Our plumber are highly skilled and experienced in various home repair tasks, ensuring quality work every time.",
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
    <>
      <title>Professional Wall Painting Services Near You In Dubai</title>
      <div>
        <HeroSectionDynamic
          title="Painter At Your"
          subtitle="Services"
          backgroundImage="/new.jpeg"
          image="/painter.png"
          buttonText="Call Now"
        />
        <AboutUsDynamic
          title="Best Interior And Exterior Painting Services Near You In Dubai"
          text="Transform your home or business with the best interior and exterior painting services near you in Dubai. We offer a wide range of professional painting solutions to enhance your property's aesthetics and value. 
          Cost-Effective Interior & Exterior Paint Service In Dubai
          
          Our expert painters utilize high-quality paints and employ meticulous techniques to deliver flawless finishes. Whether you're looking for a fresh coat of paint for your living room, a vibrant exterior makeover, or intricate decorative finishes, we have the expertise to bring your vision to life.
          We prioritize customer satisfaction and ensure a smooth and hassle-free painting experience. Contact us today for a free quote and let us transform your space."
          points={[
            "10 years Of Experience",
            "Licensed Company",
            "Certified & expert Painters",
            "Free Estimation",
            "Quality Work Guaranteed",
            "Premium-Quality Paint",
          ]}
          imageSrc="/pf.png"
          imageAlt="Image of man having all tools in hand"
        />
        <div>
          <h2 className="text-center text-3xl font-serif text-blue-500 font-bold mt-6">
            Our Painting Services Near You In Dubai
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
            {PainterService.map((service, index) => (
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
        <TestimonialDynamic testimonialData={PaintingTestimonials} />
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

export default PaintingService;

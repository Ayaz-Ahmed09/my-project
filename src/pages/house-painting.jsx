import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
import TestimonialDynamic from "../components/Sub-Components/TestimonialDynamic";
import { FaTools, FaShieldAlt, FaRegClock } from "react-icons/fa";
import WhyChooseUs from "../components/Sub-Components/WhyChooseUs";

const HousePainting = () => {
  const HousePainterService = [
    {
      title: "Interior Painting",
      description:
        "Transform your home with our expert interior painting services for a fresh, clean, and vibrant living space.",
      image: "/interior.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Exterior Painting",
      description:
        "Enhance your property's curb appeal with our high-quality exterior painting, perfect for both residential and commercial spaces.",
      image: "/exterior.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Deck & Fence Painting",
      description:
        "Give your deck and fence a new life with our professional painting services, making your outdoor spaces stand out.",
      image: "/Deck.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Eco-Friendly Paint",
      description:
        "Choose sustainable living with our eco-friendly painting options, ensuring safety and beauty for your home.",
      image: "/eco.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Furniture Painting",
      description:
        "Refresh your furniture with our expert painting services, bringing vibrancy and protection to your valuable pieces.",
      image: "/F.jpeg",
      callNowLink: "+971569096124",
      viewDetailsLink: "/painting-service/villa-painting",
    },
    {
      title: "Specialty Finishes",
      description:
        "Transform your space with unique specialty finishes, creating a distinctive and stylish atmosphere in any room.",
      image: "/special.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Staining & Fixing",
      description:
        "Bring life to your wooden surfaces with our staining and fixing services, adding character and durability to your home.",
      image: "/wall-staing.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Wall Repair & Prep",
      description:
        "Ensure smooth, flawless walls with our repair and prep services before painting, providing the perfect finish for your space.",
      image: "/Wall-repair.jpeg",
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
    heading: "Why Choose Us For Your House Painting Service",
    subheading:
      "We offer a comprehensive range of interior and exterior painting services to meet your specific needs. Whether you're looking for a simple color refresh, a complete room makeover, or intricate decorative finishes, we have the expertise to deliver exceptional results.",
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
    <>
      <title> Professional Home Painting Service In Dubai</title>
      <div>
        <HeroSectionDynamic
          title="HousePainter At Your"
          subtitle="Services"
          backgroundImage="/new.jpeg"
          image="/painter.png"
          buttonText="Book Now"
        />
        <AboutUsDynamic
          title=" House Interior And Exterior Painting Services In Dubai"
          text="Transform your home or business with the best interior and exterior painting services near you in Dubai. We offer a wide range of professional painting solutions to enhance your property's aesthetics and value. 
          Cost-Effective Interior & Exterior Paint Service In Dubai
          10 years Of Experience
          Licensed Company
          Certified & expert Painters
          Free Estimation
          Quality Work Guaranteed
          Premium-Quality Paint
          Our expert painters utilize high-quality paints and employ meticulous techniques to deliver flawless finishes. Whether you're looking for a fresh coat of paint for your living room, a vibrant exterior makeover, or intricate decorative finishes, we have the expertise to bring your vision to life.
          We prioritize customer satisfaction and ensure a smooth and hassle-free painting experience. Contact us today for a free quote and let us transform your space."
          imageSrc="/pf.png"
          imageAlt="Image of man having all tools in hand"
        />
        <div>
          <h2 className="text-center text-3xl font-serif text-blue-500 font-bold mt-6">
            Our Home Painting Services Includes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
            {HousePainterService.map((service, index) => (
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

export default HousePainting;

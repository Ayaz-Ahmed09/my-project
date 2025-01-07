import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
import TestimonialDynamic from "../components/Sub-Components/TestimonialDynamic";
import { FaTools, FaShieldAlt, FaRegClock } from "react-icons/fa";
import WhyChooseUs from "../components/Sub-Components/WhyChooseUs";
import { useEffect } from "react";
const HandymanService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handymanServices = [
    {
      title: "Renovation",
      description:
        "Transform your space with expert renovation services, blending style and quality for a perfect home upgrade.",
      image: "/win.jpeg",
      callNowLink: "+971569096124",
      link: "/renovation-service",
    },
    {
      title: "Plumbing Services",
      description:
        "From leaks to clogs, our expert plumbers provide fast and reliable solutions to keep your plumbing in top shape.",
      image: "/phb.png",
      callNowLink: "+971569096124",
      link: "/plumbing-services",
    },
    {
      title: "Electrical Services",
      description:
        "Ensure your home’s safety and efficiency with our professional electrical services, from repairs to installations.",
      image: "/electrical.jpg",
      callNowLink: "+971569096124",
      link: "/electrical-service",
    },
    {
      title: "Bath Fixing",
      description:
        "Our expert plumbers provide efficient and reliable solutions for all your plumbing challenges. Our skilled technicians tackle even the toughest plumbing issues.",
      image: "/Bath.jpeg",
      callNowLink: "+971569096124",
    },
    // {
    //   title: "Picture Hanging",
    //   description:
    //     "Fom removal to installation of large/small frames, our experts guarantee each piece is perfectly positioned to enhance your home or office decor. Call now!.",
    //   image: "/ph.jpeg",
    //   callNowLink: "+971569096124",
    // },
    {
      title: "TV Mounting",
      description:
        "From tidying up tangled wires to securely mounting your TV, hire our experts to ensure a seamless and enjoyable entertainment setup. So, Call Now!",
      image: "/tv.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Fixing Shelves",
      description:
        " Whether it’s organizing clutter or enhancing your decor, hire our team of handyman experts who ensures sturdy and stylish shelf installations in minimal time!",
      image: "/shalve.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Furniture Assembly",
      description:
        " Hire our experts to get the Furniture Assembly Service to put together the furniture pieces that will save you time and hassle promptly.",
      image: "/fa.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Installing Curtains & Binds",
      description:
        " Hire our expert handyman team to ensure perfect curtains fit and style, turning your home into a haven of elegance.",
      image: "/window.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Flooring",
      description:
        " Hire us to repair damaged floors, install new flooring materials like tiles, laminate, or vinyl, and refinish hardwood floors.",
      image: "/floor.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "General Maintenance",
      description:
        " We’ll help repair minor damages, such as drywall holes, loose tiles, squeaky doors, or leaky faucets to maintain your property.",
      image: "/gm.jpeg",
      callNowLink: "+971569096124",
    },
  ];

  // App Development Testimonial Data
  const HandymanTestimonials = [
    {
      image: "/r20.png",
      name: "Ahmed Al-Farsi",
      position: "Customer",
      message:
        "The handyman team was quick, professional, and fixed my plumbing issue flawlessly.",
    },
    {
      image: "/r10.png",
      name: "Layla Hassan",
      position: "Customer",
      message:
        "From fixing leaks to installing shelves, the handyman service was efficient and top-notch.",
    },
    {
      image: "/r23.png",
      name: "Faisal Al-Mansoori",
      position: "Customer",
      message:
        "The handyman arrived on time and fixed my electrical issues with great precision and speed.",
    },
    {
      image: "/r19.png",
      name: "Shamsi",
      position: "Customer",
      message:
        "Got my broken door and leaking tap fixed quickly, and the service was worth every penny.",
    },
  ];

  // why choose us
  const whyChooseUsData = {
    heading: "Why Choose For Our Handyman Services",
    subheading:
      "We are committed to providing the best handyman services in Dubai with quality, trust, and reliability.",
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
    <div>
      <HeroSectionDynamic
        title="Handyman"
        subtitle="Services"
        backgroundImage="/new.jpeg"
        image="/hand.png"
        buttonText="Call Now"
      />
      <div>
        <AboutUsDynamic
          title="Home and Building Maintenance Services in Dubai"
          text="Looking for a reliable handyman service near you in Dubai? Look no further than Supreme Maintenance. We are your trusted experts in providing exceptional home maintenance solutions tailored to meet your unique needs. Whether you’re dealing with a leaky faucet, need furniture assembly, TV mounting, shelf fixing, picture hanging, or curtain installation, our skilled handymen are here to help."
          imageSrc="/handyman2.png"
          imageAlt="Image of man having all tools in hand"
          points={[
            "Over 10 Years of Experience",
            "Fully Licensed Company",
            "Certified Plumbers",
            "Free Estimation",
            "Quality Work Guaranteed",
            "Affordable and Transparent Pricing",
          ]}
        />
      </div>
      <div>
        <h2 className="text-center font-serif text-blue-500 text-3xl font-bold mt-6">
          Best Handyman Services Near You In Dubai
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
          {handymanServices.map((service, index) => (
            <SubCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              callNowLink={service.callNowLink}
              viewDetailsLink={service.link}
            />
          ))}
        </div>
      </div>
      <h2 className="text-center font-serif text-blue-500 text-3xl font-bold mt-6">
        Our Testimonials About Handyman Services
      </h2>
      <TestimonialDynamic testimonialData={HandymanTestimonials} />
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

export default HandymanService;

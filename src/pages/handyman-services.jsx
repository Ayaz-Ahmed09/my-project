import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
import TestimonialDynamic from "../components/Sub-Components/TestimonialDynamic";
import { FaTools, FaShieldAlt, FaRegClock, FaPhoneAlt } from "react-icons/fa";
import WhyChooseUs from "../components/Sub-Components/WhyChooseUs";
import { useEffect } from "react";
// import DynamicCounter from "../components/Sub-Components/DynamicCounter";
import Counter from "../components/Re-useable/Counter";
import ContactUs from "../components/ConatctUs";
const HandymanService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handymanServices = [
    {
      title: "Renovation",
      description:
        "Transform your space with expert renovation services, blending style and quality for a perfect home upgrade.",
      image: "/reno1.jpg",
      callNowLink: "+971569096124",
      link: "/renovation-service",
    },
    {
      title: "Plumbing Services",
      description:
        "From leaks to clogs, our expert plumbers provide fast and reliable solutions to keep your plumbing in top shape.",
      image: "/pf.jpg",
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
      image: "/b12.jpg",
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
      image: "/tv1.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Fixing Shelves",
      description:
        " Whether it’s organizing clutter or enhancing your decor, hire our team of handyman experts who ensures sturdy and stylish shelf installations in minimal time!",
      image: "/fs.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Furniture Assembly",
      description:
        " Hire our experts to get the Furniture Assembly Service to put together the furniture pieces that will save you time and hassle promptly.",
      image: "/ff.jpg",
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
      image: "/floor.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "General Maintenance",
      description:
        " We’ll help repair minor damages, such as drywall holes, loose tiles, squeaky doors, or leaky faucets to maintain your property.",
      image: "/gm.jpg",
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
      "Simplify your home maintenance with our trusted handyman services. From minor repairs to larger tasks, we handle it all with professionalism and transparent pricing. Let us take care of your to-do list, so you can enjoy your home without the hassle. Our skilled handymen are committed to exceeding your expectations, one project at a time.Contact us today for reliable handyman services in Dubai at competitive rates!",
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
      {
        icon: FaPhoneAlt,
        title: "24 Hours Services",
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
          title=" Best Handyman Services Near You In Dubai"
          text="Looking for a reliable handyman service near you in Dubai? Look no further than Supreme Maintenance. We are your trusted experts in providing exceptional home maintenance solutions tailored to meet your unique needs. Whether you’re dealing with a leaky faucet, need furniture assembly, TV mounting, shelf fixing, picture hanging, or curtain installation, our skilled handymen are here to help."
          imageSrc="/handyman2.png"
          imageAlt="Image of man having all tools in hand"
          points={[
            "10 Years Experience",
            "Licensed Company",
            "Certified Plumbers",
            "Free Estimation",
            "Quality Work ",
            "Affordable Pricing",
          ]}
        />
      </div>
      <div>
        <Counter services={10} experience={10} satisfiedClients={800} />
      </div>
      <div>
        <h2 className="text-center font-serif text-blue-500 text-3xl font-bold mt-6">
          Our Handyman Services In Dubai&apos;s Multiple Locations
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
      <div>{/* <DynamicCounter countersData={counterData} /> */}</div>
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
      <div>
        <ContactUs />
      </div>
    </div>
  );
};

export default HandymanService;

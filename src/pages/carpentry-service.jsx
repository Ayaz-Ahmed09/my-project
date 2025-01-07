import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
import TestimonialDynamic from "../components/Sub-Components/TestimonialDynamic";
import { FaTools, FaShieldAlt, FaRegClock } from "react-icons/fa";
import WhyChooseUs from "../components/Sub-Components/WhyChooseUs";
import { useEffect } from "react";
const CarpentryService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const CarpenterService = [
    {
      title: "Furniture Assembly",
      description:
        "From crafting bespoke or custom furniture to assembling pieces, we provide solutions customized to your requirements.",
      image: "/fa1.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Partition Making",
      description:
        " Choose us for wooden partition making to effortlessly enhance style, privacy, and functionality in your home or office.",
      image: "/wp.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Parquet Floor Making",
      description:
        "Experience timeless elegance with our custom parquet floors, crafted with precision and unique designs.",
      image: "/wf.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Door Repairing",
      description:
        " We repair everything from door squeaks to cracks and chipped wood, seamlessly bringing back function and charm.",
      image: "/door.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Floor Beams",
      description:
        "For strengthening your foundation and adding timeless beauty to your home, trust our expert installations and repairs.",
      image: "/fb1.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Wooden Wall Installation",
      description:
        " Trust our expertise in wooden wall installations and repairs to bring calmness and natural aesthetics to your home.",
      image: "/wall.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Roofing Walls",
      description:
        "Our carpenters provide roofing solutions that boost your home’s aesthetic and structural integrity, ensuring lasting results.",
      image: "/wr.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Wood Stairs",
      description:
        "We deliver custom wooden stair installation and repair services in Dubai, combining premium aesthetics with lasting durability.",
      image: "/ws.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Wardrobe Installation & Repairing",
      description:
        "iLet our expert team transform your space with stylish and functional wardrobe solutions. From installation to repair, we’ve got you covered.",
      image: "/wa.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Kitchen Cabinet Installation",
      description:
        "We deliver custom kitchen cabinet installation and repair services in Dubai, combining premium aesthetics with lasting durability.",
      image: "/kc.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Plywood Work",
      description:
        "Our experienced carpenters deliver custom plywood solutions that are both durable and perfectly suited to your needs.",
      image: "/pw.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Maintenance Service",
      description:
        "We provide expert wooden repairs and maintenance to ensure the long-term protection of your property.",
      image: "/main.jpeg",
      callNowLink: "+971569096124",
    },
  ];
  const CarTestimonials = [
    {
      image: "/r27.png",
      name: "Liam Chen",
      position: "Customer",
      message:
        "The carpenter team did a fantastic job with my bookshelf, finishing ahead of schedule and with top-notch craftsmanship!",
    },
    {
      image: "/r28.png",
      name: "Lewis Smith",
      position: "Customer",
      message:
        "Supreme did a great job installing my kitchen cabinet—clean, efficient, and exactly what I wanted!",
    },
    {
      image: "/r26.png",
      name: "Carlos Moreno",
      position: "Customer",
      message:
        "The carpentry team created beautiful custom furniture for my living room, with great attention to detail.",
    },
    {
      image: "/r23.png",
      name: "Rivera",
      position: "Customer",
      message:
        "The custom wood deck they built for my backyard is amazing! Fantastic quality and done right!",
    },
  ];

  const whyChooseUsData = {
    heading: "Why Choose Us For Your Carpentry Needs",
    subheading:
      "We recognize that every project is unique and tailor our services to meet your specific needs. Our skilled craftsmen combine traditional woodworking techniques with modern technology to deliver exceptional results. We use the finest materials and adhere to industry best practices to ensure the highest quality and attention to detail..",
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
        title="Carpenter At Your"
        subtitle="Services"
        backgroundImage="/new.jpeg"
        image="/ch.png"
        buttonText="Call Now"
      />
      <AboutUsDynamic
        title=" Professional Carpenter Services Near You In Dubai"
        text="Searching for a skilled carpenter near you in Dubai? Look no further than Supreme Maintenance. We are your trusted local experts for all your carpentry needs. Whether you're looking to add a touch of elegance with custom-built furniture, need to repair or install kitchen cabinets, require expert wardrobe installation or repair services, or desire the warmth and beauty of wood flooring, we have you covered.
Professional Carpentry Service In Dubai

Our team of experienced carpenters possesses the skills and expertise to handle a wide range of carpentry projects, from simple repairs and installations to complex custom designs.

Contact us today to schedule a consultation and let us help you bring your carpentry visions to life."
        points={[
          "10 years Experience",
          "Licensed Company",
          "Certified Furniture assembly experts",
          "Free Estimation",
          "Quality Work Guaranteed",
        ]}
        imageSrc="/ch2.png"
        imageAlt="Image of man having all tools in hand"
      />
      <div>
        <h2 className="text-center text-3xl font-serif text-blue-500 font-bold mt-6">
          Our Top-Notch Carpentry Services In Dubai
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
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
      <h2 className="text-center text-3xl font-serif text-blue-500 font-bold mt-6">
        Our Client Testimonials
      </h2>
      <TestimonialDynamic testimonialData={CarTestimonials} />
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

export default CarpentryService;

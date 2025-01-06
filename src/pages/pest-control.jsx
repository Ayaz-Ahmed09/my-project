import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
import TestimonialDynamic from "../components/Sub-Components/TestimonialDynamic";
import { FaTools, FaShieldAlt, FaRegClock } from "react-icons/fa";
import WhyChooseUs from "../components/Sub-Components/WhyChooseUs";
const PestControl = () => {
  const PestService = [
    {
      title: "Bed Pest Control",
      description:
        "Effective treatment to eliminate bed bugs and prevent future infestations.",
      image: "/mos.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Mosquito Control",
      description:
        "Professional mosquito control to keep your environment safe and bite-free.",
      image: "/bed.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Indoor Pest Control",
      description:
        "Comprehensive pest control for a pest-free indoor environment.",
      image: "/outdoor.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Outdoor Pest Control",
      description:
        "Protect your outdoor spaces with effective pest management solutions.",
      image: "/outdoor2.jpeg",
      callNowLink: "+971569096124",
    },
  ];

  const PestTestimonials = [
    {
      image: "/r1.png",
      name: "Ali Nasir",
      position: "Customer",
      message:
        "The pest control service was effective and eliminated all pests quickly and efficiently!",
    },
    {
      image: "/r13.png",
      name: "Zayed",
      position: "Customer",
      message:
        "I’m relieved to finally have pest-free home, thanks to the thorough pest control service!",
    },
    {
      image: "/r30.png",
      name: "Hassan Al-Rashid",
      position: "Customer",
      message:
        "Fast, reliable, and thorough pest control service that gave me peace of mind!",
    },
  ];

  const whyChooseUsData = {
    heading: "Why Choose Us ",
    subheading:
      "Choose us for your pest control needs in Dubai and experience a level of service that goes beyond simply eliminating pests. We prioritize your safety and well-being, utilizing safe and effective methods, including eco-friendly and non-toxic options, to ensure the protection of your family and pets.",
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
        title="Pest Control"
        subtitle="Services"
        backgroundImage="/new.jpeg"
        image="/pestH.png"
        buttonText="Book Now"
      />
      <AboutUsDynamic
        title="Best Pest Control Services Near You In Dubai"
        text="Experience peace of mind with our professional pest control services in Dubai. We effectively eliminate a wide range of pests, including cockroaches, ants, termites, bed bugs, rodents, and more. Our expert technicians utilize safe and effective methods, including eco-friendly and non-toxic options, to ensure the safety of your family and pets.We conduct thorough inspections to identify the root cause of the infestation and implement customized treatment plans to effectively eliminate the problem and prevent future occurrences. With our commitment to customer satisfaction and a focus on providing long-term pest control solutions, you can trust us to keep your home or business pest-free and protect your valuable assets."
        imageSrc="/ph2.png"
        imageAlt="Image of man having all tools in hand"
      />
      <div>
        <h2 className="text-center text-blue-500 font-serif text-3xl font-bold mt-6">
          Our Pest Control Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
          {PestService.map((service, index) => (
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
      <h2 className="text-center text-3xl font-serif font-bold mt-6 text-blue-500">
        Our Client Testimonials
      </h2>
      <TestimonialDynamic testimonialData={PestTestimonials} />
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

export default PestControl;

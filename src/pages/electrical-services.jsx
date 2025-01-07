import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
import TestimonialDynamic from "../components/Sub-Components/TestimonialDynamic";
import { FaTools, FaShieldAlt, FaRegClock } from "react-icons/fa";
import WhyChooseUs from "../components/Sub-Components/WhyChooseUs";
import { useEffect } from "react";
const ElectricalService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ElectricalService = [
    {
      title: "Shot Circuit",
      description:
        "Our 24/7 electricians are ready to quickly fix short circuits and restore power.",
      image: "/Shot.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Socket Installation",
      description:
        " Get professional socket installation services in Dubai to ensure electrical safety and efficiency.",
      image: "/si.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Chandelier Repairing",
      description:
        "From chandelier maintenance to electrical repairs, our experts can tackle a wide range of electrical issues, from simple to complex.",
      image: "/cr.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Tidying Cables",
      description:
        "Transform your cluttered space into a clean and organized environment with our professional cable tidying service.",
      image: "/tidi.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Surge Protection",
      description:
        "Protect your investment in electronics with our cutting-edge surge protection technology.",
      image: "/sp.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Electrical Upgrades",
      description:
        " Upgrade your electrical system to meet modern standards, enhance your home’s safety, and improve energy efficiency.",
      image: "/eu.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Intercom Installation & Fixing",
      description:
        "Don’t let leaky AC ducts ruin your comfort. Call us today to improve your home’s air quality with our AC duct cleaning and repair services.",
      image: "/intercom.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Rewiring Service",
      description:
        "Upgrade your outdated wiring to avoid costly repairs and potential disasters. Don’t wait for an electrical emergency. Call us today for a safety inspection.",
      image: "/cabels.jpg",
      callNowLink: "+971569096124",
    },
  ];
  const electricalTestimonials = [
    {
      image: "/r19.png",
      name: "Samir Al-Hassan",
      position: "Customer",
      message:
        "The Supreme team fixed my wiring issue causing outages quickly and professionally; problem hasn’t occurred again!",
    },
    {
      image: "/r22.png",
      name: "Fayed",
      position: "Customer",
      message:
        "The team installed new lighting and fixed outlets fast, safely, and cleaned up after themselves; highly satisfied!",
    },
    {
      image: "/r-21.png",
      name: "Karim Al-Mansoori",
      position: "Customer",
      message:
        "Supreme did a fantastic job with electrical repairs, on time, efficient, and explained everything; very impressed!",
    },
    {
      image: "/r20.png",
      name: "John Deo",
      position: "Customer",
      message:
        "Supreme's electricians resolved my major electrical issue quickly and professionally; will definitely hire again!",
    },
  ];

  const whyChooseUsData = {
    heading: "Why Choose Us As Dubai's Best Electrical Service Providers",
    subheading:
      "We understand that every electrical project is unique. That's why we offer a wide range of professional services to meet your specific needs. Our team of professionals is committed to delivering superior electrical solutions with precision and expertise. We use only the highest quality materials and adhere to industry best practices to ensure every job is done right. We value clear communication and fair pricing, keeping you informed throughout the entire process. We offer prompt service, including emergency electrical services to address urgent needs. Choose The Supreme Maintenance for a superior electrical experience in Dubai.",
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
        title="Electrician At Your"
        subtitle="Services"
        backgroundImage="/new.jpeg"
        image="/electrician 2.png"
        buttonText="Call Now"
      />
      <AboutUsDynamic
        title="Residential And Commercial Electrician Service Near You In Dubai"
        text="Need an electrician near you in Dubai? Look no further. We provide expert electrical services for both residential and commercial properties, ensuring your safety and convenience. Our team of highly skilled and experienced electricians is equipped to handle a wide range of electrical issues, from minor repairs and installations to major electrical overhauls.

Whether you need to install new lighting fixtures, repair faulty wiring, upgrade your electrical panel, or troubleshoot electrical problems, we are here to help.



We prioritize customer satisfaction and ensure that all our work is carried out to the highest industry standards. Contact us today for a free quote and experience the difference with our professional and reliable electrical services near you in Dubai."
        points={[
          "Cost-Effective Electrician Service close to you",
          "10 years Experience",
          "Licensed Company",
          "Certified Technicians",
          "Free Estimation",
          "Quality Work Guaranteed",
        ]}
        imageSrc="/ele.png"
        imageAlt="Image of man having all tools in hand"
      />
      <div>
        <h2 className="text-center text-3xl font-serif text-blue-500 font-bold mt-6">
          Our Electrician Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
          {ElectricalService.map((service, index) => (
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
      <TestimonialDynamic testimonialData={electricalTestimonials} />
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

export default ElectricalService;

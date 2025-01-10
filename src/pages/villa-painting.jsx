import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
import TestimonialDynamic from "../components/Sub-Components/TestimonialDynamic";
import { FaTools, FaShieldAlt, FaRegClock, FaPhoneAlt } from "react-icons/fa";
import WhyChooseUs from "../components/Sub-Components/WhyChooseUs";
import { useEffect } from "react";
import Counter from "../components/Re-useable/Counter";
import ContactUs from "../components/ConatctUs";
const VillaPainting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const VillaService = [
    {
      title: "Villa interior",
      description:
        "Elevate your villa's interiors with bespoke painting services, blending luxury and style to create stunning living spaces",
      image: "/vi.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Exterior villa",
      description:
        "Bring your villa's exterior to life with vibrant, long-lasting paint that adds beauty and ensures protection for years to come.",
      image: "/ve.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Accent walls villa",
      description:
        "Transform your interior with vibrant accent walls that bring character and depth, tailored to match your villa’s unique style.",
      image: "/aw.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Boundry walls",
      description:
        "Secure and beautify your property with our boundary wall painting services, designed to add a fresh, protective layer to your villa’s perimeter",
      image: "/vb.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Epoxy coating",
      description:
        "Ensure a durable, high-performance finish with our epoxy coating services, perfect for protecting your villa’s surfaces from wear and tear",
      image: "/vx.jpg",
      callNowLink: "+971569096124",
      // viewDetailsLink: "/painting-service/villa-painting",
    },
    {
      title: "Stain and vernish",
      description:
        "Let the small places be transformed into  something beautiful with the best Apartment painter service in Dubai.",
      image: "/sv.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "Textured paint",
      description:
        "Add depth and character to your walls with our expertly applied textured paint, creating a unique and stylish finish",
      image: "/vt.jpg",
      callNowLink: "+971569096124",
    },
    {
      title: "villa water proofing",
      description:
        "Shield your villa from water damage with our advanced waterproofing solutions, ensuring long-lasting protection and peace of mind",
      image: "/vwp.jpg",
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
    heading: "  Why Choose Us For Villa Painting Services",
    subheading:
      "We have a team of skilled painters with years of experience in painting villas. We only use the best paints that are long-lasting and look fantastic. We pay close attention to detail, ensuring a flawless finish every time. We care about your happiness and will work with you to make sure you love the results. We make the painting process easy and stress-free for you. Choose us for your villa painting project and experience the difference.",
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
      {
        icon: FaPhoneAlt,
        title: "24 Hours Services",
        // description:
        // "We value your time. Our handymen arrive on time and complete the job efficiently and within the estimated time frame.",
      },
    ],
  };
  return (
    <>
      <title>Top-Notch Villa Paiting Service In Dubai</title>
      <div>
        <HeroSectionDynamic
          title="Painter At Your"
          subtitle="Services"
          backgroundImage="/new.jpeg"
          image="/painter.png"
          buttonText="Call Now"
        />
        <AboutUsDynamic
          title="Best Villa Interior And Exterior Paiting Services In Dubai"
          text="Want to make your villa look amazing? We offer the best villa painting services in Dubai. Our expert painters use high-quality paints to give your villa a beautiful and long-lasting finish, both inside and out.

We understand that painting a villa has its own challenges. That's why we offer custom solutions to fit your exact needs. Whether you want intricate details or bold colors, we'll bring your vision to life with skill and attention to detail.

Experience the difference of our top-notch villa painting services and create a stunning home that truly reflects your style."
          imageSrc="/pf.png"
          imageAlt="Image of man having all tools in hand"
        />
        <div>
          <Counter services={8} experience={10} satisfiedClients={800} />
        </div>
        <div>
          <h2 className="text-center p-2 text-3xl font-serif text-blue-500 font-bold mt-6">
            Our Villa Painting Services Near You In Dubai
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
            {VillaService.map((service, index) => (
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
        <div>
          <ContactUs />
        </div>
      </div>
    </>
  );
};

export default VillaPainting;

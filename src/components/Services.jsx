import Cards from "./Re-useable/Cards";

const Services = () => {
  const services = [
    {
      name: "Handyman Service",
      description:
        "Hire our expert for best handyman service for tasks like drywall installation, plumbing services, fixture replacements, and minor home upgrades.",
      link: "/handyman-services",
      image: "/handy.jpeg",
      callNowLink: "+971569096124",
    },
    {
      name: "Plumbing Service",
      description:
        "Your satisfaction is our priority. We offer top-notch plumbing services, from leaky faucets to clogged drains, our plumbers provide efficient solutions.",
      link: "/plumbing-services",
      image: "/plumber12.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Renovation Service",
      description:
        "Let’s transform your space, from room makeovers to full home renovations. Our Dubai experts will guide you from concept to completion.",
      link: "/renovation-service",
      image: "/reno.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Electrical Service",
      description:
        "Professional electrical services without hidden costs from minor repairs to major installations, our electricians are available 24/7 to assist you.",
      link: "/electrical-service",
      image: "/electrical.jpg", //
      callNowLink: "+971569096124",
    },
    {
      name: "Carpentry Service",
      description:
        "Custom carpentry solutions to enhance your home. Our skilled craftsmen create beautiful and functional pieces, from custom cabinetry to intricate trim work.",
      link: "/carpentry-service",
      image: "/carpentrey.jpg",
      callNowLink: "+971569096124",
    },
    {
      name: "Painting Service",
      description:
        "From vibrant accent walls to complete room makeovers, we’ll bring your vision to life. Our skilled painters use high-quality paints and techniques to deliver flawless results.",
      link: "/painting-service",
      image: "/paint.jpg",
      callNowLink: "+971569096124",
    },
    // {
    //   name: "Pool Maintenance Service",
    //   description:
    //     "Let our specialists handle your pool maintenance, offering services like regular cleaning, chemical balancing, filter cleaning, tile scrubbing, and shock treatments.",
    //   link: "/pool-maintenance",
    //   image: "/pool.jpeg",
    //   callNowLink: "+971569096124",
    // },
    {
      name: "Pest Control",
      description:
        "Safeguard your home with our expert pest control services, eliminating pests like ants, termites, and rodents using safe and effective methods.",
      link: "/pest-control",
      image: "/pest.jpg",
      callNowLink: "+971569096124",
    },

    {
      name: "Home Appliance",
      description:
        "Get reliable repair and maintenance for all your home appliances, from refrigerators to washing machines, ensuring smooth operation.",
      link: "/home-appliance",
      image: "/Home.jpg",
      callNowLink: "+971569096124",
    },
  ];

  return (
    <div
      id="services"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4"
    >
      {services.map((service, index) => (
        <Cards
          key={index}
          title={service.name}
          description={service.description}
          viewDetailLink={service.link}
          image={service.image}
          callNowLink={service.callNowLink}
        />
      ))}
    </div>
  );
};

export default Services;

import Cards from "./Re-useable/Cards";

const Services = () => {
  const services = [
    {
      name: "Handyman Service",
      description:
        "Hire our expert for best handyman service for tasks like drywall installation, plumbing services, fixture replacements, and minor home upgrades.",
      link: "/HandymanService",
      image: "/s1.jpeg",
      callNowLink: "+923096194974",
    },
    {
      name: "Plumbing Service",
      description:
        "Your satisfaction is our priority. We offer top-notch plumbing services, from leaky faucets to clogged drains, our plumbers provide efficient solutions.",
      link: "/PlumbingService",
      image: "/plum.jpeg",
    },
    {
      name: "Renovation Service",
      description:
        "Let’s transform your space, from room makeovers to full home renovations. Our Dubai experts will guide you from concept to completion.",
      link: "/RenovationService",
      image: "/reno.jpeg",
    },
    {
      name: "Electrical Service",
      description:
        "Professional electrical services without hidden costs from minor repairs to major installations, our electricians are available 24/7 to assist you.",
      link: "/ElectricalService",
      image: "/s3.jpeg", //
    },
    {
      name: "Carpentry Service",
      description:
        "Custom carpentry solutions to enhance your home. Our skilled craftsmen create beautiful and functional pieces, from custom cabinetry to intricate trim work.",
      link: "/CarpentryService",
      image: "/s4.jpeg",
    },
    {
      name: "Painting Service",
      description:
        "From vibrant accent walls to complete room makeovers, we’ll bring your vision to life. Our skilled painters use high-quality paints and techniques to deliver flawless results.",
      link: "/PaintingService",
      image: "/paint.jpeg",
    },
    {
      name: "Pool Maintenance Service",
      description:
        "Let our specialists handle your pool maintenance, offering services like regular cleaning, chemical balancing, filter cleaning, tile scrubbing, and shock treatments.",
      link: "/PoolMaintenance",
      image: "/pool.jpeg",
    },
    {
      name: "Pest Control",
      description:
        "Let our specialists handle your pool maintenance, offering services like regular cleaning, chemical balancing, filter cleaning, tile scrubbing, and shock treatments.",
      link: "/PestControl",
      image: "/pest.jpeg",
    },
    {
      name: "Home Appliance",
      description:
        "Let our specialists handle your pool maintenance, offering services like regular cleaning, chemical balancing, filter cleaning, tile scrubbing, and shock treatments.",
      link: "/api-integration",
      image: "/Home.jpeg",
    },
  ];

  return (
    <div
      id="services"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
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

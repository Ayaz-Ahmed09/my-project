import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import AboutUsDynamic from "../components/Sub-Components/AboutUsDynamic";
import SubCard from "../components/Re-useable/SubCard";
import TestimonialDynamic from "../components/Sub-Components/TestimonialDynamic";
import { FaTools, FaShieldAlt, FaRegClock } from "react-icons/fa";
import WhyChooseUs from "../components/Sub-Components/WhyChooseUs";
const Dishwasher = () => {
  const Dishwasher = [
    {
      title: "Dishwasher Door Gasket & Seals",
      description:
        "Replace or repair your dishwasher door gaskets and seals to prevent leaks and ensure optimal performance.",
      image: "/ddoor.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Dishwasher Motor",
      description:
        "Expert motor repairs or replacements to keep your dishwasher running smoothly and efficiently.",
      image: "/dm.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Dishwasher Spray Arms",
      description:
        "Ensure even water distribution by repairing or replacing dishwasher spray arms for effective cleaning.",
      image: "/dsa.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Dishwasher Control Panel",
      description:
        "Get your dishwasher's control panel fixed or replaced to ensure all settings work flawlessly every time.",
      image: "/dc.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Dishwasher Door Latch",
      description:
        "Fix or replace the door latch to keep your dishwasher securely closed during operation.",
      image: "/ddl.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Dishwasher Filters",
      description:
        "Clean or replace your dishwasher filters to improve water flow and ensure better washing performance.",
      image: "/df.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Dishwasher General Repairing",
      description:
        "Comprehensive repairs to fix any issue, from draining problems to ineffective cleaning, ensuring your dishwasher works like new.",
      image: "/dgm.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Dishwasher Heating Problems",
      description:
        "Resolve dishwasher heating issues quickly with our expert repair services, ensuring spotless and hygienic dishes every time",
      image: "/dhp.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Dishwasher Noise Reduction",
      description:
        "Say goodbye to loud dishWashing cycles—our experts will identify and fix the source of unwanted noise.",
      image: "/dns.jpeg",
      callNowLink: "+971569096124",
    },
    {
      title: "Diagnostic Check",
      description:
        "Ensure your dishwasher runs smoothly with our expert diagnostic check services, identifying issues before they escalate",
      image: "/ddc.jpeg",
      callNowLink: "+971569096124",
    },
  ];

  const DishTestimonials = [
    {
      image: "/r4.png",
      name: "Zayd Al-Khalid",
      position: "Customer",
      message:
        "The dishwasher repair was quick and efficient, my appliance is working perfectly now!",
    },
    {
      image: "/r15.png",
      name: "Fatima Al-Zahrani",
      position: "Customer",
      message:
        "The team provided exceptional service for my dishwasher, and the issue was resolved in no time.",
    },
    {
      image: "/r16.png",
      name: "Omar Al-Hashimi",
      position: "Customer",
      message:
        "I called for a dishwasher installation, and the service was flawless, my kitchen looks great!",
    },
    {
      image: "/r17.png",
      name: "Salma Al-Rashid",
      position: "Customer",
      message:
        "My dishwasher was repaired quickly and efficiently, very happy with the results!",
    },
  ];

  const whyChooseUsData = {
    heading: "Why choose Us For Dishwasher Repairing Service",
    subheading:
      "We understand how frustrating it can be when your dishwasher stops working. That’s why we’re here to provide fast and dependable repair services for all major brands. Our skilled technicians are experienced in handling a variety of dishwasher issues, so no matter the problem, we’ve got you covered.We use high-quality parts to ensure lasting repairs and make sure your dishwasher is back to running smoothly in no time. From fixing leaks and drainage problems to resolving electrical or mechanical issues, we’ll have your dishwasher working like new again.Say goodbye to handwashing dishes and let us help you get your kitchen back in order quickly and hassle-free. Trust our team to bring the convenience of your dishwasher back to your home.",
    points: [
      {
        icon: FaTools,
        title: "Expert Technicians",
        description:
          "Our handymen are highly skilled and experienced in various home repair tasks, ensuring quality work every time.",
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
          "We value your time. Our handymen arrive on time and complete the job efficiently and within the estimated time frame.",
      },
    ],
  };
  return (
    <>
      <title>Professional Dishwasher Repairing Service Near You In Dubai</title>
      <div>
        <HeroSectionDynamic
          title="Dishwasher"
          subtitle="Services"
          backgroundImage="/new.jpeg"
          image="/dish1.png"
          buttonText="Book Now"
        />
        <div>
          <AboutUsDynamic
            title="Dishwasher Repairing Service Near You In Dubai"
            text="s your dishwasher acting up? Leaking water? Not cleaning your dishes properly? Don't worry, we can help! We're the best dishwasher repair experts near you in Dubai.

            We have years of experience fixing all major brands of dishwashers, from simple to complex issues. We understand how frustrating it is to deal with a broken appliance, so we'll work quickly and efficiently to get your dishwasher back in working order.

            Our technicians are skilled and knowledgeable, and we use high-quality parts to ensure long-lasting repairs. We also offer competitive pricing and a satisfaction guarantee.

            Contact us today for a free quote. We'll answer any questions you have and schedule a convenient time for us to come and take a look at your dishwasher."
            imageSrc="/dish2.png"
            imageAlt="Image of man having all tools in hand"
          />
        </div>
        <div>
          <h2 className="text-center font-serif text-blue-500 text-3xl font-bold mt-6">
            Our Dishwasher Repairing Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
            {Dishwasher.map((service, index) => (
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
        <h2 className="text-center font-serif text-blue-500 text-3xl font-bold mt-6">
          Our Client Testimonials
        </h2>
        <TestimonialDynamic testimonialData={DishTestimonials} />
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

export default Dishwasher;

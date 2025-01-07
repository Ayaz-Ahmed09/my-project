import { FaTools, FaShieldAlt, FaRegClock, FaPhoneAlt } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-container py-16 bg-blue-100">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-serif font-bold text-blue-600">
          Why Choose Us?
        </h2>

        {/* Subheading */}
        <p className="mt-2 p-6 sm:text-lg font-sans md:text-lg lg:text-2xl text-gray-600">
          Supreme Maintenance offers a wide range of house and building
          maintenance services in Dubai. Our team of skilled technicians is
          committed to providing exceptional service, from minor repairs to
          major renovations. We prioritize quality workmanship, timely
          completion, and customer satisfaction. With our transparent pricing
          and reliable service, you can trust us to take care of your property.
        </p>

        {/* List of Points */}
        <div className="mt-6 grid grid-cols-1 p-6 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Expert Technicians */}
          <div className="flex flex-col items-center hover:border-2 border-blue-500 text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full mb-4">
              <FaTools className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold font-serif text-gray-900">
              Expert Technicians
            </h3>
            {/* <p className="text-gray-500 mt-2">
              Our handymen are highly skilled and experienced in various home
              repair tasks, ensuring top-quality work every time.
            </p> */}
          </div>

          {/* Trustworthy & Reliable */}
          <div className="flex flex-col items-center hover:border-2 border-blue-500 text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full mb-4">
              <FaShieldAlt className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold font-serif text-gray-900">
              Trustworthy & Reliable
            </h3>
            {/* <p className="text-gray-500 mt-2">
              We prioritize customer trust, ensuring our team is
              background-checked and fully insured for your peace of mind.
            </p> */}
          </div>

          {/* On-Time Service */}
          <div className="flex flex-col items-center text-center hover:border-2 border-blue-500 p-6 bg-white rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full mb-4">
              <FaRegClock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold font-serif text-gray-900">
              On-Time Service
            </h3>
            {/* <p className="text-gray-500 mt-2">
              We respect your time. Our team always arrives on time and
              completes the job efficiently within the agreed timeframe.
            </p> */}
          </div>

          {/* 24/7 Service */}
          <div className="flex flex-col items-center text-center hover:border-2 border-blue-500 p-6 bg-white rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full mb-4">
              <FaPhoneAlt className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold font-serif text-gray-900">
              24/7 Service
            </h3>
            {/* <p className="text-gray-500 mt-2">
              We offer round-the-clock services, so you can count on us
              anytime—day or night, we&apos;re always available for emergency
              repairs.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

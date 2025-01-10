import HeroSectionDynamic from "../components/Sub-Components/HeroSectionDynamic";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSectionDynamic
        title="About"
        subtitle="Supreme Maintenance"
        backgroundImage="/homebg.jpg"
        image="/About.png"
        buttonText="Call Now"
      />
      <section className="bg-gray-100 pt-6 ">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-blue-600 font-serif mb-4">
            About Us
          </h2>
          {/* <div className="flex justify-center mb-8">
          <div className="w-full md:w-1/2 lg:w-1/3 mx-4">
            <img
              src="/aboutus.jpeg"
              alt="Maintenance Services"
              className="w-full h-60 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div> */}
          <p className="text-lg text-gray-600 p-4  mb-8">
            At the Supreme Maintenance, we are more than just a maintenance
            company; we are your trusted partners in preserving the beauty and
            functionality of your Dubai property. With 10 years of experience
            serving the vibrant and dynamic cityscape of Dubai, we have honed
            our expertise to deliver exceptional maintenance solutions that
            consistently exceed expectations. Our team of highly skilled and
            experienced technicians possess a deep understanding of the unique
            challenges and demands of maintaining properties in Dubai&apos;s
            diverse environment. We are committed to providing the highest
            quality workmanship, ensuring that every project is executed with
            meticulous attention to detail and a focus on achieving lasting
            results.
          </p>

          {/* Cards Section (Responsive Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {/* Licensed & Insured Card */}
            <div className="bg-white p-6  rounded-lg text-center justify-center shadow-lg hover:border-2 border-blue-500 flex items-center gap-4">
              <div className="font-serif">
                <h3 className="font-bold text-lg">Licensed & Insured</h3>
                <p className="text-gray-600">
                  Fully licensed and insured to ensure reliable and secure
                  maintenance services for your peace of mind.
                </p>
              </div>
            </div>

            {/* Expert Technicians Card */}
            <div className="bg-white p-6 rounded-lg  shadow-lg hover:border-2 border-blue-500 flex items-center gap-4">
              <div className="font-serif">
                <h3 className="font-bold text-lg">Expert Technicians</h3>
                <p className="text-gray-600">
                  Highly skilled and trained professionals for all your
                  maintenance needs.
                </p>
              </div>
            </div>

            {/* Comprehensive Services Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:border-2 border-blue-500 flex items-center gap-4">
              <div className="font-serif">
                <h3 className="font-bold text-lg">Comprehensive Services</h3>
                <p className="text-gray-600">
                  Offering a full range of maintenance solutions to meet all
                  your property needs, from plumbing and electrical to general
                  repairs and more.
                </p>
              </div>
            </div>

            {/* 24/7 Emergency Support Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:border-2 border-blue-500 flex items-center gap-4">
              <div className="font-serif">
                <h3 className="font-bold text-lg">24/7 Emergency Support</h3>
                <p className="text-gray-600">
                  Available anytime to handle urgent maintenance needs.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-700 mb-6">
              We understand that your property is an investment, and we treat it
              as such. That&apos;s why we utilize only premium quality products
              and parts from reputable suppliers. This commitment to quality
              ensures that your property receives the best possible care and
              that repairs and maintenance are carried out to the highest
              standards of durability and longevity.
              <br />
              We prioritize customer satisfaction above all else. Our goal is to
              build long-term relationships with our clients by providing
              transparent communication, competitive pricing, and a personalized
              approach that addresses your individual needs and preferences.
            </p>
            {/* another card section  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {/* Licensed & Insured Card */}
              <div className="bg-white p-6 rounded-lg text-center justify-center shadow-lg hover:border-2 border-blue-500 flex items-center gap-4">
                <div className="font-serif">
                  <h3 className="font-bold text-lg">Transparent Pricing</h3>
                  <p className="text-gray-600">
                    Fully licensed and insured to ensure reliable and secure
                    maintenance services for your peace of mind.
                  </p>
                </div>
              </div>

              {/* Expert Technicians Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:border-2 border-blue-500 flex items-center gap-4">
                <div className="font-serif">
                  <h3 className="font-bold text-lg">
                    Premium Quality Standards
                  </h3>
                  <p className="text-gray-600">
                    Highly skilled and trained professionals for all your
                    maintenance needs.
                  </p>
                </div>
              </div>

              {/* Comprehensive Services Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:border-2 border-blue-500 flex items-center gap-4">
                <div className="font-serif">
                  <h3 className="font-bold text-lg">Safety & Security</h3>
                  <p className="text-gray-600">
                    Offering a full range of maintenance solutions to meet all
                    your property needs, from plumbing and electrical to general
                    repairs and more.
                  </p>
                </div>
              </div>

              {/* 24/7 Emergency Support Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:border-2 border-blue-500 flex items-center gap-4">
                <div className="font-serif">
                  <h3 className="font-bold text-lg">
                    Efficient & Timely Service
                  </h3>
                  <p className="text-gray-600">
                    Available anytime to handle urgent maintenance needs.
                  </p>
                </div>
              </div>
            </div>
            <a
              href="/contact"
              className="inline-block bg-blue-600 mb-4 font-serif text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

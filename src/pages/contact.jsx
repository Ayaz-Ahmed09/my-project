import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { useEffect } from "react";
const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-semibold font-serif text-center text-blue-600 mb-8">
        Contact Us
      </h2>

      <p className="text-lg text-gray-600 mb-8 text-center">
        We&apos;re here to assist you! Reach out to us through any of the
        methods below. Whether you prefer calling, emailing, or using WhatsApp,
        we&apos;re always happy to help.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Address Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:border-2 border-blue-500 flex items-center gap-4">
          <FaMapMarkerAlt className="text-blue-500 text-3xl" />
          <div className="font-serif">
            <h3 className="font-bold text-lg">Our Office</h3>
            <p className="text-gray-600">WHP2-Block-A Commercial, Dubai, UAE</p>
            <a
              href="https://www.google.com/maps?q=WHP2-Block-A+Commercial,+Dubai,+UAE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        {/* Phone Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:border-2 border-blue-500 flex items-center gap-4">
          <FaPhoneAlt className="text-blue-500 text-3xl" />
          <div className="font-serif">
            <h3 className="font-bold text-lg">Call Us Now</h3>
            <a
              href="tel:+971569096124"
              className="text-gray-600 hover:underline"
            >
              +971-569096124
            </a>
            <p className="text-gray-600 text-sm">Available 24 Hours</p>
          </div>
        </div>

        {/* Email Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:border-2 border-blue-500 flex items-center gap-4">
          <FaEnvelope className="text-blue-500 text-3xl" />
          <div className="font-serif">
            <h3 className="font-bold text-lg">Email Us</h3>
            <a
              href="mailto:thesuprememaintenance@gmail.com"
              className="text-gray-600 hover:underline"
            >
              thesuprememaintenance@gmail.com
            </a>
            <p className="text-gray-600 text-sm">
              We aim to respond within 24 hours.
            </p>
          </div>
        </div>

        {/* WhatsApp Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:border-2 border-blue-500 flex items-center gap-4">
          <FaWhatsapp className="text-blue-500 text-3xl" />
          <div className="font-serif">
            <h3 className="font-bold text-lg">WhatsApp</h3>
            <a
              href="https://wa.me/971569096124"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:underline"
            >
              Message Us on WhatsApp
            </a>
            <p className="text-gray-600 text-sm">
              For quick replies and assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="mt-12">
        <h3 className="text-3xl font-semibold font-serif text-center text-blue-600 mb-4">
          How Can We Help?
        </h3>
        <p className="text-lg text-gray-600 text-center mb-8">
          Whether you&apos;re looking for more information about our services,
          need an emergency repair, or simply want to ask a question, we&apos;re
          always here to help. Just contact us through one of the methods above,
          and we&apos;ll be happy to assist you as quickly as possible.
        </p>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">
            We specialize in a variety of maintenance services across Dubai,
            including plumbing, electrical repairs, general handyman services,
            and more. Our team is professional, reliable, and committed to
            ensuring that your property remains in top condition.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Don’t hesitate to get in touch. We are always just a phone call,
            email, or message away!
          </p>

          <a
            href="/"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Return to Home Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

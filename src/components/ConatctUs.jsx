import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled out
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    // Send the form data to Formspree
    try {
      const response = await fetch("https://formspree.io/f/xzzzkldv", {
        // REPLACE with your Formspree URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Your message has been sent! We will get back to you soon.");
        setFormData({ name: "", email: "", message: "" }); // Clear form fields after successful submission
      } else {
        setStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-center items-start gap-12">
        {/* Left Side with three contact cards */}
        <div className="w-full md:w-1/3 space-y-6">
          {/* Contact Us Card */}
          <div className="bg-white p-6 rounded-lg hover:border-2 border-blue-500 shadow-lg flex items-start gap-4">
            <FaCommentDots className="text-blue-500 text-3xl" />
            <div className="font-serif">
              <h3 className="font-bold text-lg">Contact Us Now</h3>
              <p className="text-gray-600">
                Our staff would love to hear from you
              </p>
            </div>
          </div>

          {/* Company Address Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:border-2 border-blue-500 flex items-start gap-4">
            <FaMapMarkerAlt className="text-blue-500 text-3xl" />
            <div className="font-serif">
              <h3 className="font-bold text-lg">Company Address</h3>
              <p className="text-gray-600">
                WHP2-Block-A Commercial, Dubai, UAE
              </p>
            </div>
          </div>

          {/* Call Now Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:border-2 border-blue-500 flex items-start gap-4">
            <FaPhoneAlt className="text-blue-500 text-3xl" />
            <div className="font-serif">
              <h3 className="font-bold text-lg">Call Us Now</h3>
              <p className="text-gray-600">+971-569096124</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:border-2 border-blue-500 flex  gap-4">
            <div className="flex items-center gap-4 ">
              {/* Hide the Gmail icon on smaller screens using `hidden md:block` */}
              <FaEnvelope className="text-blue-500 text-2xl " />
              <div className="font-serif">
                <h3 className="font-bold text-lg">Email Us</h3>
                <p className="text-gray-600 text-lg">
                  thesuprememaintenance
                  <span> @gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold font-serif text-center mb-6">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block font-serif text-lg font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block font-serif text-lg font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-lg font-serif font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            {/* Display status message */}
            {status && (
              <div className="text-center text-red-600 mb-4">{status}</div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded hover:bg-yellow-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

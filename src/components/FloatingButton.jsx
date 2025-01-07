import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingButton = () => {
  const whatsappLink = "https://wa.me/+971569096124";
  const callLink = "tel:+971569096124";

  return (
    <div className="fixed bottom-6 z-50 flex justify-between w-full px-6">
      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl focus:outline-none"
      >
        <FaWhatsapp size={32} color="#25D366" />
      </a>

      {/* Call Button  */}
      <a
        href={callLink}
        className="bg-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl focus:outline-none"
      >
        <FaPhoneAlt size={32} color="#34b7f1" />
      </a>
    </div>
  );
};

export default FloatingButton;

import React from "react";

const SubCard = ({ title, description, image, callNowLink }) => {
  const handleCallNow = () => {
    window.location.href = `tel:${callNowLink}`;
  };

  return (
    <div className="relative flex flex-col sm:flex-row hover:border-2 border-blue-500 p-6 bg-slate-50 rounded-lg shadow-lg overflow-hidden max-w-full mx-auto">
      {/* Image Section */}
      <img
        src={image}
        alt={title}
        className="w-full sm:w-1/3 h-auto object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6"
      />

      {/* Content Section */}
      <div className="flex flex-col justify-between w-full sm:w-2/3">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          {/* Call Now Button */}
          <button
            onClick={handleCallNow}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto text-center sm:text-left"
          >
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubCard;

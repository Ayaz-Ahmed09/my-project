import { Link } from "react-router-dom";

const Cards = ({ title, description, viewDetailLink, image, callNowLink }) => {
  const handleCallNow = () => {
    window.location.href = `tel:${callNowLink}`;
  };

  return (
    <div className="relative flex flex-col lg:flex-row hover:border-2 border-blue-500 p-6 bg-slate-50 rounded-lg shadow-lg overflow-hidden max-w-full mx-auto">
      {/* Image Section */}
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-cover rounded-lg mb-4 lg:mb-0 lg:w-1/3 lg:mr-6"
      />

      {/* Content Section */}
      <div className="flex flex-col justify-between w-full lg:w-2/3">
        <h2 className="text-xl font-bold font-serif mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          {/* View Details Link */}
          <Link
            to={viewDetailLink}
            className="text-blue-500 hover:underline w-full sm:w-auto text-center sm:text-left"
          >
            View Details
          </Link>
          {/* Call Now Button */}
          <button
            onClick={handleCallNow}
            className="bg-blue-500 text-white px-4 font-serif py-2 rounded hover:bg-blue-600 w-full sm:w-auto text-center sm:text-left"
          >
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

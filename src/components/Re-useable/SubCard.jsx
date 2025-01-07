import { Link } from "react-router-dom";

const SubCard = ({
  title,
  description,
  image,
  callNowLink,
  viewDetailsLink,
}) => {
  const handleCallNow = () => {
    window.location.href = `tel:${callNowLink}`;
  };

  return (
    <div className="w-auto md:mx-4 flex flex-col lg:flex-row hover:border-2 border-blue-500 p-6 bg-slate-50 rounded-lg shadow-lg overflow-hidden max-w-full">
      {/* Image Section */}
      <img
        src={image}
        alt={title}
        loading="eager"
        className="w-full h-64 object-cover rounded-lg mb-4 lg:w-1/3 lg:mb-0" // 1/3 width on large screens, fixed height for all screens
      />

      {/* Content Section */}
      <div className="flex flex-col ml-4 justify-between w-full lg:w-2/3">
        <h2 className="text-xl font-serif font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>

        <div className="flex flex-col gap-4 sm:flex-row justify-center items-center space-y-3 sm:space-y-0">
          {/* Call Now Button */}
          <button
            onClick={handleCallNow}
            className="bg-blue-500 text-white px-4 py-2 font-serif rounded hover:bg-blue-600 w-full sm:w-auto text-center sm:text-left"
          >
            Call Now
          </button>

          {/* View Details Button (only for services that need it, like Villa Painting) */}
          {viewDetailsLink && (
            <Link
              to={viewDetailsLink}
              className="hover:bg-yellow-400 text-white hover:text-black font-serif px-4 py-2 rounded bg-blue-500 w-full sm:w-auto text-center sm:text-left"
            >
              View Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubCard;

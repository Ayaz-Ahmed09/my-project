const WhyChooseUs = ({ heading, subheading, points }) => {
  return (
    <div className="why-choose-us-container py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl p-3 font-serif font-bold text-blue-600">
          {heading}
        </h2>

        {/* Subheading */}
        <p className="mt-2 p-6 sm:text-lg p-2 font-sans md:text-lg lg:text-2xl text-gray-700">
          {subheading}
        </p>

        {/* List of Points */}
        <div className="mt-6 grid grid-cols-1 p-6 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex flex-col items-center  hover:border-2 border-blue-500 text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-500  text-white flex items-center justify-center rounded-full mb-4">
                {/* Icon for each point */}
                <point.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {point.title}
              </h3>
              <p className="text-gray-500 mt-2">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

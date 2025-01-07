const AboutUs = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center text-2xl text-blue-500 font-bold font-serif lg:text-4xl mt-6">
        Home and Building Maintenance Services in Dubai
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {/* Text Section (Now on the left) */}
        <div className="flex items-center  mb-4 text-center">
          <p className="sm:text-lg font-sans text-gray-700 md:text-lg lg:text-2xl">
            We are a full-service building maintenance company specializing in
            residential, commercial, and commercial/residential mixed-use
            developments. Our team of experienced professionals and skilled
            technicians will work tirelessly to ensure your home, office, or
            commercial space is in top condition.
          </p>
        </div>

        {/* Image Section (Now on the right) */}
        <div className="flex justify-center items-center bg-[url('/1.png')] bg-cover bg-center">
          <img
            src="/Home2.png"
            alt="Image of man having all tools in hand"
            loading="eager"
            className="w-full h-auto md:h-[500px] md:w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

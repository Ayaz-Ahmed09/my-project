const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* Left Line */}
        <div className="w-full border-t-2 border-white mb-4 md:mb-2"></div>

        {/* Company Name */}
        <div className="text-center text-xl font-semibold mb-2">
          <span>The Supreme Maintenance.</span>
        </div>

        {/* Copyright Line */}
        <div className="text-sm  mb-4">
          <span>&copy; 2024 Company Name. All rights reserved.</span>
        </div>

        {/* Right Line */}
        <div className="w-full border-t-2 border-white"></div>
      </div>
    </footer>
  );
};

export default Footer;

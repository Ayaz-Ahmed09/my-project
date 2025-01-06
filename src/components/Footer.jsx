// import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-sky-500 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Logo & Branding */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="/logo1.png"
            alt="supreme logo"
            className="h-12 w-12 mr-3 transition-transform transform hover:scale-110 duration-300"
          />
          <h2 className="text-xl font-bold text-slate-100">
            The Supreme Maintenance
          </h2>
        </div>

        {/* Quick Links */}
        {/* <div className="flex flex-col font-bold font-serif md:flex-row text-sm space-y-2 md:space-y-0 md:space-x-6 text-gray-100">
          <Link
            to="/"
            className="hover:text-indigo-300 transition duration-300"
          >
            Home
          </Link>
          <a
            href="/#services"
            className="hover:text-indigo-300 transition duration-300"
          >
            Services
          </a>
          {/* <a href="#" className="hover:text-indigo-300 transition duration-300">
            Contact
          </a> */}
        {/* <a href="#" className="hover:text-indigo-300 transition duration-300">
            About
          </a> */}
        {/* </div>  */}

        {/* Copyright */}
        <div className="text-sm text-gray-100 mt-4 md:mt-0">
          &copy; 2024 The Supreme Maintenance. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

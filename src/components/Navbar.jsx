import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  // State to toggle the menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 drop-shadow-xl hover:drop-shadow-xl flex justify-between items-center text-white h-20 px-4">
      {/* Logo */}
      <Link to={"/"}>
        <div className="text-2xl ml-10 font-bold">
          <img src="/logo1.png" alt="supreme logo" height={80} width={80} />
        </div>
      </Link>

      {/* Desktop Menu (visible on large screens) */}
      <div className="hidden mr-10 lg:flex">
        <ul className="flex text-white font-semibold gap-8">
          <Link to={"/"}>
            <li className="hover:text-gray-300">Home</li>
          </Link>
          {/* <Link to={"/#services"}>
            <li className="hover:text-gray-300">About</li>
          </Link> */}

          {/* <li className="hover:text-gray-300">Contact</li> */}
        </ul>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu (visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-gradient-to-r from-blue-500 via-blue-50 to-blue-500 text-black p-4">
          <ul className="flex flex-col gap-4 text-center">
            <Link to={"/"}>
              <li className="hover:text-gray-300">Home</li>
            </Link>
            <li className="hover:text-gray-300">About</li>
            <li className="hover:text-gray-300">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

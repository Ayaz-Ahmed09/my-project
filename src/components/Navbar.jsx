import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to toggle the menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ref for the menu container to check clicks outside
  const menuRef = useRef(null);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu when clicking outside
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  // Event listener for clicks outside the menu
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to close the menu when any link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 drop-shadow-xl hover:drop-shadow-xl flex justify-between items-center text-white h-20 px-4">
      {/* Logo */}
      <Link to={"/"}>
        <div className="text-2xl ml-10 font-bold">
          <img
            src="/logo1.png"
            alt="supreme logo"
            height={80}
            width={80}
            loading="eager"
          />
        </div>
      </Link>

      {/* Desktop Menu (visible on large screens) */}
      <div className="hidden mr-10 lg:flex">
        <ul className="flex text-white font-serif font-semibold gap-8">
          <Link to={"/"} onClick={handleLinkClick}>
            <li className="hover:text-gray-300">Home</li>
          </Link>
          <Link to={"/about"} onClick={handleLinkClick}>
            <li className="hover:text-gray-300">About Us</li>
          </Link>
          <Link to={"/contact"} onClick={handleLinkClick}>
            <li className="hover:text-gray-300">Contact Us</li>
          </Link>
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
        <div
          ref={menuRef}
          className="lg:hidden absolute top-20 left-0 w-full bg-gradient-to-r from-blue-500 via-blue-50 to-blue-500 text-black p-4"
        >
          <ul className="flex flex-col gap-4 font-bold text-neutral-500 text-center">
            <Link to={"/"} onClick={handleLinkClick}>
              <li className="hover:text-gray-300">Home</li>
            </Link>
            <Link to={"/about"} onClick={handleLinkClick}>
              <li className="hover:text-gray-300">About Us</li>
            </Link>
            <Link to={"/contact"} onClick={handleLinkClick}>
              <li className="hover:text-gray-300">Contact Us</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

import { useEffect, useState } from "react";
const Button = ({ name }) => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    // Add pulse animation when the component is mounted
    const timer = setTimeout(() => {
      setPulse(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+971569096124";
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleCall}
        className={`bg-blue-500 text-white px-4 font-serif py-2 rounded transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:text-black 
          ${pulse ? "animate-pulse" : ""} 
          hover:scale-105 hover:shadow-xl`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;

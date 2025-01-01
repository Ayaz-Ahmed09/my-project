// import React from "react";

const Button = ({ name }) => {
  return (
    <div className="flex justify-center">
      <button className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-yellow-400 hover:text-black">
        {name}
      </button>
    </div>
  );
};

export default Button;

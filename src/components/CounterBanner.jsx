// src/components/CounterBanner.jsx
import React from "react";
import CountUp from "react-countup";

const CounterBanner = () => {
  return (
    <div className="bg-blue-500 text-white py-12">
      {/* Container for Counter Banners */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Counter 1: Services */}
        <div className="bg-white text-blue-500 p-6 rounded-lg shadow-xl">
          <h3 className="text-4xl font-bold mb-2">
            <CountUp start={0} end={30} duration={5} separator="," suffix="+" />
          </h3>
          <p className="text-lg font-medium">Services</p>
        </div>

        {/* Counter 2: Satisfied Clients */}
        <div className="bg-white text-blue-500 p-6 rounded-lg shadow-xl">
          <h3 className="text-4xl font-bold mb-2">
            <CountUp
              start={0}
              end={20000}
              duration={6}
              separator=","
              suffix="+"
            />
          </h3>
          <p className="text-lg font-medium">Satisfied Clients</p>
        </div>

        {/* Counter 3: Experience */}
        <div className="bg-white text-blue-500 p-6 rounded-lg shadow-xl">
          <h3 className="text-4xl font-bold mb-2">
            <CountUp start={0} end={20} duration={5} suffix="+" />
          </h3>
          <p className="text-lg font-medium">Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default CounterBanner;

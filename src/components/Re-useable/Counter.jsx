import { useState, useEffect } from "react";

const Counter = ({ services, experience, satisfiedClients }) => {
  const [inView, setInView] = useState(false);
  const [serviceCount, setServiceCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);

  // Start counting when the component comes into view
  useEffect(() => {
    const handleScroll = () => {
      const bannerElement = document.getElementById("counter-banner");
      const rect = bannerElement.getBoundingClientRect();
      if (rect.top <= window.innerHeight && !inView) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inView]);

  // Animate counters
  useEffect(() => {
    if (inView) {
      const incrementCount = (start, end, setter) => {
        let count = start;
        const step = Math.ceil((end - start) / 100);
        const interval = setInterval(() => {
          if (count < end) {
            count += step;
            setter(count);
          } else {
            clearInterval(interval);
            setter(end); // Ensure it ends exactly at `end`
          }
        }, 10);
      };

      incrementCount(0, services, setServiceCount);
      incrementCount(0, experience, setExperienceCount);
      incrementCount(0, satisfiedClients, setClientCount);
    }
  }, [inView, services, experience, satisfiedClients]);

  return (
    <div
      id="counter-banner"
      className="bg-blue-500 text-blue-500 mt-1 mb-1 rounded py-8 px-6 md:px-16 flex flex-col items-center justify-center space-y-4"
    >
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 font-serif justify-center">
        <div className="text-center p-6 rounded-lg shadow-xl bg-white ">
          <p className="text-5xl font-semibold">{serviceCount}+</p>
          <p className="text-lg">Services Delivered</p>
        </div>
        <div className="text-center p-6 rounded-lg shadow-xl bg-white ">
          <p className="text-5xl font-semibold">{experienceCount}+</p>
          <p className="text-lg">Years of Experience</p>
        </div>
        <div className="text-center p-6 rounded-lg shadow-xl bg-white ">
          <p className="text-5xl font-semibold">{clientCount}+</p>
          <p className="text-lg">Satisfied Clients</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;

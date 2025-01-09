import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const CounterBanner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="bg-blue-500 text-white font-serif py-12">
      {/* Container for Counter Banners */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {/* Counter 1: Services */}
        <div
          ref={ref}
          className="bg-white text-blue-500 p-6 rounded-lg shadow-xl"
        >
          <p className="text-4xl font-bold mb-2">
            {inView && (
              <CountUp
                start={0}
                end={30}
                duration={5}
                separator=","
                suffix="+"
              />
            )}
          </p>
          <p className="text-lg font-medium">Services</p>
        </div>

        {/* Counter 2: Satisfied Clients */}
        <div
          ref={ref}
          className="bg-white text-blue-500 p-6 rounded-lg shadow-xl"
        >
          <p className="text-4xl font-bold mb-2">
            {inView && (
              <CountUp
                start={0}
                end={12000}
                duration={6}
                separator=","
                suffix="+"
              />
            )}
          </p>
          <p className="text-lg font-medium">Satisfied Clients</p>
        </div>

        {/* Counter 3: Experience */}
        <div
          ref={ref}
          className="bg-white text-blue-500 p-6 rounded-lg shadow-xl"
        >
          <p className="text-4xl font-bold mb-2">
            {inView && <CountUp start={0} end={10} duration={5} suffix="+" />}
          </p>
          <p className="text-lg font-medium">Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default CounterBanner;

// testimonial data
const testimonialData = [
  {
    image: "/r3.png",
    name: "Khalid Al-Hamadi",
    position: "Customer",
    message:
      "Highly recommend Supreme Maintenance for any home improvement needs—quick, efficient, and affordable service.",
  },
  {
    image: "/r1.png",
    name: "Omar Al-Farsi",
    position: "Customer",
    message:
      "Supreme Maintenance’s team did an excellent job fixing my plumbing issues, and their service was prompt and reliable.",
  },
  {
    image: "/r2.png",
    name: "Youssef Al-Mansoori",
    position: "Customer",
    message:
      "From electrical work to minor renovations, Supreme Maintenance handled everything with professionalism and expertise.",
  },
];

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
// import Image from "next/image";

const Testimonial = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[400px] "
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16 ">
            {/* avatar,name,position */}
            <div
              className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto
              xl:mx-0"
            >
              <div className="flex flex-col text-center justify-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <img
                    src={person.image}
                    alt={person.name}
                    width={100}
                    height={100}
                    loading="eager"
                  />
                </div>
                {/* name */}
                <div className="text-lg">{person.name}</div>
                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>
            {/* quote & message */}
            <div
              className="flex-1 flex flex-col justify-center items-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute
              xl:before:left-0 xl:before:h-[200px] relative xl:pl-20"
            >
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
              </div>
              {/* message */}
              <div className="xl:text-lg sm:mb-16 text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonial;

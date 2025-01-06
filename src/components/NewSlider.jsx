import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  " Handyman Service",
  " Plumbing Service",
  " Renovation Service",
  " Electrical Service",
  " Carpentry Service",
  " Painting Service",
  " Pool Maintenance Service",
  " Pest Control Service",
  " Home Appliance Service",
];

const NewSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // Default for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Tablet and larger screens
        settings: {
          slidesToShow: 2, // Show 2 slides on tablet
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Mobile screens
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 text-white mt-4 mb-6">
      <Slider {...settings}>
        {services.map((service, index) => (
          <div
            key={index}
            className="px-4 py-2 whitespace-nowrap text-center h-[50px]"
          >
            <div className="font-semibold text-2xl font-serif  ">{service}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewSlider;

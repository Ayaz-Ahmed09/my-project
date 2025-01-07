import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import NewSlider from "./components/NewSlider";
import Services from "./components/Services";
import ContactUs from "./components/ConatctUs";
import CounterBanner from "./components/CounterBanner";
import Testimonial from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUs";
function App() {
  // const reviews = [
  //   {
  //     name: "John Doe",
  //     review:
  //       "Amazing service! Highly recommend this company for all your home maintenance needs. They are professional and quick.",
  //     avatar: "/images/avatar1.jpg",
  //   },
  //   {
  //     name: "Jane Smith",
  //     review:
  //       "I had an excellent experience. The team was friendly, and the work was done on time. My go-to company for any repairs.",
  //     avatar: "/images/avatar2.jpg",
  //   },
  //   {
  //     name: "Alex Johnson",
  //     review:
  //       "I was really impressed with their attention to detail and the quality of the work. Definitely worth the investment.",
  //     avatar: "/images/avatar3.jpg",
  //   },
  //   {
  //     name: "Emily Davis",
  //     review:
  //       "The service was top-notch, and the technicians were courteous and professional. I'll definitely use them again in the future.",
  //     avatar: "/images/avatar4.jpg",
  //   },
  // ];
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <NewSlider />
      <AboutUs />
      <CounterBanner />
      <h2 className="text-center text-3xl font-bold font-serif text-blue-500 mt-6">
        Our Maintenance Services
      </h2>
      <Services />
      <h2 className="text-center text-3xl font-bold font-serif text-blue-500 mt-6">
        Our Client Testimonials
      </h2>
      <Testimonial />
      <WhyChooseUs />
      <ContactUs />
    </div>
  );
}

export default App;

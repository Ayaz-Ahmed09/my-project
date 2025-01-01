import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import NewSlider from "./components/NewSlider";
import Services from "./components/Services";
import ContactUs from "./components/ConatctUs";
import CounterBanner from "./components/CounterBanner";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <NewSlider />
      <AboutUs />
      <CounterBanner />
      <h2 className="text-center text-3xl font-bold font-serif mt-6">
        Our Services
      </h2>
      <Services />
      <ContactUs />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

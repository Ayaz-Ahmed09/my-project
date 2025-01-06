import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import App from "./App";
import HandymanService from "./pages/handyman-services";
import PlumbingService from "./pages/plumbing-services";
import RenovationService from "./pages/renovation-services";
import ElectricalService from "./pages/electrical-services";
import CarpentryService from "./pages/carpentry-service";
import PaintingService from "./pages/painting-service";
import PoolMaintenance from "./pages/pool-maintenance";
import PestControl from "./pages/pest-control";
import Footer from "./components/Footer";
import HomeAppliance from "./pages/home-appliance";
import Dishwasher from "./pages/dishwasher-reparing";
import WaterHeater from "./pages/water-heater";
import Washingmechine from "./pages/washing-mechine";
import FridgeRepair from "./pages/fridge-repair";
import VillaPainting from "./pages/villa-painting";
import HousePainting from "./pages/house-painting";
import About from "./pages/about";
import ContactPage from "./pages/contact";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/handyman-services" element={<HandymanService />} />
        <Route path="/plumbing-service" element={<PlumbingService />} />
        <Route
          path="/plumbing-services/water-heater"
          element={<WaterHeater />}
        />
        <Route path="/renovation-service" element={<RenovationService />} />
        <Route path="/electrical-service" element={<ElectricalService />} />
        <Route path="/carpentry-service" element={<CarpentryService />} />
        <Route path="/painting-service" element={<PaintingService />} />
        <Route
          path="/painting-service/villa-painting"
          element={<VillaPainting />}
        />
        <Route
          path="/painting-service/house-painting"
          element={<HousePainting />}
        />
        <Route path="/pool-maintenance" element={<PoolMaintenance />} />
        <Route path="/pest-control" element={<PestControl />} />
        {/* Nested Route for HomeAppliance */}
        {/* HomeAppliance Route: List of Services */}
        <Route path="/home-appliance" element={<HomeAppliance />} />
        <Route
          path="/home-appliance/dishwasher-reparing"
          element={<Dishwasher />}
        />

        <Route
          path="/home-appliance/washing-mechine"
          element={<Washingmechine />}
        />
        <Route
          path="/home-appliance/fridge-repair"
          element={<FridgeRepair />}
        />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);

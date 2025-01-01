import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import App from "./App";
import HandymanService from "./pages/HandymanService";
import PlumbingService from "./pages/PlumbingService";
import RenovationService from "./pages/RenovationService";
import ElectricalService from "./pages/ElectricalService";
import CarpentryService from "./pages/CarpentryService";
import PaintingService from "./pages/PaintingService";
import PoolMaintenance from "./pages/PoolMaintenance";
import PestControl from "./pages/PestControl";
import Footer from "./components/Footer";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/HandymanService" element={<HandymanService />} />
        <Route path="/PlumbingService" element={<PlumbingService />} />
        <Route path="/RenovationService" element={<RenovationService />} />
        <Route path="/ElectricalService" element={<ElectricalService />} />
        <Route path="/CarpentryService" element={<CarpentryService />} />
        <Route path="/PaintingService" element={<PaintingService />} />
        <Route path="/PoolMaintenance" element={<PoolMaintenance />} />
        <Route path="/PestControl" element={<PestControl />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);

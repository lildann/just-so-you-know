import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import ReportPage from "./pages/ReportPage";
import VenuePage from "./pages/VenuePage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/venue" element={<VenuePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

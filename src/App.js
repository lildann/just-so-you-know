import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import LandingPage from "./pages/LandingPage"
import ReportPage from "./pages/ReportPage"
import VenuePage from "./pages/venuePage";


function App() {
  return (<>  
  <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/report" element={<ReportPage/>} />
    <Route path="/venue" element={<VenuePage/>} />
  </Routes></>
       
  );
}


export default App;
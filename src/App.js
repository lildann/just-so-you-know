
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// import ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage"
import ReportPage from "../src/pages/ReportPage"


function App() {
  return (<>  
  <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/report" element={<ReportPage/>} />
  </Routes></>
       
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

export default App;
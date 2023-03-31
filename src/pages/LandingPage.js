import "../App.css";
// import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div className="App">
      {/* <ReportPage /> */}
    {/* <header className="App-header"> 
    {/* <img src={logo} className="App-logo" alt="logo" /> */} 
  {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > Learn React </a> */} 
    {/* </header> */}
    
    <div className="main-container"> 
      <h1>Just So You Know</h1>
      <h1>Check My Evening</h1>
      <div>
      <button onClick={()=>navigate("/venue")}>Search</button>
      </div>
      <div>
        <h1>Report Incident</h1>
        <h2>Experienced something unsafe?</h2>
     <button onClick={()=>navigate("/report")}>Report</button>


      </div>  
    </div>
  </div>

  );
};

export default LandingPage;
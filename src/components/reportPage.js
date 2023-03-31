import { useState } from "react";

function ReportPage() {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
   
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const newReport = { name, location,date,description };
  
      fetch("http://localhost:8000/venues", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReport),
      })
        .then(response => response.json())
        .catch((error) => {
          console.error(error);
          alert("Error adding report. Please try again later.");
        });
      setName("");
      setLocation("");
      setDate("");
      setDescription("")
    };
  
    return (
        <div> <h1> Report an Incident </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Venue Name:
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      </div>
    );
}
  

export default ReportPage;
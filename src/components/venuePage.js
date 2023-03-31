import { useEffect, useState } from "react"

function VenuePage (searchTerm) {
    const [venues, setVenues] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/venues', {
          method: 'GET',
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setVenues(data)
          })
          .catch((err) => console.error(err));
      }, []);
    

   return (
    <div>
        <h1> test</h1>
        {venues.map((venue, index) => (
            <div key={index}>
                <h2> Venue Name: {venue.name}</h2>
                <p> Venue Location: {venue.location}</p>
                <p>Rating: {venue.rating}</p>
                <p>Venue Description: {venue.descriptionVenue}</p>
            </div>
        ))}
    </div>
   )
}

export default VenuePage
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../Ttip.css'
interface Trip {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  image: string;
}
function Update(id:string){

	
}

function Delete(id: string) {
  fetch(`http://localhost:3000/api/trips/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "test-token",
    },
  })
    .then(() => {
      location.reload();
    })
    .catch((error) => {
      console.error("Error deleting item:", error);
    });
}

export default function Trip() {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:3000/api/trips");
      const data = await res.json();
      setTrips(data);
      console.log(data);
    }
    getData();
  }, []);

  return (
    <>
      <div className="page-container">
        <button><Link to="/Home">Log out</Link></button>
        <button>
          <Link to="/Home/trips/new">Create new</Link>
        </button>
        <h1>Trips</h1>
        <div className="trip-cards">
          {trips.map((trip) => (
            <div key={trip.id} className="trip-card">
              <Link to={`/Home/trip/deatail/${trip.id}`}>
                <div>
                  <img
                    className="trip-image"
                    src={trip.image}
                    alt={trip.name}
                  />
                </div>
                <div>
                  <h2>{trip.name}</h2>
                </div>
                <div>
                  <h3>{trip.destination}</h3>
                </div>
                <div>
                  from {trip.startDate} till {trip.endDate}
                </div>
              </Link>
				<button onClick={() => Delete(trip.id)}>DELETE</button>
				<button onClick={() => Update(trip.id)}>UPDATE</button>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}

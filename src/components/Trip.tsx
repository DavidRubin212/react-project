import React, { useEffect } from "react";
import { useState } from "react";
import AppRouter from "../routes/AppRouter";
import { Link } from "react-router-dom";

interface Trip {
	id: string;
	name: string;
	destination: string;
	startDate: string;
	endDate: string;
	image: string;
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
      <button><Link to="/Home">Home page</Link></button>
      <button><Link to="/Home/trips/new">Create new</Link></button>
			<div style={{ display: "flex" }}>
				<h1>Trips</h1>
				<div>
					{trips.map((trip) => (
						<div>
							<div>
								<img
									style={{ height: "150px", width: "250px" }}
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
              <div><button><Link to="/Home/trip/deatail">More deatail</Link></button></div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

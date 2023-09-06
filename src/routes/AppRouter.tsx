import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import UserRegistration from "../components/UserRegistration";
import UserLogin from "../components/UserLogin";
import Trip from "../components/Trip";
import NewTripForm from "../components/NewTripForm";
import Tripdeatails from "../components/Tripdeatails";

export default function AppRouter() {
	return (
		<Routes>
			<Route path="/Home" element={<Home />} />
			<Route path="/Home/register" element={<UserRegistration />} />
			<Route path="/Home/login" element={<UserLogin />} />
			<Route path="/Home/trips" element={<Trip />} />
			<Route path="/Home/trips/new" element={<NewTripForm/>} />
			<Route path="/Home/trip/deatail/:id" element={<Tripdeatails/>} />
 
    
		</Routes>
	);
}

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AppRouter from "../routes/AppRouter";
import Trip from "./Trip";
export default function Home() {
	
	return (
		<><h1 style={{display:"flex" }}>My Trips</h1>
			<div style={{display:"flex"}}>
				{/* <button onClick={() => setShow(!show)}>Trips</button>
				{show ? <Trip /> : null} */}
				<button><Link to="/Home/register">Register</Link></button>
				<button><Link to="/Home/login">Login</Link></button>
			</div>
		</>
	);
}

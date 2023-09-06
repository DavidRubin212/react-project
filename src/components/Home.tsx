import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
 
import "../Home.css"

export default function Home() {

  return (
    <>
	<div className="container">
      <h1 className="title">My Trips</h1>

      <div className="button-container">
	  <button><Link to="/Home/register">Register</Link></button>
		<button><Link to="/Home/login">Login</Link></button>
      </div>
	  </div>
    </>
  );
}
import React, { useState } from "react";

export default function UserRegistration() {
  const [pass, setPass] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const raw = JSON.stringify({
    email: email,
    password: pass,
  });

  const handleRegistration = () => {
    // const myHeaders = new Headers();
    // // myHeaders.append("authorization", "test-token");
    // myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: raw
      
    };
    console.log(pass, email);
    

    fetch("http://localhost:3000/api/auth/register", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <h1>sign in:</h1>
      <label>Password:</label>
      <input
        onChange={(e) => setPass(e.target.value)}
        value={pass}
        type="text"
      />
      <label>Email:</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
      />
      <button onClick={handleRegistration} type="submit">
        Submit
      </button>
    </>
  );
}

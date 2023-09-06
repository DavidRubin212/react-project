import React, { useState } from 'react';
import Trip from './Trip';

export default function UserLogin() {
  const [pass, setPass] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = () => {
    // const myHeaders = new Headers();
    // myHeaders.append("authorization", "test-token");
    // myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
      method: 'POST',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({
        "email": email, 
        "password": pass
      }),
      redirect: 'follow'
    };
    console.log(pass, email);
    

    fetch("http://localhost:3000/api/auth/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.message === "Login successful") {
          const Token = result.responseObj.token;
          localStorage.setItem('Token', Token)
          setLoginSuccess(true); // Set loginSuccess to true to render Trip
        }
      })
      .catch(error => console.log('error', error));
  };

  return (
    <>
      {!loginSuccess ? (
        <div>
          <h1>Login in:</h1>
          <label htmlFor="password">Password:</label>
          <input
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            type="password"
            id="password"
          />
          <label htmlFor="email">Email:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
          />
          <button onClick={handleLogin} type='button'>Submit</button>
        </div>
      ) : (
        <Trip />
      )}
    </>
  );
}

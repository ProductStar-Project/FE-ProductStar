import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

function App() {
  const handleLoginGoogle = async (credentialResponse: any) => {
    console.log(credentialResponse);
    try {
      const res = await axios.post("http://localhost:5000/auth/googleLogin", {
        tokenId: credentialResponse.credential,
      });
      console.log(res);
    } catch (e) {}
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoogleLogin
            onSuccess={handleLoginGoogle}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </a>
      </header>
    </div>
  );
}

export default App;

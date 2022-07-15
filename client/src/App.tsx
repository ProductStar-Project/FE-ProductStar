import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
function App() {
  const responseFacebook = async (response: any) => {
    try {
      const { accessToken, userID } = response;
      const res = await axios.post(
        "http://localhost:5000/auth/facebook_login",
        { accessToken: accessToken, userID: userID }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <FacebookLogin
          appId="2213403288836121"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
        />
        ,
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

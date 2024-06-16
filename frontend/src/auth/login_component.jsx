import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./login.css";

export default function Login() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [signInName, setSignInName] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const handleSignInSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/login-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: signInName,
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (data.status === "ok") {
          alert("Login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          window.location.href = "/";
        } else {
          alert("Login failed. Please check your credentials.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while logging in.");
      });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: signUpName,
        email: signUpEmail, // Corrected variable name
        password: signUpPassword,
        // Add other signup data here if needed
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "ok") {
          alert("Signup successful. Please login to continue.");
          // Optionally redirect the user to the login page after successful signup
          window.location.href = "/sign-in";
        } else {
          alert("Signup failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while signing up. Please try again later.");
      });
  };

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`loginContainer ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form
            action="#"
            className="sign-in-form loginForm"
            onSubmit={handleSignInSubmit}
          >
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="text"
                placeholder="Username"
                onChange={(e) => setSignInName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="email"
                placeholder="Email"
                onChange={(e) => setSignInEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="password"
                placeholder="Password"
                onChange={(e) => setSignInPassword(e.target.value)}
              />
            </div>
            <div className="container-register-btn">
              <button type="submit" className="btn">
                Sign In
              </button>
            </div>
          </form>
          <form
            action="#"
            className="sign-up-form loginForm"
            onSubmit={handleSignUpSubmit}
          >
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="text"
                placeholder="Username"
                value={signUpName}
                onChange={(e) => setSignUpName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="email"
                placeholder="Email"
                onChange={(e) => setSignUpEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="password"
                placeholder="Password"
                onChange={(e) => setSignUpPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className="loginh3">New here?</h3>
            <p className="loginp">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Debitis, ex ratione. Aliquid!
            </p>
            <button
              type="button"
              className="btn transparent"
              onClick={handleSignUpClick}
            >
              Sign up
            </button>
          </div>
          <img
            src="../../assets/login/sewage-removebg-preview.png"
            className="image"
            alt=""
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3 className="loginh3">One of us ?</h3>
            <p className="loginp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              type="button"
              className="btn transparent"
              id="sign-in-btn"
              onClick={handleSignInClick}
            >
              Sign in
            </button>
          </div>
          <img
            src="../../assets/login/sewage-removebg-preview.png"
            className="image"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

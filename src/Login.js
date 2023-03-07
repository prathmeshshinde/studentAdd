import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";

const Login = ({ curUser }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPass
      );

      console.log(user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div>
        <form className="section-login">
          <div className="section-login-login">
            <div className="section-login-form">
              <p className="error-message">{error}</p>
              <br></br>
              <input
                type="text"
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
                placeholder="Enter Your  Email"
              />
              <br></br>
              <input
                type="password"
                onChange={(e) => {
                  setLoginPass(e.target.value);
                }}
                placeholder="Enter Your  Password"
              />
              <br></br>
              <div className="section-login-button">
                <button
                  className="login-button"
                  type="submit"
                  onClick={handleSignup}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";

const Login = ({ curUser }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");

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
      console.log(error.message);
    }
  };

  return (
    <div>
      <div>
        <form className="section-login">
          <div className="section-login-login">
            <div className="section-login-form">
              <input
                type="text"
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
              />
              <input
                type="text"
                onChange={(e) => {
                  setLoginPass(e.target.value);
                }}
              />
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

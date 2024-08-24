import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useAuth } from "./AuthContext";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [error, setError] = useState("");
  const authenticate = useAuth();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPass);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGuestSignUp = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        "prathmesh@gmail.com",
        "omkar@123"
      );
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (authenticate.currentUser) {
      signOut(authenticate.currentUser.auth);
    }
  }, []);

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
                <button
                  className="login-button"
                  type="submit"
                  onClick={handleGuestSignUp}
                >
                  Guest Login
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

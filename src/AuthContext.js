import React, { useContext, useState, useEffect } from "react";
import { auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  function signUp(email, password) {
    auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (!user) {
        navigate("/login");
      } else {
        navigate("/");
      }
    });

    return unsubscribe;
  }, []);

  const value = { currentUser, signUp };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

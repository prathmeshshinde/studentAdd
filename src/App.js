import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Form from "./Form";
import Student from "./Student";
import View from "./View";
import Edit from "./Edit ";
import Login from "./Login";
import { db } from "./firebase-config";
import { collection } from "firebase/firestore";

import { AuthProvider } from "./AuthContext.js";

function App() {
  const studentCollectionRef = collection(db, "students");

  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <div>
            <Header />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="section-page">
                <Navbar />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Form studentCollectionRef={studentCollectionRef} />
                    }
                  />
                  <Route
                    path="/students"
                    element={
                      <Student studentCollectionRef={studentCollectionRef} />
                    }
                  />
                  <Route
                    path="/view/:id"
                    element={
                      <View studentCollectionRef={studentCollectionRef} />
                    }
                  />

                  <Route
                    path="/edit/:id"
                    element={
                      <Edit studentCollectionRef={studentCollectionRef} />
                    }
                  />

                  <Route path="/login" element={<Login />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

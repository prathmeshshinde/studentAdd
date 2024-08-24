import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as UserImport } from "./assets/usermultiple.svg";
import { ReactComponent as ListIcon } from "./assets/ListBoxes.svg";
import { ReactComponent as Logout } from "./assets/Logout.svg";
import { signOut } from "firebase/auth";
// import { auth } from "./firebase-config";
import { useAuth } from "./AuthContext";

const Navbar = () => {
  const auth = useAuth();

  const LogOutUser = async () => {
    await signOut(auth.currentUser.auth);
  };

  return !auth.currentUser ? null : (
    <div className="section-navbar">
      <div className="section-navbar-main">
        <div className="section-add">
          <NavLink to="/">
            <div className="section-navbar-active">
              <div className="icon">
                <UserImport />
              </div>

              <div className="icon-text">
                <p className="student">Add Student</p>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="section-list">
          <NavLink to="/students">
            <div className="section-navbar-active">
              <div className="icon">
                <ListIcon />
              </div>
              <div className="icon-text">
                <p className="student">Manage Students</p>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="section-logout" onClick={LogOutUser}>
          <div className="section-navbar-active">
            <div className="icon">
              <Logout />
            </div>
            <div className="icon-text">
              <p className="student">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

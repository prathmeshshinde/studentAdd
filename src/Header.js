import React from "react";
import { useAuth } from "./AuthContext";
import { ReactComponent as User } from "./assets/user.svg";

const Header = () => {
  const auth = useAuth();

  return (
    <div className="section-header">
      <div>
        <p className="logo">LOGO</p>
      </div>
      {!auth.currentUser ? null : (
        <div className="section-mail">
          <div className="username">
            <User />
          </div>

          <p className="username">{auth.currentUser?.email}</p>
        </div>
      )}
    </div>
  );
};

export default Header;

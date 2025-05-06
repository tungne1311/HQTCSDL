import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const NavBar = () => {
  const { setShowLogin } = useContext(AppContext);

  return (
    <div className="navbar">
      <div className="container">
        <img
          className="logo"
          src= {assets.logo_vespa}
          alt="Logo"
        />
        <div className="navbar-actions">
          <button onClick={(e) => setShowLogin(true)}
            className="btn-login"
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
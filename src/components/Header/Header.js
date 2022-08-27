import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="nav-container">
        <img src={logo} alt="logo" />
        <div>
          <Link to="/home">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/orderreview">Order Review</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;

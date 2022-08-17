import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="nav-container">
        <img src={logo} alt="logo" srcset="" />
        <div>
          <a href="/home">Home</a>
          <a href="/Shop">Shop</a>
          <a href="/inventory">Inventory</a>
          <a href="/order">Order Review</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <FaShoppingCart />
            </li>
            <button
              id="btn"
              className={`btn ${
                btnName === "Login" ? "btn-login" : "btn-logout"
              }`}
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

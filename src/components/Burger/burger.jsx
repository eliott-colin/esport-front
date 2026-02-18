import React from "react";
import "./burger.css";
import logo from "/logo.png";
import { Link } from "react-router-dom";

const Burger = ({ open, setOpen, isLogged }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button
          className={`burger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <div />
          <div />
          <div />
        </button>
        
        <Link to="/finalfocus/">
          <div className="navbar-logo">
            <img src={logo} alt="logo"></img>
          </div>
        </Link>

        {isLogged ? (
          <button className="navbar-cta-mobile">Ta mere</button>
        ) : (
          <Link to="/finalfocus/register">
            <button className="navbar-cta-mobile">Rejoindre</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Burger;

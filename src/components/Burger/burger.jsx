import React from "react";
import "./burger.css";
import logo from "/logo.png";

const Burger = ({ open, setOpen }) => {
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
        <div className="navbar-logo">
          <img src={logo} alt="logo"></img>
        </div>

        <button className="navbar-cta-mobile">Rejoindre</button>
      </div>
    </nav>
  );
};

export default Burger;

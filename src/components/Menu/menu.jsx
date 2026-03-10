import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";

const Menu = ({ open }) => {
  return (
    <nav className={`menu ${open ? "open" : ""}`}>
      <Link to="/finalfocus/">Accueil</Link>
      <Link to="/finalfocus/events">Événements</Link>
      <Link to="/finalfocus/universities">Universités</Link>
      <Link to="/finalfocus/teams">Équipes</Link>
    </nav>
  );
};

export default Menu;

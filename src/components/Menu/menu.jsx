import React from "react";
import "./menu.css";

const Menu = ({ open }) => {
  return (
    <nav className={`menu ${open ? "open" : ""}`}>
      <a href="/">Accueil</a>
      <a href="/">Événements</a>
      <a href="/">Universités</a>
      <a href="/">Équipes</a>
    </nav>
  );
};

export default Menu;

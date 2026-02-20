import React from "react";
import "./navbar.css";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

function Navbar() {
  const { isAuthenticated, role } = useAuth();

  const renderAuthButton = () => {
    if (!isAuthenticated) {
      return (
        <Link to="/finalfocus/register">
          <button className="navbar-cta">Rejoindre</button>
        </Link>
      );
    }

    if (role === "admin") {
      return (
        <Link to="/finalfocus/admin">
          <button className="navbar-cta">Panel Admin</button>
        </Link>
      );
    }

    return (
      <Link to="/finalfocus/profile">
        <button className="navbar-cta">Profil</button>
      </Link>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/finalfocus/">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>

        <ul className="navbar-menu">
          <li className="nav-item">
            <Link className="nav-link" to="/finalfocus/">
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/finalfocus/events">
              Événements
            </Link>
          </li>
          <li className="nav-item">
            <a href="#universites" className="nav-link">
              Universités
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/finalfocus/teams">
              Équipes
            </Link>
          </li>
        </ul>
        {renderAuthButton()}
      </div>
    </nav>
  );
}

export default Navbar;

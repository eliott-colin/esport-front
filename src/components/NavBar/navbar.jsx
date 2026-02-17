import React from 'react'
import "./navbar.css"
import logo from "/logo.png"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logo} alt="logo"></img>
                </div>

                <ul className="navbar-menu">
                    <li className="nav-item">
                        <a href="#accueil" className="nav-link">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a href="#events" className="nav-link">Événements</a>
                    </li>
                    <li className="nav-item">
                        <a href="#universites" className="nav-link">Universités</a>
                    </li>
                    <li className="nav-item">
                        <a href="#equipes" className="nav-link">Équipes</a>
                    </li>
                </ul>

                <button className="navbar-cta">Rejoindre</button>
            </div>
        </nav>
    )
}

export default Navbar

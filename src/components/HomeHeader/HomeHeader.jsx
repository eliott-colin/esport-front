import React from "react";
import "./HomeHeader.css";
import Button from "../Button/button.jsx";

function HomeHeader() {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="hero-badge">Plateforme Esport Universitaire</span>
        <h1 className="hero-title">
          Bienvenue sur <span className="hero-highlight">FinalFocus</span>
        </h1>
        <p className="hero-subtitle">
          La plateforme de gestion de tournois et d'
          événements esport universitaires. Créez votre équipe,
          participez à des compétitions et suivez vos matchs en direct.
        </p>
        <div className="hero-actions">
          <Button
            data={{
              text: "Découvrir les événements",
              color: "linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)",
              colorFont: "#FFFFFF",
              fontSize: "16px",
              onClick: () => navigate("/finalfocus/events"),
            }}
          />
          <Button
            data={{
              text: "Voir les équipes",
              color: "linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)",
              colorFont: "#FFFFFF",
              fontSize: "16px",
              onClick: () => navigate("/finalfocus/teams"),
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default HomeHeader;

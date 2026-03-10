import { useState } from "react";
import "./home.css";
import Events from "../../components/Events/events.jsx";
import UniversitiesList from "../../components/UniversitiesList/universities.jsx";
import Spacer from "../../components/Spacer/spacer.jsx";
import Button from "../../components/Button/button.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="navBarSpace">
      {/* ── Hero Header ── */}
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-badge">Plateforme Esport Universitaire</span>
          <h1 className="hero-title">
            Bienvenue sur <span className="hero-highlight">FinalFocus</span>
          </h1>
          <p className="hero-subtitle">
            La plateforme de gestion de <strong>tournois</strong> et
            d'<strong>événements esport</strong> universitaires. Créez votre équipe,
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

      <Spacer size="30px" />
      <Events />
      <Spacer size="30px" />
      <UniversitiesList
        universities={[
          {
            id: 1,
            name: "Université de Bordeaux",
            image: "lol1.png",
            ville: "Bordeaux",
            postalCode: 33000,
          },
          {
            id: 2,
            name: "Université de Paris",
            image: "lol2.png",
            ville: "Paris",
            postalCode: 75005,
          },
          {
            id: 3,
            name: "Université de Lyon",
            image: "lol1.png",
            ville: "Lyon",
            postalCode: 69001,
          },
          {
            id: 4,
            name: "Université de Lille",
            image: "lol2.png",
            ville: "Lille",
            postalCode: 59000,
          },
          {
            id: 5,
            name: "Université de Toulouse",
            image: "lol1.png",
            ville: "Toulouse",
            postalCode: 31000,
          },
          {
            id: 6,
            name: "Université de Marseille",
            image: "lol2.png",
            ville: "Marseille",
            postalCode: 13001,
          },
          {
            id: 7,
            name: "Université de Nantes",
            image: "lol1.png",
            ville: "Nantes",
            postalCode: 44000,
          },
        ]}
      />
      <Button
        data={{
          text: "Voir toutes les universités",
          color: "linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)",
          colorFont: "#FFFFFF",
          fontSize: "16px",
          onClick: () => navigate("/finalfocus/universities"),
        }}
      />
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import "./home.css";
import Events from "../../components/Events/events.jsx";
import UniversitiesList from "../../components/UniversitiesList/universities.jsx";
import Spacer from "../../components/Spacer/spacer.jsx";
import Button from "../../components/Button/button.jsx";
import { useNavigate } from "react-router-dom";
import { getEvents } from "../../api/events.js";
import { getUniversities } from "../../api/universities.js";
import HomeHeader from "../../components/HomeHeader/HomeHeader.jsx";

function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState(null);
  const [universites, setUniversites] = useState(null);
  useEffect(() => {
    getEvents()
      .then((res) => {
        setEvents(res);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement du profil :", err);
      })
      .finally(() => setLoading(false));
    getUniversities()
      .then((res) => {
        setUniversites(res);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement du profil :", err);
      })
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return (
      <div className="profile">
        <p>Chargement…</p>
      </div>
    );
  }
  return (
    <div className="navBarSpace">
      <HomeHeader />
      <Spacer size="30px" />
      <Events events={events} />
      <Spacer size="30px" />
      <UniversitiesList universities={universites} />
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

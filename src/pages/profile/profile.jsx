import React, { useState, useEffect } from "react";
import ProfileHeader from "../../components/ProfileHeader/profileHeader.jsx";
import SegmentedTabs from "../../components/SegmentedTabs/segmentedTabs.jsx";
import MatchEnCours from "../../components/MatchEnCours/matchEnCours.jsx";
import Title from "../../components/Title/title.jsx";
import Event from "../../components/Event/event.jsx";
import TeamComponent from "../../components/Team/team.jsx";
import Spacer from "../../components/Spacer/spacer.jsx";
import "./profile.css";
import Teams from "../../components/Teams/teams.jsx";
import { getMe } from "../../api/users.js";
import { useAuth } from "../../context/AuthContext.jsx";

const PROFILE_TABS = [
  { id: "informations", label: "Informations" },
  { id: "teams", label: "Teams", disabled: true },
  { id: "matchs", label: "Matchs", disabled: true },
  { id: "succes", label: "Succès", disabled: true },
];

const MOCK_MATCH = {
  league: "1001 Griffes",
  game: "Waven",
  status: "En live",
  home: { name: "Team Alpha", logo: "lol1.webp" },
  away: { name: "Team Beta", logo: "lol2.webp" },
  score: { home: 0, away: 0 },
  date: "04.04.2023",
};

const MOCK_EVENTS = [
  { image: "event1.webp", name: "event1", date: "17/06/2024" },
  { image: "event2.webp", name: "event2", date: "24/06/2024" },
];

const MOCK_TEAMS = [
  {
    image: "./team1.webp",
    name: "Team Alpha",
    members: "5 membres",
    imageGame: "f.webp",
  },
  { image: "./team2.webp", name: "Team Beta", members: "4 membres" },
  { image: "./logo.webp", name: "Team Gamma", members: "6 membres" },
  { image: "./lol2.webp", name: "Team Delta", members: "3 membres" },
];

function Profile() {
  const [activeTab, setActiveTab] = useState("informations");
  const { token } = useAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }
    getMe(token)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement du profil :", err);
      })
      .finally(() => setLoading(false));
  }, [token]);

  if (loading) {
    return (
      <div className="profile">
        <p>Chargement…</p>
      </div>
    );
  }

  const data = {
    bigImage: "bg.webp",
    smallImage: user?.photo ? `${baseUrl}${user.photo}.webp` : "lol1.webp",
    name: user ? `${user.firstName} ${user.name}` : "Utilisateur",
  };

  return (
    <div className="profile">
      <ProfileHeader props={data} />
      <SegmentedTabs
        tabs={PROFILE_TABS}
        value={activeTab}
        onChange={setActiveTab}
      />
      <Spacer size="24px" />

      <div className="profile-content">
        {/* Colonne gauche : Match + Events */}
        <div className="profile-col-left">
          <Title
            title="MATCH EN COURS"
            color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
            colorFont="#FFFFFF00"
            fontSize="2.5vh"
          />
          <MatchEnCours match={MOCK_MATCH} />

          <Spacer size="24px" />

          <Title
            title="EVENEMENTS RECENTS"
            color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
            colorFont="#FFFFFF00"
            fontSize="2.5vh"
            arrow={true}
          />
          <div className="profile-events">
            {MOCK_EVENTS.map((event, index) => (
              <Event key={index} data={event} />
            ))}
          </div>
        </div>

        {/* Colonne droite : Teams */}
        <div className="profile-col-right">
          <Title
            title="EQUIPES"
            color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
            colorFont="#FFFFFF00"
            fontSize="2.5vh"
            arrow={true}
          />
          <Teams data={MOCK_TEAMS} />
        </div>
      </div>
    </div>
  );
}

export default Profile;

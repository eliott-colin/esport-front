import React, { useState } from "react";
import ProfileHeader from "../../components/ProfileHeader/profileHeader.jsx";
import SegmentedTabs from "../../components/SegmentedTabs/segmentedTabs.jsx";
import MatchEnCours from "../../components/MatchEnCours/matchEnCours.jsx";
import Title from "../../components/Title/title.jsx";
import Event from "../../components/Event/event.jsx";
import TeamComponent from "../../components/Team/team.jsx";
import Spacer from "../../components/Spacer/spacer.jsx";
import "./profile.css";

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
  home: { name: "Team Alpha", logo: "lol1.png" },
  away: { name: "Team Beta", logo: "lol2.png" },
  score: { home: 0, away: 0 },
  date: "04.04.2023",
};

const MOCK_EVENTS = [
  { image: "event1.png", name: "Tournoi Waven S2", date: "17/06/2024" },
  { image: "event2.png", name: "LAN Bordeaux", date: "24/06/2024" },
];

const MOCK_TEAMS = [
  { image: "./l.png", name: "Team Alpha", members: "5 membres" },
  { image: "./lol1.png", name: "Team Beta", members: "4 membres" },
  { image: "./logo.png", name: "Team Gamma", members: "6 membres" },
  { image: "./lol2.png", name: "Team Delta", members: "3 membres" },
];

function Profile() {
  const [activeTab, setActiveTab] = useState("informations");

  const data = {
    bigImage: "bg.png",
    smallImage: "lol1.png",
    name: "PedroPedro",
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
          <div className="profile-teams">
            {MOCK_TEAMS.map((team, index) => (
              <TeamComponent
                key={index}
                image={team.image}
                name={team.name}
                members={team.members}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

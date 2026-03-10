import React, { useState } from "react";
import ProfileHeader from "../../components/ProfileHeader/profileHeader.jsx";
import SegmentedTabs from "../../components/SegmentedTabs/segmentedTabs.jsx";
import Spacer from "../../components/Spacer/spacer.jsx";
import PlayersList from "../../components/PlayersList/playersList.jsx";

const TEAMS_TABS = [
  { id: "informations", label: "Informations" },
  { id: "teams", label: "Teams", disabled: true },
  { id: "matchs", label: "Matchs", disabled: true },
  { id: "succes", label: "Succès", disabled: true },
];

const INITIAL_PLAYERS = [
  {
    id: 1,
    image: "lol1.png",
    name: "Player 1",
    members: "5 members",
  },
  {
    id: 2,
    image: "lol2.png",
    name: "Player 2",
    members: "4 members",
  },
];

function TeamDetails() {
  const [activeTab, setActiveTab] = useState("informations");
  const [players, setPlayers] = useState(INITIAL_PLAYERS);

  const handleRemovePlayer = (player) => {
    if (window.confirm(`Supprimer ${player.name} du groupe ?`)) {
      setPlayers((prev) => prev.filter((p) => p.id !== player.id));
    }
  };

  return (
    <div className="navBarSpace" style={{ paddingTop: "0", maxWidth: "100%" }}>
      <ProfileHeader
        props={{
          bigImage: "bg.png",
          smallImage: "lol1.png",
          name: "Los Diaboles",
        }}
      />
      <SegmentedTabs
        tabs={TEAMS_TABS}
        value={activeTab}
        onChange={setActiveTab}
      />
      <Spacer size="24px" />
      <PlayersList data={players} onRemovePlayer={handleRemovePlayer} />
    </div>
  );
}
export default TeamDetails;

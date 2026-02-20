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
const playersData = [
  { image: "lol1.png", name: "Player 1", members: "5 members" , imageGame: "point.png"},
  { image: "lol2.png", name: "Player 2", members: "4 members" , imageGame: "point.png"},
];

function TeamDetails() {
  const [activeTab, setActiveTab] = useState("informations");
  return (
    <div className="navBarSpace" style={{paddingTop : "0", maxWidth: "100%"}}>
      <ProfileHeader props={{ bigImage: "bg.png", smallImage: "lol1.png", name: "Los Diaboles" }} />
      <SegmentedTabs tabs={TEAMS_TABS} value={activeTab} onChange={setActiveTab} />
      <Spacer size="24px" />
      {/* {activeTab === "informations" && <PlayersList />} */}
      <PlayersList data={playersData} />

    </div>
  );
}
export default TeamDetails;
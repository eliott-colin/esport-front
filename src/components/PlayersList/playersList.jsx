import React from "react";
import PlayerTab from "../PlayerTab/playerTab.jsx";
import "./playersList.css";


function PlayersList({data}) {
  return (
    <div className="players-section">
      <h1>PlayersList</h1>
      <div className="players-wrapper">
        {data.map((element, index) => (
        <PlayerTab key={index} data={element} />
          ))}
      </div>
    </div>
  );
}

export default PlayersList;
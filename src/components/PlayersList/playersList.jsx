import React from "react";
import PlayerTab from "../PlayerTab/playerTab.jsx";
import "./playersList.css";

function PlayersList({ data, onRemovePlayer }) {
  return (
    <div className="players-section">
      <h1>PlayersList</h1>
      <div className="players-wrapper">
        {data.map((element, index) => (
          <PlayerTab key={element.id || index} data={element} onRemove={onRemovePlayer} />
        ))}
      </div>
    </div>
  );
}

export default PlayersList;

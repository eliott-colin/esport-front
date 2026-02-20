import React from "react";
import "./playerTab.css";

function PlayerTab({ data }) {
  return (
    <div className="player-wrapper">
      <div className="player-image-wrapper">
        <img src={"/finalfocus/" + data.image} alt={data.name} />
      </div>
      <div className="player-text-wrapper">
        <p>{data.name}</p>
      </div>
      <div
        className="player-game-wrapper"
        style={{ backgroundImage: `url('/finalfocus/${data.imageGame}')` }}
      ></div>
    </div>
  );
}

export default PlayerTab;

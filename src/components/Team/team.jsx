import React from "react";
import "./team.css";

function TeamComponent(data) {
  console.log(data)
  return (
    <div className="team-wrapper">
      <div className="team-image-wrapper">
        <img src={data.data.image} alt={data.data.name} />
      </div>
      <div className="team-text-wrapper">
        <h2>{data.data.name}</h2>
        <p>{data.data.members}</p>
      </div>
      <div
        className="team-game-wrapper"
        style={{ backgroundImage: `url('${data.data.imageGame}')` }}
      ></div>
    </div>
  );
}

export default TeamComponent;

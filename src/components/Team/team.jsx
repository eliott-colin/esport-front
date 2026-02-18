import React from "react";
import "./team.css"

function TeamComponent(data) {
    return (
        <div className="team-wrapper">
            <div className="team-image-wrapper">
                <img src={data.image} alt={data.name} />
            </div>
            <div className="team-text-wrapper">
                <h2>{data.name}</h2>
                <p>{data.members}</p>
            </div>
            <div className="team-game-wrapper" style={{backgroundImage : "url('./f.png')",}}></div>
        </div>

    )
}

export default TeamComponent
import React from "react";
import "./matchEnCours.css";

function MatchEnCours({ match }) {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="match-card">
      <div className="match-card-header">
        <span className="match-card-league">
          {match.league} &bull; {match.game}
        </span>
        <span className="match-card-status">
          <span className="match-card-status-dot" />
          {match.status}
        </span>
      </div>

      <div className="match-card-body">
        <div className="match-card-team">
          <img
            className="match-card-team-logo"
            src={`${baseUrl}${match.home.logo}`}
            alt={match.home.name}
          />
          <span className="match-card-team-name">{match.home.name}</span>
        </div>

        <span className="match-card-score">
          {match.score.home} vs {match.score.away}
        </span>

        <div className="match-card-team">
          <img
            className="match-card-team-logo"
            src={`${baseUrl}${match.away.logo}`}
            alt={match.away.name}
          />
          <span className="match-card-team-name">{match.away.name}</span>
        </div>
      </div>

      <p className="match-card-date">{match.date}</p>
    </div>
  );
}

export default MatchEnCours;


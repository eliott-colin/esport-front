import React from "react";
import "./universitiesContainer.css";
import { Link } from "react-router-dom";

function UniversitiesContainer({ data }) {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="universities-grid-section">
      <div className="universities-grid-wrapper">
        {data.map((uni, index) => (
          <Link
            key={uni.id || index}
            to={`/finalfocus/universities/${uni.id || index}`}
            style={{ textDecoration: "none" }}
          >
            <div className="event-container">
              <div className="event-image-wrapper">
                <img
                  className="event-img"
                  src={`${baseUrl}${uni.image}`}
                  alt={uni.name}
                />
              </div>
              <div className="event-info">
                <p className="event-h2 p-event">{uni.name}</p>
                <p className="smallText p-event">
                  {uni.ville} - {uni.postalCode}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UniversitiesContainer;

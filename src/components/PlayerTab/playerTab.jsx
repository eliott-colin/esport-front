import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./playerTab.css";

function PlayerTab({ data, onRemove }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="player-wrapper">
      <div className="player-image-wrapper">
        <img src={"/finalfocus/" + data.image} alt={data.name} />
      </div>
      <div className="player-text-wrapper">
        <p>{data.name}</p>
      </div>
      <div className="player-actions" ref={menuRef}>
        <button
          className="player-dots-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Options"
          aria-expanded={menuOpen}
        >
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </button>
        {menuOpen && (
          <div className="player-dropdown">
            <button
              className="player-dropdown-item"
              onClick={() => {
                setMenuOpen(false);
                navigate(`/finalfocus/profile/${data.id || ""}`);
              }}
            >
              Voir le profil
            </button>
            <button
              className="player-dropdown-item player-dropdown-item--danger"
              onClick={() => {
                setMenuOpen(false);
                if (onRemove) onRemove(data);
              }}
            >
              Supprimer du groupe
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlayerTab;

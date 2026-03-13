import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProfileHeader from "../../components/ProfileHeader/profileHeader.jsx";
import SegmentedTabs from "../../components/SegmentedTabs/segmentedTabs.jsx";
import Spacer from "../../components/Spacer/spacer.jsx";
import Title from "../../components/Title/title.jsx";
import "./universityDetails.css";

// ── Tabs ──
const UNI_TABS = [
  { id: "informations", label: "Informations" },
  { id: "teams", label: "Équipes" },
];

// ── Mock data basé sur le schéma Prisma ──
// universities → cities → departements → regions

const MOCK_UNIVERSITIES = {
  1: {
    Id_universities: 1,
    name: "Université de Bordeaux",
    image: "lol1.webp",
    cities: {
      Id_cities: 1,
      name: "Bordeaux",
      departements: {
        Id_departements: 33,
        name: "Gironde",
        code: "33",
        regions: { Id_regions: 1, name: "Nouvelle-Aquitaine" },
      },
    },
    postalCode: "33000",
  },
  2: {
    Id_universities: 2,
    name: "Université de Paris",
    image: "lol2.webp",
    cities: {
      Id_cities: 2,
      name: "Paris",
      departements: {
        Id_departements: 75,
        name: "Paris",
        code: "75",
        regions: { Id_regions: 2, name: "Île-de-France" },
      },
    },
    postalCode: "75005",
  },
  3: {
    Id_universities: 3,
    name: "Université de Lyon",
    image: "lol1.webp",
    cities: {
      Id_cities: 3,
      name: "Lyon",
      departements: {
        Id_departements: 69,
        name: "Rhône",
        code: "69",
        regions: { Id_regions: 3, name: "Auvergne-Rhône-Alpes" },
      },
    },
    postalCode: "69001",
  },
  4: {
    Id_universities: 4,
    name: "Université de Lille",
    image: "lol2.webp",
    cities: {
      Id_cities: 4,
      name: "Lille",
      departements: {
        Id_departements: 59,
        name: "Nord",
        code: "59",
        regions: { Id_regions: 4, name: "Hauts-de-France" },
      },
    },
    postalCode: "59000",
  },
};

// Teams associées à chaque université (via users → isPart → teams)
const MOCK_UNI_TEAMS = {
  1: [
    { Id_teams: 1, name: "Team Alpha", dateCreate: "2025-01-10", logo: "team1.webp", memberCount: 5 },
    { Id_teams: 2, name: "Team Beta", dateCreate: "2025-02-14", logo: "team2.webp", memberCount: 4 },
    { Id_teams: 5, name: "Bordeaux Esport", dateCreate: "2025-05-01", logo: "team3.webp", memberCount: 6 },
  ],
  2: [
    { Id_teams: 3, name: "Team Gamma", dateCreate: "2025-03-20", logo: "team3.webp", memberCount: 6 },
    { Id_teams: 6, name: "Paris Legends", dateCreate: "2025-04-15", logo: "logo.webp", memberCount: 5 },
  ],
  3: [
    { Id_teams: 4, name: "Team Delta", dateCreate: "2025-04-05", logo: "logo.webp", memberCount: 3 },
    { Id_teams: 7, name: "Lyon Gaming", dateCreate: "2025-06-10", logo: "team1.webp", memberCount: 4 },
  ],
  4: [
    { Id_teams: 8, name: "Lille Esport", dateCreate: "2025-07-20", logo: "team2.webp", memberCount: 5 },
  ],
};

// Nombre de joueurs de chaque université
const MOCK_UNI_PLAYERS_COUNT = { 1: 14, 2: 11, 3: 7, 4: 5 };

function UniversityDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("informations");
  const baseUrl = import.meta.env.BASE_URL;

  const university = MOCK_UNIVERSITIES[id] || MOCK_UNIVERSITIES[1];
  const teams = MOCK_UNI_TEAMS[id] || MOCK_UNI_TEAMS[1];
  const playersCount = MOCK_UNI_PLAYERS_COUNT[id] || 0;

  return (
    <div
      className="university-details navBarSpace"
      style={{ paddingTop: "0", maxWidth: "100%" }}
    >
      <ProfileHeader
        props={{
          bigImage: "bg.webp",
          smallImage: university.image,
          name: university.name,
        }}
      />
      <SegmentedTabs
        tabs={UNI_TABS}
        value={activeTab}
        onChange={setActiveTab}
      />
      <Spacer size="24px" />

      {/* ═══════ TAB : Informations ═══════ */}
      {activeTab === "informations" && (
        <div className="university-details-content">
          {/* Colonne gauche */}
          <div className="university-details-col-left">
            <Title
              title="LOCALISATION"
              color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
              colorFont="#FFFFFF00"
              fontSize="2.5vh"
            />
            <div className="university-map-card">
              <iframe
                title="Carte"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${getOSMBBox(university.cities.name)}&layer=mapnik&marker=${getOSMMarker(university.cities.name)}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <Spacer size="24px" />

            <Title
              title="STATISTIQUES"
              color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
              colorFont="#FFFFFF00"
              fontSize="2.5vh"
            />
            <div className="university-stats-card">
              <div className="university-stat-item">
                <span className="university-stat-value">{teams.length}</span>
                <span className="university-stat-label">Équipes</span>
              </div>
              <div className="university-stat-item">
                <span className="university-stat-value">{playersCount}</span>
                <span className="university-stat-label">Joueurs</span>
              </div>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="university-details-col-right">
            <Title
              title="INFORMATIONS"
              color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
              colorFont="#FFFFFF00"
              fontSize="2.5vh"
            />
            <div className="university-info-card">
              <div className="university-info-row">
                <span className="university-info-label">Université</span>
                <span className="university-info-value">{university.name}</span>
              </div>
              <div className="university-info-row">
                <span className="university-info-label">Ville</span>
                <span className="university-info-value">
                  {university.cities.name}
                </span>
              </div>
              <div className="university-info-row">
                <span className="university-info-label">Code postal</span>
                <span className="university-info-value">
                  {university.postalCode}
                </span>
              </div>
              <div className="university-info-row">
                <span className="university-info-label">Département</span>
                <span className="university-info-value">
                  {university.cities.departements.name} (
                  {university.cities.departements.code})
                </span>
              </div>
              <div className="university-info-row">
                <span className="university-info-label">Région</span>
                <span className="university-info-value">
                  {university.cities.departements.regions.name}
                </span>
              </div>
            </div>

            <Spacer size="24px" />

            <Title
              title="ÉQUIPES"
              color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
              colorFont="#FFFFFF00"
              fontSize="2.5vh"
              arrow={true}
            />
            <div className="university-teams-card">
              {teams.map((team) => (
                <Link
                  key={team.Id_teams}
                  to={`/finalfocus/teams/${team.Id_teams}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="university-team-row">
                    <img
                      className="university-team-logo"
                      src={`${baseUrl}${team.logo}`}
                      alt={team.name}
                    />
                    <div className="university-team-info">
                      <span className="university-team-name">{team.name}</span>
                      <span className="university-team-members">
                        {team.memberCount} membres
                      </span>
                    </div>
                    <span className="university-team-date">
                      Créée le{" "}
                      {new Date(team.dateCreate).toLocaleDateString("fr-FR")}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══════ TAB : Équipes ═══════ */}
      {activeTab === "teams" && (
        <div className="university-details-content">
          <div
            className="university-details-col-left"
            style={{ flex: "1 1 100%" }}
          >
            <Title
              title={`ÉQUIPES DE ${university.name.toUpperCase()}`}
              color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
              colorFont="#FFFFFF00"
              fontSize="2.5vh"
            />
            <div className="university-teams-card">
              {teams.length === 0 && (
                <p
                  style={{
                    color: "#8b8b9e",
                    fontFamily: "Roboto, sans-serif",
                    textAlign: "center",
                  }}
                >
                  Aucune équipe pour cette université.
                </p>
              )}
              {teams.map((team) => (
                <Link
                  key={team.Id_teams}
                  to={`/finalfocus/teams/${team.Id_teams}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="university-team-row">
                    <img
                      className="university-team-logo"
                      src={`${baseUrl}${team.logo}`}
                      alt={team.name}
                    />
                    <div className="university-team-info">
                      <span className="university-team-name">{team.name}</span>
                      <span className="university-team-members">
                        {team.memberCount} membres
                      </span>
                    </div>
                    <span className="university-team-date">
                      Créée le{" "}
                      {new Date(team.dateCreate).toLocaleDateString("fr-FR")}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Coordonnées approx par ville pour OpenStreetMap embed ──
function getOSMBBox(cityName) {
  const coords = {
    Bordeaux: "-0.6300,44.8100,-0.5400,44.8700",
    Paris: "2.2800,48.8200,2.4200,48.9000",
    Lyon: "4.7900,45.7200,4.8800,45.7900",
    Lille: "3.0100,50.6000,3.1100,50.6600",
    Toulouse: "1.3900,43.5700,1.4900,43.6400",
    Marseille: "5.3300,43.2600,5.4200,43.3200",
    Nantes: "-1.6100,47.1900,-1.5100,47.2500",
    Strasbourg: "7.7100,48.5500,7.8100,48.6100",
    Rennes: "-1.7200,48.0800,-1.6200,48.1400",
    Montpellier: "3.8200,43.5800,3.9200,43.6400",
    Nice: "7.2200,43.6800,7.3200,43.7400",
    Grenoble: "5.6800,45.1500,5.7800,45.2100",
  };
  return coords[cityName] || coords["Paris"];
}

function getOSMMarker(cityName) {
  const markers = {
    Bordeaux: "44.8378,-0.5792",
    Paris: "48.8566,2.3522",
    Lyon: "45.7640,4.8357",
    Lille: "50.6292,3.0573",
    Toulouse: "43.6047,1.4442",
    Marseille: "43.2965,5.3698",
    Nantes: "47.2184,-1.5536",
    Strasbourg: "48.5734,7.7521",
    Rennes: "48.1173,-1.6778",
    Montpellier: "43.6108,3.8767",
    Nice: "43.7102,7.2620",
    Grenoble: "45.1885,5.7245",
  };
  return markers[cityName] || markers["Paris"];
}

export default UniversityDetails;

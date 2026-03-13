import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "../../components/ProfileHeader/profileHeader.jsx";
import SegmentedTabs from "../../components/SegmentedTabs/segmentedTabs.jsx";
import Spacer from "../../components/Spacer/spacer.jsx";
import Title from "../../components/Title/title.jsx";
import MatchEnCours from "../../components/MatchEnCours/matchEnCours.jsx";
import "./eventDetails.css";

// ── Tabs ──
const EVENT_TABS = [
  { id: "informations", label: "Informations" },
  { id: "brackets", label: "Brackets" },
  { id: "participants", label: "Participants" },
  { id: "stats", label: "Statistiques" },
];

// ── Mock data basé sur le schéma Prisma ──

const MOCK_EVENT = {
  Id_event: 1,
  name: "Tournoi Waven S2",
  eventDate: "2026-03-15T14:00:00.000Z",
  description:
    "Le tournoi Waven Saison 2 est un événement esport universitaire majeur. Rejoignez les meilleures équipes universitaires de France dans une compétition intense sur Waven. Des prix exclusifs et une ambiance de folie vous attendent !",
  maxTeam: 16,
  leaderboardType: "actif",
  Id_eventGames: 1,
  eventGames: {
    Id_eventGames: 1,
    name: "Waven",
  },
};

const MOCK_PARTICIPANTS = [
  {
    id_user: 1,
    Id_event: 1,
    Id_teams: 1,
    role: "Capitaine",
    users: {
      id_user: 1,
      name: "Dupont",
      firstname: "Jean",
      email: "jean.dupont@univ-bordeaux.fr",
      photo: "lol1",
    },
    teams: { Id_teams: 1, name: "Team Alpha" },
  },
  {
    id_user: 2,
    Id_event: 1,
    Id_teams: 1,
    role: "Joueur",
    users: {
      id_user: 2,
      name: "Martin",
      firstname: "Lucas",
      email: "lucas.martin@univ-bordeaux.fr",
      photo: "lol2",
    },
    teams: { Id_teams: 1, name: "Team Alpha" },
  },
  {
    id_user: 3,
    Id_event: 1,
    Id_teams: 2,
    role: "Capitaine",
    users: {
      id_user: 3,
      name: "Bernard",
      firstname: "Marie",
      email: "marie.bernard@univ-paris.fr",
      photo: "lol1",
    },
    teams: { Id_teams: 2, name: "Team Beta" },
  },
  {
    id_user: 4,
    Id_event: 1,
    Id_teams: 3,
    role: "Capitaine",
    users: {
      id_user: 4,
      name: "Leroy",
      firstname: "Antoine",
      email: "antoine.leroy@univ-lyon.fr",
      photo: "lol2",
    },
    teams: { Id_teams: 3, name: "Team Gamma" },
  },
  {
    id_user: 5,
    Id_event: 1,
    Id_teams: 4,
    role: "Capitaine",
    users: {
      id_user: 5,
      name: "Moreau",
      firstname: "Sophie",
      email: "sophie.moreau@univ-lille.fr",
      photo: "lol1",
    },
    teams: { Id_teams: 4, name: "Team Delta" },
  },
];

const MOCK_TEAMS = [
  {
    Id_teams: 1,
    name: "Team Alpha",
    dateCreate: "2025-01-10",
    logo: "team1.png",
    memberCount: 5,
  },
  {
    Id_teams: 2,
    name: "Team Beta",
    dateCreate: "2025-02-14",
    logo: "team2.png",
    memberCount: 4,
  },
  {
    Id_teams: 3,
    name: "Team Gamma",
    dateCreate: "2025-03-20",
    logo: "team3.png",
    memberCount: 6,
  },
  {
    Id_teams: 4,
    name: "Team Delta",
    dateCreate: "2025-04-05",
    logo: "logo.png",
    memberCount: 3,
  },
];

const MOCK_BRACKETS = [
  {
    Id_brackets: 1,
    Id_event: 1,
    matchs: [
      {
        Id_matchs: 1,
        round: "Demi-finale 1",
        dateMatch: "2026-03-15T14:00:00.000Z",
        score: "2 - 1",
        team1: { name: "Team Alpha", logo: "team1.png" },
        team2: { name: "Team Beta", logo: "team2.png" },
        winner: "Team Alpha",
      },
      {
        Id_matchs: 2,
        round: "Demi-finale 2",
        dateMatch: "2026-03-15T16:00:00.000Z",
        score: "3 - 0",
        team1: { name: "Team Gamma", logo: "team3.png" },
        team2: { name: "Team Delta", logo: "logo.png" },
        winner: "Team Gamma",
      },
    ],
  },
  {
    Id_brackets: 2,
    Id_event: 1,
    matchs: [
      {
        Id_matchs: 3,
        round: "Finale",
        dateMatch: "2026-03-16T18:00:00.000Z",
        score: null,
        team1: { name: "Team Alpha", logo: "team1.png" },
        team2: { name: "Team Gamma", logo: "team3.png" },
        winner: null,
      },
    ],
  },
];

const MOCK_REFEREES = [
  {
    id_user: 10,
    Id_event: 1,
    users: {
      id_user: 10,
      name: "Durand",
      firstname: "Pierre",
      email: "pierre.durand@univ-bordeaux.fr",
      photo: "lol1",
    },
  },
  {
    id_user: 11,
    Id_event: 1,
    users: {
      id_user: 11,
      name: "Petit",
      firstname: "Claire",
      email: "claire.petit@univ-paris.fr",
      photo: "lol2",
    },
  },
];

const MOCK_EVENT_STATS = [
  { Id_customStats: 1, statName: "Kills", statValue: "Total" },
  { Id_customStats: 2, statName: "Deaths", statValue: "Total" },
  { Id_customStats: 3, statName: "Assists", statValue: "Total" },
];

// ── Match en cours (live) mock ──
const MOCK_LIVE_MATCH = {
  league: MOCK_EVENT.name,
  game: MOCK_EVENT.eventGames.name,
  status: "En live",
  home: { name: "Team Alpha", logo: "team1.png" },
  away: { name: "Team Gamma", logo: "team3.png" },
  score: { home: 1, away: 1 },
  date: "15.03.2026",
};

function EventDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("informations");
  const baseUrl = import.meta.env.BASE_URL;

  const event = MOCK_EVENT;

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    const d = new Date(dateStr);
    return d.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const statusLabel = {
    actif: "Actif",
    inactif: "Inactif",
    en_attente: "En attente",
  };

  return (
    <div
      className="event-details navBarSpace"
      style={{ paddingTop: "0", maxWidth: "100%" }}
    >
      <ProfileHeader
        props={{
          bigImage: "bg.png",
          smallImage: "event1.png",
          name: event.name,
        }}
      />
      <SegmentedTabs
        tabs={EVENT_TABS}
        value={activeTab}
        onChange={setActiveTab}
      />
      <Spacer size="24px" />

      {/* ═══════ TAB : Informations ═══════ */}
      {activeTab === "informations" && (
        <div className="event-details-content">
          {/* Colonne gauche */}
          <div className="event-details-col-left">
            <Title
              title="MATCH EN DIRECT"
              color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
              colorFont="#FFFFFF00"
              fontSize="2.5vh"
            />
            <MatchEnCours match={MOCK_LIVE_MATCH} />

            <Spacer size="24px" />

            <Title
              title="DESCRIPTION"
              color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
              colorFont="#FFFFFF00"
              fontSize="2.5vh"
            />
            <div className="event-description-card">
              <p className="event-description-text">{event.description}</p>
            </div>

            <Spacer size="24px" />

            <Title
              title="ARBITRES"
              color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
              colorFont="#FFFFFF00"
              fontSize="2.5vh"
            />
            <div className="event-referees-card">
              {MOCK_REFEREES.map((ref) => (
                <div key={ref.id_user} className="event-referee-row">
                  <img
                    className="event-referee-avatar"
                    src={`${baseUrl}${ref.users.photo}.png`}
                    alt={ref.users.firstname}
                  />
                  <div>
                    <div className="event-referee-name">
                      {ref.users.firstname} {ref.users.name}
                    </div>
                    <div className="event-referee-email">{ref.users.email}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite */}
          <div className="event-details-col-right">
            <Title
              title="INFORMATIONS"
              color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
              colorFont="#FFFFFF00"
              fontSize="2.5vh"
            />
            <div className="event-info-card">
              <div className="event-info-row">
                <span className="event-info-label">Date</span>
                <span className="event-info-value">
                  {formatDate(event.eventDate)}
                </span>
              </div>
              <div className="event-info-row">
                <span className="event-info-label">Jeu</span>
                <span className="event-info-value">
                  {event.eventGames.name}
                </span>
              </div>
              <div className="event-info-row">
                <span className="event-info-label">Max équipes</span>
                <span className="event-info-value">{event.maxTeam}</span>
              </div>
              <div className="event-info-row">
                <span className="event-info-label">Équipes inscrites</span>
                <span className="event-info-value">
                  {MOCK_TEAMS.length} / {event.maxTeam}
                </span>
              </div>
              <div className="event-info-row">
                <span className="event-info-label">Statut</span>
                <span
                  className={`event-status-badge event-status-badge--${event.leaderboardType}`}
                >
                  <span className="event-status-dot" />
                  {statusLabel[event.leaderboardType] || event.leaderboardType}
                </span>
              </div>
            </div>

            <Spacer size="24px" />

            <Title
              title="ÉQUIPES INSCRITES"
              color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
              colorFont="#FFFFFF00"
              fontSize="2.5vh"
            />
            <div className="event-teams-card">
              {MOCK_TEAMS.map((team) => (
                <div key={team.Id_teams} className="event-team-row">
                  <img
                    className="event-team-logo"
                    src={`${baseUrl}${team.logo}`}
                    alt={team.name}
                  />
                  <span className="event-team-name">{team.name}</span>
                  <span className="event-team-members">
                    {team.memberCount} membres
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══════ TAB : Brackets ═══════ */}
      {activeTab === "brackets" && (
        <div className="event-details-content">
          <div className="event-details-col-left" style={{ flex: "1 1 100%" }}>
            {MOCK_BRACKETS.map((bracket) => (
              <div key={bracket.Id_brackets}>
                <Title
                  title={`BRACKET #${bracket.Id_brackets}`}
                  color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
                  colorFont="#FFFFFF00"
                  fontSize="2.5vh"
                />
                <div className="event-brackets-card">
                  {bracket.matchs.map((match) => (
                    <div key={match.Id_matchs} className="event-match-row">
                      <div>
                        <div className="event-match-round">{match.round}</div>
                        <div className="event-match-date">
                          {formatDate(match.dateMatch)}
                        </div>
                      </div>
                      <div className="event-match-teams">
                        <img
                          className="event-match-team-logo"
                          src={`${baseUrl}${match.team1.logo}`}
                          alt={match.team1.name}
                        />
                        <span className="event-match-team-name">
                          {match.team1.name}
                        </span>
                        <span className="event-match-vs">VS</span>
                        <span className="event-match-team-name">
                          {match.team2.name}
                        </span>
                        <img
                          className="event-match-team-logo"
                          src={`${baseUrl}${match.team2.logo}`}
                          alt={match.team2.name}
                        />
                      </div>
                      <span className="event-match-score">
                        {match.score || "À venir"}
                      </span>
                    </div>
                  ))}
                </div>
                <Spacer size="16px" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ═══════ TAB : Participants ═══════ */}
      {activeTab === "participants" && (
        <div className="event-details-content">
          <div className="event-details-col-left" style={{ flex: "1 1 100%" }}>
            {MOCK_TEAMS.map((team) => {
              const teamParticipants = MOCK_PARTICIPANTS.filter(
                (p) => p.Id_teams === team.Id_teams,
              );
              if (teamParticipants.length === 0) return null;
              return (
                <div key={team.Id_teams}>
                  <Title
                    title={team.name.toUpperCase()}
                    color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
                    colorFont="#FFFFFF00"
                    fontSize="2.5vh"
                  />
                  <div className="event-teams-card">
                    {teamParticipants.map((p) => (
                      <div key={p.id_user} className="event-team-row">
                        <img
                          className="event-team-logo"
                          src={`${baseUrl}${p.users.photo}.png`}
                          alt={p.users.firstname}
                        />
                        <div>
                          <span className="event-team-name">
                            {p.users.firstname} {p.users.name}
                          </span>
                          <div className="event-referee-email">{p.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Spacer size="16px" />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ═══════ TAB : Statistiques ═══════ */}
      {activeTab === "stats" && (
        <div className="event-details-content">
          <div className="event-details-col-left" style={{ flex: "1 1 100%" }}>
            <Title
              title="STATISTIQUES DE L'ÉVÉNEMENT"
              color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
              colorFont="#FFFFFF00"
              fontSize="2.5vh"
            />
            <div className="event-stats-card">
              <div className="event-stat-item">
                <span className="event-stat-value">{MOCK_TEAMS.length}</span>
                <span className="event-stat-label">Équipes</span>
              </div>
              <div className="event-stat-item">
                <span className="event-stat-value">
                  {MOCK_PARTICIPANTS.length}
                </span>
                <span className="event-stat-label">Participants</span>
              </div>
              <div className="event-stat-item">
                <span className="event-stat-value">
                  {MOCK_BRACKETS.reduce((acc, b) => acc + b.matchs.length, 0)}
                </span>
                <span className="event-stat-label">Matchs</span>
              </div>
              <div className="event-stat-item">
                <span className="event-stat-value">{MOCK_REFEREES.length}</span>
                <span className="event-stat-label">Arbitres</span>
              </div>
            </div>

            <Spacer size="24px" />

            <Title
              title="CUSTOM STATS (EVENT GAMES)"
              color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
              colorFont="#FFFFFF00"
              fontSize="2.5vh"
            />
            <div className="event-info-card">
              {MOCK_EVENT_STATS.map((stat) => (
                <div key={stat.Id_customStats} className="event-info-row">
                  <span className="event-info-label">{stat.statName}</span>
                  <span className="event-info-value">{stat.statValue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventDetails;

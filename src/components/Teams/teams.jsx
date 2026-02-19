import TeamComponent from "../Team/team";
import "./teams.css";
import { Link } from "react-router-dom";

function Teams() {
  return (
    <div className="teams-wrapper">
      {[
        { image: "team1.png", name: "Team 1", members: "5 members" , imageGame: "f.png"},
        { image: "team2.png", name: "Team 2", members: "4 members" , imageGame: "f.png"},
        { image: "team3.png", name: "Team 3", members: "6 members" , imageGame: "f.png"},
        { image: "team1.png", name: "Team 4", members: "5 members" , imageGame: "f.png"},
        { image: "team2.png", name: "Team 5", members: "4 members" , imageGame: "f.png"},
        { image: "team3.png", name: "Team 6", members: "6 members" , imageGame: "f.png"},
      ].map((element, index) => (
        
        <Link to={`/finalfocus/teams/${index}`} style={{textDecoration: "none"}}>
          <TeamComponent key={index} data={element} />
        </Link>
      ))}
    </div>
  );
}

export default Teams;

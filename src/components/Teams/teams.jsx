import TeamComponent from "../Team/team";
import "./teams.css";
import { Link } from "react-router-dom";

function Teams({data}) {
  return (
      <div className="teams-section">
        <div className="teams-wrapper">
        {data.map((element, index) => (
          <Link to={`/finalfocus/teams/${index}`} style={{textDecoration: "none"}}>
            <TeamComponent key={index} data={element} />
          </Link>
        ))}
        </div>
      </div>
  );
}

export default Teams;

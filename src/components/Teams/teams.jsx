import TeamComponent from "../Team/team";
import "./teams.css";

function Teams() {
  return (
    <div className="teams-wrapper">
      <TeamComponent image="./l.png" name="Team Alpha" members="5" />
      <TeamComponent image="./lol1.png" name="Team Beta" members="5" />
      <TeamComponent image="./logo.png" name="Team Gamma" members="5" />
      <TeamComponent image="./logo.png" name="Team Gamma" members="5" />
    </div>
  );
}

export default Teams;

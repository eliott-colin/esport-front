import React from "react";
import Title from "../../components/Title/title";
import Teams from "../../components/Teams/teams"
import Button from "../../components/Button/button";

function Team() {
  return (
    <div className="navBarSpace">
      <Title
        title="EQUIPES"
        color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
        colorFont="#FFFFFF00"
        fontSize="24px"
        arrow={false}/>
        <Teams />
        <Button data={{text: "Voir plus",color: "linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)", colorFont: "#FFFFFF",fontSize: "16px"}} />
    </div>
  );
}

export default Team;

import React from "react";
import Title from "../../components/Title/title";
import Teams from "../../components/Teams/teams";
import Button from "../../components/Button/button";

function Team() {
  let data = [
    {
      image: "team1.png",
      name: "Team 1",
      members: "5 members",
      imageGame: "f.png",
    },
    {
      image: "team2.png",
      name: "Team 2",
      members: "4 members",
      imageGame: "f.png",
    },
    {
      image: "team3.png",
      name: "Team 3",
      members: "6 members",
      imageGame: "f.png",
    },
    {
      image: "team1.png",
      name: "Team 4",
      members: "5 members",
      imageGame: "f.png",
    },
    {
      image: "team2.png",
      name: "Team 5",
      members: "4 members",
      imageGame: "f.png",
    },
    {
      image: "team3.png",
      name: "Team 6",
      members: "6 members",
      imageGame: "f.png",
    },
  ];
  return (
    <div className="navBarSpace">
      <Title
        title="EQUIPES"
        color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
        colorFont="#FFFFFF00"
        fontSize="24px"
        arrow={false}
      />
      <Teams data={data} />
      <Button
        data={{
          text: "Voir plus",
          color: "linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)",
          colorFont: "#FFFFFF",
          fontSize: "16px",
        }}
      />
    </div>
  );
}

export default Team;

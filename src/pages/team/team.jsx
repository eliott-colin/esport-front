import React from "react";
import Title from "../../components/Title/title";
import Teams from "../../components/Teams/teams";

function Team() {
    return (
        <div>
            <Title title="EQUIPES" color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)" colorFont="#FFFFFF00" fontSize="24px" arrow={false} />
            <Teams />
        </div>
    )
}

export default Team

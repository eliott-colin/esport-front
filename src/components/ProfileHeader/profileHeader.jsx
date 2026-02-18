import React from "react";
import "./profileHeader.css";
import Title from "../title/title.jsx";
import Spacer from "../Spacer/spacer.jsx";

function ProfileHeader({ props }) {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <>
      <div className="profile-header">
        <div className="profileBg">
          <img src={`${baseUrl}${props.bigImage}`} alt="Profile BackGround" />
        </div>
        <div className="profilePic">
          <img src={`${baseUrl}${props.smallImage}`} alt="Profile Image" />
        </div>
        <Spacer size="60px" />
        <Title
          title={props.name}
          color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
          colorFont="#FFFFFF00"
          fontSize="2.5vh"
          center="true"
        />
      </div>
    </>
  );
}

export default ProfileHeader;

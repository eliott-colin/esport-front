import React from "react";
import ProfileHeader from "../../components/ProfileHeader/profileHeader.jsx";

function Profile() {
  const data = {
    bigImage: "bg.png",
    smallImage: "lol1.png",
    name: "PedroPedro",
  };
  return (
    <>
      <ProfileHeader props={data} />
      <div>Profile</div>
    </>
  );
}

export default Profile;

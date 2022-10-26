import React from "react";
import Preloader from "../../customs/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <>
      <div>
        <img src={props.profile.photos.large} alt=""/>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </>
  )
}

export default ProfileInfo;
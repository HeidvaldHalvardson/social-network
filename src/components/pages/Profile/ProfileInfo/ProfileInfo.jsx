import React from "react";
import Preloader from "../../customs/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import userPhoto from "../../../../assects/images/user.jpg";
import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader/>
  }

  const onPhotoSelected = (evt) => {
    if (evt.target.files.length) {
      props.savePhoto(evt.target.files[0])
    }
  }

  return (
    <>
      <div>
        <img src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto} width={200} height={200}
             alt=""/>
        {props.isOwner && <input type={"file"} onChange={onPhotoSelected}/>}

        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

        <div>
          <p>
            <b>Name:</b> {props.profile.fullName}
          </p>
          <p>
            <b>Looking for a job:</b> {props.profile.lookingForAJob ? "yes" : "no"}
          </p>
          {props.profile.lookingForAJob &&
            <p>
              <b>My professional skills:</b> {props.profile.lookingForAJobDescription ? "yes" : "no"}
            </p>
          }
          <p>
            <b>About me:</b> {props.profile.aboutMe}
          </p>
          <p>
            <b>Contacts:</b>
            <ul>
              {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
              })}
            </ul>
          </p>
        </div>

      </div>
    </>
  )
}

const Contact = (props) => {
  if (props.contactValue) {
    return (
      <li className={style.contact}>
        <b>{props.contactTitle}:</b> {props.contactValue}
      </li>
    )
  }
}

export default ProfileInfo;
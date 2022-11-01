import React, {useState} from "react";
import Preloader from "../../customs/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import userPhoto from "../../../../assects/images/user.jpg";
import style from "./ProfileInfo.module.css";
import ProfileDataForm from "../ProfileDataForm/ProfileDataForm";

const ProfileInfo = (props) => {

  const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader/>
  }

  const onPhotoSelected = (evt) => {
    if (evt.target.files.length) {
      props.savePhoto(evt.target.files[0])
    }
  }

  const onSubmit = (formData, setStatus) => {
    props.saveProfile(formData, setStatus)
      .then( () => {
        setEditMode(false);
      })
  }

  return (
    <>
      <img src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto} width={200} height={200}
           alt=""/>
      {props.isOwner && <input type={"file"} onChange={onPhotoSelected}/>}

      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

      {editMode
        ? <ProfileDataForm profile={props.profile}
                           onSubmit={onSubmit} />
        : <ProfileData profile={props.profile}
                       isOwner={props.isOwner}
                       goToEditMode={() => {setEditMode(true)}} />}
    </>
  )
}

const ProfileData = (props) => {
  return (
    <>
      {props.isOwner && <button onClick={props.goToEditMode}>Edit</button>}
      <p>
        <b>Name:</b> {props.profile.fullName}
      </p>
      <p>
        <b>Looking for a job:</b> {props.profile.lookingForAJob ? "yes" : "no"}
      </p>
      {props.profile.lookingForAJob &&
        <p>
          <b>My professional skills:</b> {props.profile.lookingForAJobDescription}
        </p>
      }
      <p>
        <b>About me:</b> {props.profile.aboutMe}
      </p>
      <div>
        <b>Contacts:</b>
        <ul>
          {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
          })}
        </ul>
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
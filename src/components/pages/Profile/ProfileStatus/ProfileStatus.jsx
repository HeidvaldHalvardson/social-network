import React, {useState, useEffect} from "react";

const ProfileStatus = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (evt) => {
    setStatus(evt.currentTarget.value)
  }

  return (
    <>
      {!editMode
        ?
        <div>
          <span onClick={activateEditMode}>{props.status || "what's new?"}</span>
        </div>
        :
        <div>
          <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
        </div>
      }
    </>
  )
}

export default ProfileStatus;
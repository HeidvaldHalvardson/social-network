import React from "react";
import userPhoto from "../../../../assects/images/user.jpg";
import styles from "./User.module.css";
import CustomLink from "../../customs/CustomLink/CustomLink";

const User = ({user, followingInProgress, follow, unfollow}) => {

  return (
    <>
        <span>
          <div>
            <CustomLink to={`/profile/${user.id}`}>
              {<img className={styles.userPhoto}
                    src={user.photos.small !== null ? user.photos.small : userPhoto}
                    alt=""/>}
            </CustomLink>
          </div>
          <div>
            {user.followed
              ? <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                          unfollow(user.id)
                        }}>Unfollow</button>
              : <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                          follow(user.id)
                        }}>Follow</button>}
          </div>
        </span>
      <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
      <span>
          <div>{"user.location.city"}</div>
          <div>{"user.location.country"}</div>
        </span>
    </>
  )
}

export default User;
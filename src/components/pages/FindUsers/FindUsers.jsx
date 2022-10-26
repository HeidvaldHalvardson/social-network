import React from "react";
import Paginator from "../customs/Paginator/Paginator";
import User from "./User/User";

const FindUsers = (props) => {

  return (
    <>
      <Paginator currentPage={props.currentPage} pageSize={props.pageSize}
                 onPageChanged={props.onPageChanged} totalItemsCount={props.totalUsersCount}
                 portionSize={10}/>

      {props.users.map(user => <User user={user}
                                     followingInProgress={props.followingInProgress}
                                     follow={props.follow}
                                     unfollow={props.unfollow}/>)}
    </>
  )
}

export default FindUsers;
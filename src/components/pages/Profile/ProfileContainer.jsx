import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, getStatus, getUserProfile, updateStatus} from "../../../redux/profileReducer";
import {compose} from "redux";
import {withRouter} from "../../../App";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorisedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorisedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose(
  connect(mapStateToProps, {
    addPost,
    getUserProfile,
    getStatus,
    updateStatus,
  }),
  withRouter
)(ProfileContainer)

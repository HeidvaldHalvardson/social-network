import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, getStatus, getUserProfile, savePhoto, updateStatus} from "../../../redux/profileReducer";
import {compose} from "redux";
import {withRouter} from "../../../App";

class ProfileContainer extends React.Component {

  refreshProfile = () => {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorisedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <>
        <Profile isOwner={!this.props.match.params.userId} {...this.props} profile={this.props.profile} status={this.props.status} savePhoto={this.props.savePhoto}/>
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
    savePhoto
  }),
  withRouter
)(ProfileContainer)

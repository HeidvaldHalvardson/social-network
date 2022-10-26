import {connect} from "react-redux";
import React from "react";
import FindUsers from "./FindUsers";
import Preloader from "../customs/Preloader/Preloader";
import {
  follow,
  setCurrentPage,
  toogleFollowingProgress,
  unfollow,
  requestUsers
} from "../../../redux/findUsersReducer";
import {compose} from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from "../../../redux/users-selectors";

class FindUsersContainer extends React.Component {

  componentDidMount() {
    const {currentPage, pageSize} = this.props;
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    const {pageSize} = this.props;
    this.props.getUsers(pageNumber, pageSize);
  }

  render() {
    return (
      <>
        { this.props.isFetching ? <Preloader /> : null }
        <FindUsers totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toogleFollowingProgress={this.props.toogleFollowingProgress}
                   followingInProgress={this.props.followingInProgress} />
      </>
    )

  }
}


const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toogleFollowingProgress,
    getUsers: requestUsers
  })
)(FindUsersContainer)
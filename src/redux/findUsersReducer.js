import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS-TOTAL-COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE-IS-FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS = "TOOGLE-IS-FOLLOWING-PROGRESS";

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
}

export const findUserReducer = (state = initialState, action) => {

  switch (action.type) {

    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user;
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user;
        })
      }

    case SET_USERS: {
      return {
        ...state,
        users: [...action.users]
      }
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }

    case SET_USERS_TOTAL_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    }

    case TOOGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      }
    }

    case TOOGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }


    default :
      return state;
  }
}

export const followSuccess = (userId) => (
  {
    type: FOLLOW,
    userId
  }
);

export const unfollowSuccess = (userId) => (
  {
    type: UNFOLLOW,
    userId
  }
);

export const setUsers = (users) => (
  {
    type: SET_USERS,
    users
  }
)

export const setCurrentPage = (currentPage) => (
  {
    type: SET_CURRENT_PAGE,
    currentPage
  }
)

export const setTotalUsersCount = (totalUsersCount) => (
  {
    type: SET_USERS_TOTAL_COUNT,
    totalUsersCount
  }
)

export const toogleIsFetching = (isFetching) => (
  {
    type: TOOGLE_IS_FETCHING,
    isFetching
  }
)

export const toogleFollowingProgress = (isFetching, userId) => (
  {
    type: TOOGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
  }
)

export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toogleIsFetching(true));
  dispatch(setCurrentPage(page));

  const data = await usersAPI.getUsers(page, pageSize);
  dispatch(toogleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {

  dispatch(toogleFollowingProgress(true, userId))

  const response = await apiMethod(userId)
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toogleFollowingProgress(false, userId))
}

export const follow = (userId) => (dispatch) => {
  return followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
}

export const unfollow = (userId) => (dispatch) => {
  return followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

const initialState = {
  postData: [
    {id: 1, message: 'It\'s my first post', likeCount: 11},
    {id: 2, message: 'Hi, how are you?', likeCount: 12}
  ],
  profile: null,
  status: ''
}

export const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST:
      const newPost = {
        id: 1,
        message: action.newPostText,
        likeCount: 0
      }
      return {
        ...state,
        postData: [...state.postData, newPost]
      }

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }

    case DELETE_POST:
      return {
        ...state,
        postData: state.postData.filter(p => p.id !== action.postId)
      }

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      }

    default :
      return state;
  }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId)

  dispatch(setUserProfile(response.data))
};

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)

  dispatch(setStatus(response.data))
};

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
};

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file)

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
};


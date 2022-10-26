import {headerAPI} from "../api/api";

const SET_USER_DATA = "network/auth/SET-USER-DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state;
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {
    userId,
    email,
    login,
    isAuth
  }
})

export const getAuthUserData = () => async (dispatch) => {
  const data = await headerAPI.getAuthMe();

  if (data.resultCode === 0) {
    const {id, login, email} = data.data;
    dispatch(setAuthUserData(id, email, login, true))
  }
}

export const login = (email, password, rememberMe, setStatus) => async (dispatch) => {
  const data = await headerAPI.login(email, password, rememberMe)
  if (data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    setStatus(data.messages)
  }
}

export const logout = () => async (dispatch) => {
  const data = await headerAPI.logout()

  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

import {headerAPI, securityAPI} from "../api/api";

const SET_USER_DATA = "social-network/auth/SET-USER-DATA";
const GET_CAPTCHA_URL_SUCCESS = "social-network/auth/GET_CAPTCHA_URL_SUCCESS";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
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

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: {captchaUrl}
})

export const getAuthUserData = () => async (dispatch) => {
  const data = await headerAPI.getAuthMe();

  if (data.resultCode === 0) {
    const {id, login, email} = data.data;
    dispatch(setAuthUserData(id, email, login, true))
  }
}

export const login = (email, password, rememberMe, captcha, setStatus) => async (dispatch) => {
  const data = await headerAPI.login(email, password, rememberMe, captcha)
  if (data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    setStatus(data.messages)
  }
}

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url

  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch) => {
  const data = await headerAPI.logout()

  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

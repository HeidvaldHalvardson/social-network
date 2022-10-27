import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": `9188bb37-7dba-45a5-b8e3-ff6dae18859f`
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId)
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status})
  },
  savePhoto(file) {
    const formData = new FormData();
    formData.append('image', file)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

export const headerAPI = {
  getAuthMe() {
    return instance.get(`auth/me`)
      .then(response => response.data)
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe})
      .then(response => response.data)
  },
  logout() {
    return instance.delete(`auth/login`)
      .then(response => response.data)
  },

}




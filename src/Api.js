import * as axios from "axios";


let instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY" : "f9dacc89-bd54-4962-a989-b7975a2c2946"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
          .then((response) => response.data)
  },
  getProfile(userId) {
      return instance.get(`profile/` + userId);
  }
};

export const followAPI = {
    unfollow(idUser) {
        return instance.delete(`follow/${idUser}`)
            .then((response) => response.data)
    },
    follow(idUser) {
        return instance.post(`follow/${idUser}`, {})
            .then((response) => response.data)
    }
};
export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    }
};
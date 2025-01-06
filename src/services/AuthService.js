import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios.post(API_URL + "login", { username, password }).then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
  }

  register(username, password, role) {
    return axios.post(API_URL + "register", { username, password, role });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  getUserRole() {
    const user = this.getCurrentUser();
    return user ? user.role : null;
  }
}

export default new AuthService();

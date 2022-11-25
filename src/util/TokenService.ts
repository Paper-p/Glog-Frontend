interface IToken {
  accessToken: string;
  refreshToken: string;
  expiredAt: Date;
}

class TokenService {
  getLocalRefreshToken() {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return user?.refreshToken;
  }

  getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return user?.accessToken;
  }

  updateLocalAccessToken(token: string) {
    let user = JSON.parse(localStorage.getItem("user") || "{}");
    user.accessToken = token;
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem("user") || "{}");
  }

  setUser(user: IToken) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  removeUser() {
    localStorage.removeItem("user");
  }
}

export default new TokenService();

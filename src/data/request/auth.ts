import { getAuth } from "data/url/getUrl";
import AxiosInstance from "util/AxiosInstance";
import { LoginInterface, JoinInterface } from "interfaces/AuthInterface";

class Auth {
  confirmName(name: string) {
    try {
      return AxiosInstance({
        method: "HEAD",
        url: getAuth.checkName(),
        params: {
          nickname: name,
        },
      });
    } catch (error) {
      return error;
    }
  }

  confirmId(userId: string) {
    try {
      return AxiosInstance({
        method: "HEAD",
        url: getAuth.checkId(),
        params: {
          userId: userId,
        },
      });
    } catch (error) {
      return error;
    }
  }

  signin(data: LoginInterface) {
    try {
      return AxiosInstance({
        method: "POST",
        url: getAuth.signin(),
        data: {
          userId: data.userId,
          password: data.password,
        },
      });
    } catch (error) {
      return error;
    }
  }

  signup(data: JoinInterface) {
    try {
      return AxiosInstance({
        method: "POST",
        url: getAuth.signup(),
        data: {
          nickname: data.nickname,
          userId: data.userId,
          password: data.password,
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();

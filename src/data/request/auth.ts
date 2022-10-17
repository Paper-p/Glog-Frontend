import { getAuth } from "data/url/getUrl";
import AuthInstance from "util/authInstance";
import { LoginType, JoinType } from "types/authType";

class Auth {
  confirmName(name: string) {
    try {
      return AuthInstance({
        method: "HEAD",
        url: `${getAuth.checkName()}?nickname=${name}`,
      });
    } catch (error) {
      return error;
    }
  }

  confirmId(userId: string) {
    try {
      return AuthInstance({
        method: "HEAD",
        url: `${getAuth.checkId()}?userId=${userId}`,
      });
    } catch (error) {
      return error;
    }
  }

  signin(data: LoginType) {
    try {
      return AuthInstance({
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

  signup(data: JoinType) {
    try {
      return AuthInstance({
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

import {
  RequestSignInModel,
  RequestSignUpModel,
  RequestValidModel,
} from "../type/auth/request";
import basicApiForm from "../Utils/basicApiForm";
import { getAuth, getMyInfo } from "../Utils/getEndPoints";

class Auth {
  signin(data: RequestSignInModel) {
    try {
      return basicApiForm({
        method: "POST",
        url: getAuth.signin(),
        data: data,
        withCredentials: true,
      });
    } catch (error) {
      return error;
    }
  }

  signup(data: RequestSignUpModel) {
    try {
      return basicApiForm({
        method: "POST",
        url: getAuth.signup(),
        data: data,
        withCredentials: true,
      });
    } catch (error) {
      return error;
    }
  }

  checkname(data: RequestValidModel) {
    try {
      return basicApiForm({
        method: "HEAD",
        url: `${getAuth.checkname()}?nickname=${data}`,
        withCredentials: true,
      });
    } catch (error) {
      return error;
    }
  }

  checkid(data: RequestValidModel) {
    try {
      return basicApiForm({
        method: "HEAD",
        url: `${getAuth.checkid()}?userId=${data}`,
        withCredentials: true,
      });
    } catch (error) {
      return error;
    }
  }

  getMiniProfile(data: string, token: string) {
    try {
      return basicApiForm({
        method: "GET",
        url: `${getMyInfo.getminiprofile()}`,
        withCredentials: true,
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();

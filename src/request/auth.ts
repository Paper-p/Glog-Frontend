import {
  RequestSignInModel,
  RequestSignUpModel,
  RequestValidModel,
} from "../type/auth/request";
import basicApiForm from "../Utils/basicApiForm";
import { getAuth, getFeed } from "../Utils/getEndPoints";

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
        url: getAuth.checkname() + `?nickname=${data}`,
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
        url: getAuth.checkid() + `?userId=${data}`,
        withCredentials: true,
      });
    } catch (error) {
      return error;
    }
  }

  getList(page: number, size: number) {
    try {
      return basicApiForm({
        method: "GET",
        url: getFeed.getList() + `?page=${page}&size=${size}`,
        withCredentials: true,
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();

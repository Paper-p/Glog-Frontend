import {
  RequestSignInModel,
  RequestSignUpModel,
  RequestValidModel,
} from "../type/auth/request";
import basicApiForm from "../Utils/basicApiForm";
import { getAuth } from "../Utils/getEndPoints";

class Auth {
  getList(arg0: number, arg1: number): any {
    throw new Error("Method not implemented.");
  }
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
}

export default new Auth();

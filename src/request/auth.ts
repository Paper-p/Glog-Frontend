import {
  RequestSignInModel,
  RequestSignUpModel,
  RequestValidIdModel,
} from "../type/auth/request";
import basicApiForm from "../Utils/basicApiForm";
import { getAuth } from "../Utils/getEndPoints";

class Auth {
  /**
   * @param data
   */

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

  /**
   * @param data
   */

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

  /**
   * @param data
   */

  checkid(data: RequestValidIdModel) {
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
}

export default new Auth();

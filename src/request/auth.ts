import { RequestSignInModel } from "../type/auth/request";
import basicApiForm from "../Utils/basicApiForm";
import { getAuth } from "../Utils/getEndPoints";

class Auth {
  
  /**
   * @param data 
   */

  signin(data: RequestSignInModel) {
    try {
      return basicApiForm({
        method: 'POST',
        url: getAuth.signin(),
        data: data,
        withCredentials: true
      })
    } catch (error){
      return error;
    }
  }
}

export default new Auth();
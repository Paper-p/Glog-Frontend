import RequestForm from "../form/requestForm";
import { getAuth } from "../url/getUrl";

class Auth {
  checkName(name: string) {
    try {
      return RequestForm({
        method: "HEAD",
        url: `${getAuth.checkName()}?nickname=${name}`,
        withCredentials: true,
      });
    } catch (error) {
      return error;
    }
  }

  signin(id: string, password: string) {
    try {
      return RequestForm({
        method: "POST",
        url: getAuth.signin(),
        withCredentials: true,
        data: {
          userId: id,
          password: password,
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();

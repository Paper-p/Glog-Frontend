import { getUser } from "data/url/getUrl";
import AxiosInstance from "util/AxiosInstance";

class User {
  getMiniProfile(token: string) {
    try {
      return AxiosInstance(
        {
          method: "GET",
          url: getUser.getMiniProfile(),
        },
        token
      );
    } catch (error) {
      return error;
    }
  }

  getMyInfo(token: string) {
    try {
      return AxiosInstance(
        {
          method: "GET",
          url: getUser.getMyInfo(),
        },
        token
      );
    } catch (error) {
      return error;
    }
  }
}

export default new User();

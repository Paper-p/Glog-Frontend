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

  getUserInfo(token: string, nickname: string) {
    try {
      return AxiosInstance(
        {
          method: "GET",
          url: getUser.getUserInfo() + nickname,
        },
        token
      );
    } catch (error) {
      return error;
    }
  }

  editProfileImage(url: string, token: string) {
    try {
      return AxiosInstance(
        {
          method: "PUT",
          url: getUser.editProfile(),
          data: {
            imageUrl: url,
          },
        },
        token
      );
    } catch (error) {
      return error;
    }
  }

  editProfileNickname(nickname: string, token: string) {
    try {
      return AxiosInstance(
        {
          method: "PUT",
          url: getUser.editProfile(),
          data: {
            nickname: nickname,
          },
        },
        token
      );
    } catch (error) {
      return error;
    }
  }
}

export default new User();

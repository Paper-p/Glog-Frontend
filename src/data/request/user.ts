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

  editProfileImage(imageUrl: string, token: string) {
    try {
      return AxiosInstance(
        {
          method: "PATCH",
          url: getUser.editProfile("profile-image"),
          data: {
            imageUrl: imageUrl,
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
          method: "PATCH",
          url: getUser.editProfile("nickname"),
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

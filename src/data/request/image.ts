import { REACT_APP_BASE_URL } from "shared/config";
import AxiosInstance from "util/axiosInstance";

class Auth {
  uploadImage(thumnailImage: FormData, token: string) {
    try {
      return AxiosInstance(
        {
          headers: {
            "content-type": "multipart/form-data",
          },
          url: REACT_APP_BASE_URL + "/image",
          data: {
            image: FormData,
          },
          method: "POST",
        },
        token
      );
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();

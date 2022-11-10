import { REACT_APP_BASE_URL } from "shared/config";
import AxiosInstance from "util/AxiosInstance";

class Image {
  uploadImage(thumnailImage: FormData, token: string) {
    try {
      return AxiosInstance(
        {
          method: "POST",
          url: REACT_APP_BASE_URL + "/image",
          headers: {
            "content-type": "multipart/form-data",
          },
          data: thumnailImage,
        },
        token
      );
    } catch (error) {
      return error;
    }
  }
}

export default new Image();

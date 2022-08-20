import { BASE_URL } from "../shared/config";
import axios, { AxiosRequestConfig } from "axios";

const basicApiForm = (userData: AxiosRequestConfig, token?: string) => {
  try {
    const res = token
      ? axios({
          method: userData.method,
          baseURL: BASE_URL,
          url: userData.url,
          data: userData.data,
          withCredentials: true,
          headers: {
            Authorization: "Bearer " + token,
          },
        })
      : axios({
          method: userData.method,
          baseURL: BASE_URL,
          url: userData.url,
          data: userData.data,
        });
    return res;
  } catch (error) {
    return error;
  }
};

export default basicApiForm;

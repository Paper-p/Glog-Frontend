import axios, { AxiosRequestConfig } from "axios";
import { REACT_APP_BASE_URL } from "shared/config";

const AxiosInstance = (data: AxiosRequestConfig, token?: string) => {
  try {
    const authInstance = axios({
      method: data.method,
      baseURL: REACT_APP_BASE_URL,
      url: data.url,
      withCredentials: false,
      data: data.data,
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    });
    return authInstance;
  } catch (error) {
    return error;
  }
};

export default AxiosInstance;

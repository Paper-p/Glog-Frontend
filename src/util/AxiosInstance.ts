import { AxiosRequestConfig } from "axios";
import { instance } from "./TestInstance";

const AxiosInstance = (data: AxiosRequestConfig, token?: string) => {
  try {
    const axios = instance({
      method: data.method,
      url: data.url,
      withCredentials: false,
      data: data.data,
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
      params: data.params,
    });
    return axios;
  } catch (error) {
    return error;
  }
};

export default AxiosInstance;

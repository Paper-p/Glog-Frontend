import { AxiosRequestConfig } from "axios";
import { instance } from "./Interceptor";

const AxiosInstance = (
  data: AxiosRequestConfig,
  token?: string,
  isRefresh?: boolean
) => {
  try {
    const request = instance({
      method: data.method,
      url: data.url,
      withCredentials: false,
      data: data.data,
      headers: {
        Authorization: token && !isRefresh ? "Bearer " + token : "",
        RefreshToken: token && isRefresh ? token : "",
      },
      params: data.params,
    });
    return request;
  } catch (error) {
    return error;
  }
};

export default AxiosInstance;

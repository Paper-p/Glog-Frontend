import axios, { AxiosRequestConfig } from "axios";
import { REACT_APP_BASE_URL } from "shared/config";

const RequestForm = (p: AxiosRequestConfig, token?: string) => {
  try {
    const res = axios({
      method: p.method,
      baseURL: REACT_APP_BASE_URL,
      url: p.url,
      data: p.data,
      withCredentials: false,
      headers: {
        Authorization: token ? "Bearer" + token : "",
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export default RequestForm;

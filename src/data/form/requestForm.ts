import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../../shared/config";

const RequestForm = (p: AxiosRequestConfig, token?: string) => {
  try {
    const res = token
      ? axios({
          method: p.method,
          baseURL: BASE_URL,
          url: p.url,
          data: p.data,
          withCredentials: true,
          headers: {
            Authorization: "Bearer" + token,
          },
        })
      : axios({
          method: p.method,
          baseURL: BASE_URL,
          url: p.url,
          data: p.data,
          withCredentials: true,
        });
    return res;
  } catch (error) {
    return error;
  }
};

export default RequestForm;

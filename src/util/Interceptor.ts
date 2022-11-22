import axios, { AxiosRequestConfig } from "axios";
import { getAuth } from "data/url/getUrl";
import { REACT_APP_BASE_URL } from "shared/config";
import AxiosInstance from "./AxiosInstance";

export const instance = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const refresh = async (originalConfig: AxiosRequestConfig) => {
  try {
    const res: any = await axios({
      method: "PATCH",
      url: getAuth.tokenReissuance(),
      headers: {
        RefreshToken: JSON.parse(localStorage.getItem("token") || "{}")
          .refreshToken,
      },
    });

    localStorage.removeItem("token");
    localStorage.setItem("token", JSON.stringify(res.data));
    console.log(
      "new RefreshToken",
      JSON.parse(JSON.parse(localStorage.getItem("token") || "{}").refreshToken)
    );

    const expiredAtDate = new Date(
      JSON.parse(localStorage.getItem("token") || "{}").expiredAt
    );

    localStorage.setItem(
      "expiredAt",
      expiredAtDate.setHours(expiredAtDate.getHours() + 9).toString()
    );

    return AxiosInstance(originalConfig);
  } catch (_error: any) {
    return Promise.reject(_error);
  }
};

instance.interceptors.request.use(
  (config: any) => {
    const token = JSON.parse(localStorage.getItem("token") || "{}").accessToken;
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        refresh(originalConfig);
      }
    }

    return Promise.reject(err);
  }
);

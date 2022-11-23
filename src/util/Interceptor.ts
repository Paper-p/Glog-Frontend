import { loggedAtom } from "atoms";
import axios, { AxiosRequestConfig } from "axios";
import { getAuth } from "data/url/getUrl";
import { useRecoilState } from "recoil";
import { REACT_APP_BASE_URL } from "shared/config";
import AxiosInstance from "./AxiosInstance";

export const instance = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config: any) => {
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
    console.log("refresh required");

    if (err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const res: any = await axios({
            method: "PATCH",
            url: getAuth.tokenReissuance(),
            headers: {
              RefreshToken: JSON.parse(localStorage.getItem("token") || "{}")
                .refreshToken,
            },
          });

          console.log("new Token", res.data);

          localStorage.removeItem("token");
          localStorage.setItem("token", JSON.stringify(res.data));

          return AxiosInstance(originalConfig);
        } catch (_error: any) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);

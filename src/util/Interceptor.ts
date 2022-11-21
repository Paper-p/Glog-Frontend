import axios from "axios";
import auth from "data/request/auth";
import { getAuth } from "data/url/getUrl";
import { useNavigate } from "react-router-dom";
import { REACT_APP_BASE_URL } from "shared/config";

export const instance = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

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
    const navigate = useNavigate();
    const originalConfig = err.config;

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

          localStorage.setItem("token", JSON.stringify(res.data));

          const expiredAtDate = new Date(
            JSON.parse(localStorage.getItem("token") || "{}").expiredAt
          );

          localStorage.setItem(
            "expiredAt",
            expiredAtDate.setHours(expiredAtDate.getHours() + 9).toString()
          );

          console.log(
            JSON.parse(localStorage.getItem("token") || "{}").accessToken
          );

          return instance(originalConfig);
        } catch (_error) {
          navigate("/signin");
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

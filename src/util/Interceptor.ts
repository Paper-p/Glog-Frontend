import axios from "axios";
import { getAuth } from "data/url/getUrl";
import { REACT_APP_BASE_URL } from "shared/config";
import TokenService from "./TokenService";

export const instance = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config: any) => {
    const token = TokenService.getLocalAccessToken();
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

    if (originalConfig.url !== "/auth/signin" && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const res: any = await axios({
            method: "PATCH",
            url: getAuth.tokenReissuance(),
            headers: {
              RefreshToken: TokenService.getLocalRefreshToken(),
            },
          });

          console.log("new Token", res.data);
          TokenService.setUser(res.data);

          return instance(originalConfig);
        } catch (_error: any) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);

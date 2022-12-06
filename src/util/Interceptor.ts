import { loggedAtom } from "atoms";
import axios from "axios";
import { getAuth } from "data/url/getUrl";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { REACT_APP_BASE_URL } from "shared/config";
import TokenService from "./TokenService";

export const instance = axios.create({
  baseURL: REACT_APP_BASE_URL,
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
  (err) => {
    const error = err.response;
    if (error.status === 401 && !error.config.__isRetryRequest) {
      return getAuthToken().then((response: any) => {
        console.log("new Token:", response.data);
        TokenService.setUser(response.data);
        error.config.__isRetryRequest = true;
        return instance(error.config);
      });
    }

    return Promise.reject(err);
  }
);

let authTokenRequest: any;

function getAuthToken() {
  if (!authTokenRequest) {
    authTokenRequest = makeActualAuthenticationRequest();
    authTokenRequest
      .catch(function () {
        TokenService.removeUser();
        window.location.replace("/signin");
      })
      .then(resetAuthTokenRequest, resetAuthTokenRequest);
  }

  return authTokenRequest;
}

function makeActualAuthenticationRequest() {
  return axios({
    method: "PATCH",
    url: getAuth.tokenReissuance(),
    headers: {
      RefreshToken: TokenService.getLocalRefreshToken(),
    },
  });
}

function resetAuthTokenRequest() {
  authTokenRequest = null;
}

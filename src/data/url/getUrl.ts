import { REACT_APP_BASE_URL } from "shared/config";

export const getAuth = {
  checkName: () => {
    return REACT_APP_BASE_URL + "/auth/valid-name";
  },
  checkId: () => {
    return REACT_APP_BASE_URL + "/auth/valid-id";
  },
  signup: () => {
    return REACT_APP_BASE_URL + "/auth/signup";
  },
  signin: () => {
    return REACT_APP_BASE_URL + "/auth/signin";
  },
  /**
   * 토근 재발급
   */
  tokenReissue: () => {
    return REACT_APP_BASE_URL + "/auth/";
  },
};

export const getUser = {
  getMiniProfile: () => {
    return REACT_APP_BASE_URL + "/user/profile";
  },

  getMyInfo: () => {
    return REACT_APP_BASE_URL + "/user/my";
  },
};

export const getFeed = {
  writeFeed: () => {
    return REACT_APP_BASE_URL + "/feed";
  },
};

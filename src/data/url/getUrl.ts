import { BASE_URL } from "shared/config";

export const getAuth = {
  checkName: () => {
    return BASE_URL + "/auth/valid-name";
  },
  checkId: () => {
    return BASE_URL + "/auth/valid-id";
  },
  signup: () => {
    return BASE_URL + "/auth/signup";
  },
  signin: () => {
    return BASE_URL + "/auth/signin";
  },
  /**
   * 토근 재발급
   */
  tokenReissue: () => {
    return BASE_URL + "/auth/";
  },
};

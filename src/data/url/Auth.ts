import { BASE_URL } from "../../shared/config";

export const checkName = {
  checkName: () => {
    return BASE_URL + "/auth/valid-name";
  },
};

export const checkId = {
  checkId: () => {
    return BASE_URL + "/auth/valid-id";
  },
};

export const signup = {
  signup: () => {
    return BASE_URL + "/auth/signup";
  },
};

export const signin = {
  signin: () => {
    return BASE_URL + "/auth/signin";
  },
};

/**
 * 토근 재발급
 */
export const tokenReissue = {
  tokenReissue: () => {
    return BASE_URL + "/auth/";
  },
};

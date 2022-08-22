import { BASE_URL } from "../shared/config";

export const getAuth = {
  signin: () => {
    return BASE_URL + "auth/signin";
  },
  signup: () => {
    return BASE_URL + "auth/signup";
  },
  checkid: () => {
    return BASE_URL + "auth/valid-id";
  },
  checkname: () => {
    return BASE_URL + "auth/valid-name";
  },
  reissuingTokens: () => {
    return BASE_URL + "auth";
  },
};

export const getMyInfo = {
  getminiprofile: () => {
    return BASE_URL + "user/profile";
  },
};
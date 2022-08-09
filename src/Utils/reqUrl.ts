import { BASE_URL } from "../shared/config";

export const reqAuth = {
  signin: () => {
    return `${BASE_URL}/auth/signin`;
  },
  signup: () => {
    return `${BASE_URL}/auth/signup`;
  }
} 
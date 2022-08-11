import { BASE_URL } from "../shared/config";

export const getAuth = {
  signin: () => {
    return `${BASE_URL}/auth/signin`;
  },
  signup: () => {
    return `${BASE_URL}/auth/signup`;
  }
} 
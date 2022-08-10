import { RequestSignInModel } from "../type/request/auth";
import axios from "axios";
import { ResponseSignInModel } from "../type/response/auth";
import { reqAuth } from "../Utils/reqUrl";
import { useState } from "react";

class AuthService {
  login(loginData: RequestSignInModel) {
    return axios
      .post<ResponseSignInModel>(`${reqAuth.signin()}`, loginData)
      .then((response) => {
        console.log(response.data);
        return response;
      });
  }
}

export default new AuthService();

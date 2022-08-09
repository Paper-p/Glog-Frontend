import axios from "axios";
import React from "react";
import Header from "../../Header/DefaultHeader/index";
import * as S from "../SignIn/style";
import { RequestSignInModel } from "../../../type/request/auth";
import { ResponseSignInModel } from "../../../type/response/auth";
import { reqAuth } from "../../../Utils/reqUrl";

async function signin(user: RequestSignInModel) {
  try {
    const { data } = await axios.post<ResponseSignInModel>(
      `${reqAuth.signin()}`,
      user
    );
    console.log(JSON.stringify(data, null, 4));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return "An unexpected error occurred";
    }
  }
}

signin({
  userId: "jongjin",
  password: "12345678d",
});

const SignIn: React.FC = () => {
  return (
    <>
      <Header isLogined={false} />
      <S.Container>
        <S.Modal>
          <S.ModalText1>login</S.ModalText1>
          <S.ModalText2>오신것을 환영해요!</S.ModalText2>
          <S.IdTxt>아이디</S.IdTxt>
          <S.InputIdBorder>
            <S.InputId type="text" placeholder="아이디를 입력해주세요." />
          </S.InputIdBorder>
          <S.PwTxt>비밀번호</S.PwTxt>
          <S.InputPwBorder>
            <S.InputPw type="text" placeholder="비밀번호를 입력해주세요." />
          </S.InputPwBorder>
          <S.LoginBtn>로그인</S.LoginBtn>
          <S.FindPassword>for got password?</S.FindPassword>
        </S.Modal>
      </S.Container>
    </>
  );
};

export default SignIn;

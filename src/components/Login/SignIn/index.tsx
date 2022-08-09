import axios from "axios";
import React from "react";
import Header from "../../Header/DefaultHeader/index";
import * as S from "../SignIn/style";
import { SignInReqType } from "../../../type/request/login";
import { SignInResType } from "../../../type/response/login";
import { BASE_URL } from "../../../shared/config";

async function signin(id: string, pw: string) {
  try {
    const { data } = await axios.post<SignInResType>(
      `${BASE_URL}/auth/signin`,
      {
        userId: `${id}`,
        password: `${pw}`,
      }
    );

    console.log(`${data.accessToken}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return "An unexpected error occurred";
    }
  }
}

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

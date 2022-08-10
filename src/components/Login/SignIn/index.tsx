import React, { useState } from "react";
import Header from "../../Header/DefaultHeader/index";
import * as S from "../SignIn/style";
import AuthService from "../../../hooks/AuthService";

const SignInPage: React.FC = () => {
  const [inputs, setInputs] = useState({
    userId: "",
    password: "",
  });

  const { userId, password } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClick = () => {
    const user = {
      userId,
      password,
    };

    AuthService.login(user);

    setInputs({
      userId: "",
      password: "",
    });
  };

  return (
    <>
      <Header isLogined={false} />
      <S.Container>
        <S.Modal>
          <S.ModalText1>login</S.ModalText1>
          <S.ModalText2>오신것을 환영해요!</S.ModalText2>
          <S.IdTxt>아이디</S.IdTxt>
          <S.InputIdBorder>
            <S.InputId
              type="text"
              placeholder="아이디를 입력해주세요."
              onChange={onChange}
              name={"userId"}
              value={userId}
            />
          </S.InputIdBorder>
          <S.PwTxt>비밀번호</S.PwTxt>
          <S.InputPwBorder>
            <S.InputPw
              type="text"
              placeholder="비밀번호를 입력해주세요."
              onChange={onChange}
              name={"password"}
              value={password}
            />
          </S.InputPwBorder>
          <S.LoginBtn onClick={onClick}>로그인</S.LoginBtn>
          <S.FindPassword>for got password?</S.FindPassword>
        </S.Modal>
      </S.Container>
    </>
  );
};

export default SignInPage;

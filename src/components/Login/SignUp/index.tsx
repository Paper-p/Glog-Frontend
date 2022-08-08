import React from "react";
import Header from "../../Header/DefaultHeader/index";
import * as S from "./style";

const SignUp: React.FC = () => {
  return (
    <>
      <Header isLogined={false} />
      <S.Container>
        <S.Modal>
          <S.ModalText1>sign up</S.ModalText1>
          <S.ModalText2>신규 이용자시군요! 반가워요</S.ModalText2>
          <S.NameTxt>닉네임</S.NameTxt>
          <S.CheckNameBtn>중복확인</S.CheckNameBtn>
          <S.InputNameBorder>
            <S.InputName
              type="text"
              placeholder="사용하실 닉네임을 입력해주세요."
            />
          </S.InputNameBorder>
          <S.IdTxt>아이디</S.IdTxt>
          <S.CheckIdBtn>중복확인</S.CheckIdBtn>
          <S.InputIdBorder>
            <S.InputId
              type="text"
              placeholder="사용하실 아이디를 입력해주세요."
            />
          </S.InputIdBorder>
          <S.PwTxt>비밀번호</S.PwTxt>
          <S.InputPwBorder>
            <S.InputPw
              type="text"
              placeholder="사용하실 비밀번호를 입력해주세요."
            />
          </S.InputPwBorder>
          <S.SignUpBtn>가입</S.SignUpBtn>
          <S.FindPassword>이미 가입하신 계정이 있으신가요?</S.FindPassword>
        </S.Modal>
      </S.Container>
    </>
  );
};

export default SignUp;

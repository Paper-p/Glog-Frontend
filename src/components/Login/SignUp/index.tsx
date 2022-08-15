import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useInputs from "../../../hooks/useInputs";
import auth from "../../../request/auth";
import Header from "../../Header/DefaultHeader/index";
import * as S from "./style";
import { toast, ToastContainer } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import { LanguageServiceMode } from "typescript";
import { log } from "console";

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  const [isCheckName, setIsCheckName] = useState(false);
  const [isCheckId, setIsCheckId] = useState(false);

  const [{ nickname, userId, password }, onChange, reset] = useInputs({
    nickname: "",
    userId: "",
    password: "",
  });

  const checkName = async () => {
    try {
      const res: any = await auth.checkname(nickname);
      console.log(res.status);
      setIsCheckName((check: boolean) => !check);
    } catch (e: any) {
      console.log(e);
    }
  };

  const checkId = async () => {
    try {
      const res: any = await auth.checkid(userId);
      console.log(res.status);
      setIsCheckId((check: boolean) => !check);
    } catch (e: any) {
      console.log(e);
    }
  };

  const yet = () => {
    console.log("u cant signup");
  };

  const onClick = async () => {
    const user = {
      nickname,
      userId,
      password,
    };

    try {
      const res: any = await auth.signup(user);
      if (res.status === 201) {
        toast.success("회원가입에 성공했어요", {
          autoClose: 1500,
          position: "top-right",
          closeOnClick: false,
        });
        setTimeout(function () {
          navigate("/");
        }, 1500);
      }
    } catch (e: any) {
      console.log(e);
    }
    reset();
  };

  return (
    <>
      <Header isLogined={false} />
      <S.Modal>
        <S.ModalText1>sign up</S.ModalText1>
        <S.ModalText2>신규 이용자시군요! 반가워요</S.ModalText2>
        <S.NameTxt>닉네임</S.NameTxt>
        <S.CheckNameBtn onClick={checkName}>중복확인</S.CheckNameBtn>
        <S.InputNameBorder>
          <S.InputName
            type="text"
            placeholder="사용하실 닉네임을 입력해주세요."
            onChange={onChange}
            name={"nickname"}
            value={nickname}
          />
        </S.InputNameBorder>
        <S.IdTxt>아이디</S.IdTxt>
        <S.CheckIdBtn onClick={checkId}>중복확인</S.CheckIdBtn>
        <S.InputIdBorder>
          <S.InputId
            type="text"
            placeholder="사용하실 아이디를 입력해주세요."
            onChange={onChange}
            name={"userId"}
            value={userId}
          />
        </S.InputIdBorder>
        <S.PwTxt>비밀번호</S.PwTxt>
        <S.InputPwBorder>
          <S.InputPw
            type="password"
            placeholder="사용하실 비밀번호를 입력해주세요."
            onChange={onChange}
            name={"password"}
            value={password}
          />
        </S.InputPwBorder>
        {isCheckId && isCheckName ? (
          <S.SignUpBtn onClick={onClick}>가입</S.SignUpBtn>
        ) : (
          <S.SignUpBtn onClick={yet}>가입</S.SignUpBtn>
        )}
        <S.FindPassword>이미 가입하신 계정이 있으신가요?</S.FindPassword>
      </S.Modal>
      <ToastContainer />
    </>
  );
};

export default SignUpPage;

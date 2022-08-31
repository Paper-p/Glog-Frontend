import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useInputs from "../../../hooks/useInputs";
import auth from "../../../request/auth";
import Header from "../../Header/DefaultHeader/index";
import * as S from "./style";
import { toast } from "material-react-toastify";
import { Link } from "react-router-dom";
import * as I from "../../../Assets/svg";

type UserData = {
  isSuccess: boolean;
  isDone: boolean;
  checkName: boolean;
  checkId: boolean;
  setErrorText: string;
};

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  const [checkUserData, setCheckUserData] = useState<UserData>({
    isSuccess: false,
    isDone: false,
    checkName: true,
    checkId: true,
    setErrorText: "",
  });

  const checkData = String(checkUserData.checkId && checkUserData.checkName);

  const [{ nickname, userId, password }, onChange, reset] = useInputs({
    nickname: "",
    userId: "",
    password: "",
  });

  const checkName = async () => {
    try {
      const res: any = await auth.checkname(nickname);
      console.log(res.status);

      if (res.status === 200) {
        setCheckUserData({
          ...checkUserData,
          isSuccess: true,
        });
      }
    } catch (e: any) {
      console.log(e);
    }

    checkUserData.isSuccess
      ? setCheckUserData({
          ...checkUserData,
          isSuccess: false,
        })
      : setCheckUserData({
          ...checkUserData,
          setErrorText: "닉네임",
          checkName: false,
        });
  };

  const checkId = async () => {
    try {
      const res: any = await auth.checkid(userId);
      console.log(res.status);

      if (res.status === 200) {
        setCheckUserData({
          ...checkUserData,
          isSuccess: true,
        });
      }
    } catch (e: any) {
      console.log(e);
    }

    checkUserData.isSuccess
      ? setCheckUserData({
          ...checkUserData,
          checkId: !checkUserData.checkId,
          isSuccess: false,
        })
      : setCheckUserData({
          ...checkUserData,
          setErrorText: "아이디",
          checkId: false,
        });
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
          autoClose: 2500,
          position: "top-right",
          closeOnClick: false,
        });
        navigate("/");
      }
    } catch (e: any) {
      console.log(e);
    }
    reset();
  };

  return (
    <>
      <Header />
      <S.Modal>
        <S.ModalText1>sign up</S.ModalText1>
        <S.ModalText2>신규 이용자시군요! 반가워요</S.ModalText2>
        <S.NameTxt result={String(checkUserData.checkName)}>닉네임</S.NameTxt>
        <S.CheckNameBtn onClick={checkName}>중복확인</S.CheckNameBtn>
        <S.InputNameBorder result={String(checkUserData.checkName)}>
          <S.InputName
            type="text"
            placeholder="사용하실 닉네임을 입력해주세요."
            onChange={onChange}
            name={"nickname"}
            value={nickname}
          />
        </S.InputNameBorder>
        <S.IdTxt result={String(checkUserData.checkId)}>아이디</S.IdTxt>
        <S.CheckIdBtn onClick={checkId}>중복확인</S.CheckIdBtn>
        <S.InputIdBorder result={String(checkUserData.checkId)}>
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

        <S.ErrorText result={checkData}>
          이미 사용중인 {checkUserData.setErrorText}입니다.
        </S.ErrorText>
        <S.FailedIcon result={checkData}>
          <I.FailedIcon />
        </S.FailedIcon>

        {/* 여기조건 추후수정 */}
        {checkData === "true" ? (
          <S.SignUpBtn onClick={onClick}>가입</S.SignUpBtn>
        ) : (
          <S.SignUpBtn onClick={yet}>가입</S.SignUpBtn>
        )}
        <Link to="/signin">
          <S.FindPassword>이미 가입하신 계정이 있으신가요?</S.FindPassword>
        </Link>
      </S.Modal>
    </>
  );
};

export default SignUpPage;

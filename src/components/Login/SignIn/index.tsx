import Header from "../../Header/DefaultHeader/index";
import * as S from "../SignIn/style";
import * as I from "../../../Assets/svg";
import useInputs from "../../../hooks/useInputs";
import auth from "../../../request/auth";
import { ToastContainer } from "material-react-toastify";
import { useState } from "react";

const SignInPage: React.FC = () => {
  const [isFailed, setIsFailed] = useState(false);

  const [{ userId, password }, onChange, reset] = useInputs({
    userId: "",
    password: "",
  });

  const onClick = async () => {
    const user = {
      userId,
      password,
    };
    try {
      const res: any = await auth.signin(user);
      if (res.data.accessToken) {
        localStorage.setItem("refresh-token", res.data.refreshToken);
        localStorage.setItem("login-token", res.data.accessToken);
        console.log("isSuccess");
        setIsFailed((success: boolean) => (success = false));
      }
    } catch (e: any) {
      setIsFailed((success: boolean) => (success = true));
      console.log(e);
    }
    reset();
  };

  return (
    <>
      <Header isLogined={false} />
      <S.Modal>
        <S.ModalText1>login</S.ModalText1>
        <S.ModalText2>오신것을 환영해요!</S.ModalText2>
        <S.IdTxt result={String(isFailed)}>아이디</S.IdTxt>
        <S.InputIdBorder result={String(isFailed)}>
          <S.InputId
            type="text"
            placeholder="아이디를 입력해주세요."
            onChange={onChange}
            name={"userId"}
            value={userId}
          />
        </S.InputIdBorder>
        <S.PwTxt result={String(isFailed)}>비밀번호</S.PwTxt>
        <S.InputPwBorder result={String(isFailed)}>
          <S.InputPw
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={onChange}
            name={"password"}
            value={password}
          />
        </S.InputPwBorder>
        {/* <S.FailedIcon>
          <I.FailedIcon />
        </S.FailedIcon> */}
        <S.LoginBtn onClick={onClick}>로그인</S.LoginBtn>
        <S.FindPassword>for got password?</S.FindPassword>
      </S.Modal>
      <ToastContainer />
    </>
  );
};

export default SignInPage;

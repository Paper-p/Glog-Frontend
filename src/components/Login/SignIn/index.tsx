import Header from "../../Header/DefaultHeader/index";
import * as S from "../SignIn/style";
import * as I from "../../../Assets/svg";
import useInputs from "../../../hooks/useInputs";
import auth from "../../../request/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
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
      console.log(res.data.refreshToken);

      if (res.data.accessToken) {
        localStorage.setItem("refresh-token", res.data.refreshToken);
        localStorage.setItem("login-token", res.data.accessToken);
        toast.success("로그인에 성공했어요", {
          autoClose: 2500,
          position: "top-right",
          closeOnClick: false,
        });
        navigate("/");
      }
    } catch (e: any) {
      setIsFailed((success: boolean) => (success = true));
      console.log(e);
    }
    reset();
  };

  return (
    <>
      <Header />
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
        <S.FailedIcon result={String(isFailed)}>
          <I.FailedIcon />
        </S.FailedIcon>
        <S.FailedTxt result={String(isFailed)}>
          아이디 혹은 비밀번호를 확인해주세요
        </S.FailedTxt>
        <S.LoginBtn onClick={onClick}>로그인</S.LoginBtn>
        <S.FindPassword>for got password?</S.FindPassword>
      </S.Modal>
    </>
  );
};

export default SignInPage;

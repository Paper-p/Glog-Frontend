import Header from "../../Default/Header";
import * as I from "../../../Assets/svg";
import * as S from "./style";

const Signin: React.FC = () => {
  return (
    <>
      <Header />
      <S.SigninWrapper>
        <S.SigninBox>
          <S.LogoWrapper>
            <I.GlogLogo />
          </S.LogoWrapper>
          <S.HighlightText>다시 온걸 환영해!</S.HighlightText>
          <S.InputWrapper className="id"></S.InputWrapper>
          <S.InputWrapper className="password"></S.InputWrapper>
          <S.LoginButton>로그인</S.LoginButton>
        </S.SigninBox>
      </S.SigninWrapper>
    </>
  );
};

export default Signin;

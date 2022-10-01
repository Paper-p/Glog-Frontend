import Header from "../../Default/Header";
import * as S from "./style";
import Logo from "../../Default/Logo";
import useInputs from "../../../hooks/useInputs";
const Signin: React.FC = () => {
  const [{ id, password }, onChange, reset] = useInputs({
    id: "",
    password: "",
  });

  return (
    <>
      <Header />
      <S.SigninWrapper>
        <S.SigninBox>
          <Logo width={335} height={96} />
          <S.HighlightText>다시 온걸 환영해!</S.HighlightText>
          <S.InputWrapper className="id">
            <S.SortInput>
              <S.InputID onChange={onChange} value={id} />
            </S.SortInput>
          </S.InputWrapper>
          <S.InputWrapper className="password">
            <S.SortInput>
              <S.InputPassword
                type="password"
                onChange={onChange}
                value={password}
              />
            </S.SortInput>
          </S.InputWrapper>
          <S.LoginButton>로그인</S.LoginButton>
          <S.TextBox>
            <S.TextUl>
              <S.Text>비밀번호</S.Text>
              <S.Text>를 잊어 버리셨나요?</S.Text>
            </S.TextUl>
          </S.TextBox>
        </S.SigninBox>
      </S.SigninWrapper>
    </>
  );
};

export default Signin;

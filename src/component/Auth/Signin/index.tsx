import Header from "../../Default/Header";
import * as S from "./style";
import * as I from "../../../Assets/svg";
import Logo from "../../Default/Logo";
import { useState } from "react";
import useInputs from "../../../hooks/useInputs";

const Signin: React.FC = () => {
  const [Focused, setFocused] = useState(false);
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
          <S.HighlightText>다시 온걸 환영해요!</S.HighlightText>
          <S.InputWrapper className="id">
            <S.SortInput>
              <S.StyledSvg>
                <I.IdAndName />
              </S.StyledSvg>
              <S.InputID
                name="id"
                placeholder="아이디를 입력해주세요"
                onFocus={() => {
                  setFocused(true);
                }}
                onChange={onChange}
                value={id}
              />
            </S.SortInput>
          </S.InputWrapper>
          <S.InputWrapper className="password">
            <S.SortInput>
              <S.StyledSvg>
                <I.Password />
              </S.StyledSvg>
              <S.InputPassword
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                onFocus={() => {
                  setFocused(true);
                }}
                onChange={onChange}
                value={password}
              />
            </S.SortInput>
          </S.InputWrapper>
          <S.LoginButton isFocused={Focused} onClick={reset}>
            로그인
          </S.LoginButton>
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

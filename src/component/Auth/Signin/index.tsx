import Header from "../../Common/Header";
import * as S from "./style";
import * as I from "../../../Assets/svg";
import Logo from "../../Common/Logo";
import { useState } from "react";
import useInputs from "../../../hooks/useInputs";
import auth from "../../../data/request/auth";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loggedAtom } from "../../../Atoms";

const Signin: React.FC = () => {
  const navigate = useNavigate();
  const [Focused, setFocused] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [logged, setLogged] = useRecoilState(loggedAtom);
  const [{ id, password }, onChange, reset] = useInputs({
    id: "",
    password: "",
  });

  const signin = async () => {
    try {
      const res: any = await auth.signin(id, password);
      console.log(res.status);
      if (res.status === 200) {
        setLogged(true);
        navigate("/");
      }
    } catch (e: any) {
      setIsError(true);
    }

    reset();
  };

  return (
    <>
      <Header />
      <S.SigninWrapper>
        <S.SigninBox>
          <Logo width={335} height={96} />
          <S.HighlightText>다시 온걸 환영해요!</S.HighlightText>
          <S.InputWrapper className="id" isError={isError}>
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
          <S.InputWrapper className="password" isError={isError}>
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
          <S.LoginButton isFocused={Focused} onClick={signin}>
            로그인
          </S.LoginButton>
          <S.TextBox>
            <S.TextUl>
              <S.Text>비밀번호</S.Text>
              <S.Text>를 잊어 버리셨나요?</S.Text>
            </S.TextUl>
          </S.TextBox>
          <S.ErrorText isError={isError}>
            아이디 또는 비밀번호가 일치하지 않아요.
          </S.ErrorText>
        </S.SigninBox>
      </S.SigninWrapper>
    </>
  );
};

export default Signin;

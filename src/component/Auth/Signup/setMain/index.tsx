import * as S from "./style";
import Header from "../../../Common/Header";
import * as I from "../../../../Assets/svg";
import { useState } from "react";
import useInputs from "../../../../hooks/useInputs";
import { useNavigate } from "react-router-dom";

const SetMain: React.FC = () => {
  const [Focused, setFocused] = useState<boolean>(false);
  const navigate = useNavigate();
  const [{ id, password, checkPassword }, onChange, reset] = useInputs({
    id: "",
    password: "",
    checkPassword: "",
  });

  return (
    <>
      <Header />
      <S.SignupWrapper>
        <S.SignupBox>
          <S.GifBox>
            <S.StyledGif src="/images/Signup.gif" alt="gif" />
          </S.GifBox>
          <S.InputWrapper className="createId">
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
          <S.InputWrapper className="createPassword">
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
          <S.InputWrapper className="checkPassword">
            <S.SortInput>
              <S.StyledSvg>
                <I.Password />
              </S.StyledSvg>
              <S.InputPassword
                name="checkPassword"
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
                onFocus={() => {
                  setFocused(true);
                }}
                onChange={onChange}
                value={checkPassword}
              />
            </S.SortInput>
          </S.InputWrapper>
          <S.SignupButton isFocused={Focused} onClick={reset}>
            다음
          </S.SignupButton>
          <S.TextBox>비밀번호는 8자리 이상 및 기호를 포함해주세요.</S.TextBox>
        </S.SignupBox>
      </S.SignupWrapper>
    </>
  );
};

export default SetMain;

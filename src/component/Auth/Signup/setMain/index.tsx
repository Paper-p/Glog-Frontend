import * as S from "./style";
import Header from "../../../Default/Header";
import * as I from "../../../../Assets/svg";
import { useState } from "react";

const SetMain: React.FC = () => {
  const [Focused, setFocused] = useState(false);

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
                placeholder="아이디를 입력해주세요"
                onFocus={() => {
                  setFocused(true);
                }}
              />
            </S.SortInput>
          </S.InputWrapper>
          <S.InputWrapper className="createPassword">
            <S.SortInput>
              <S.StyledSvg>
                <I.Password />
              </S.StyledSvg>
              <S.InputPassword
                type="password"
                placeholder="비밀번호를 입력해주세요"
                onFocus={() => {
                  setFocused(true);
                }}
              />
            </S.SortInput>
          </S.InputWrapper>
          <S.InputWrapper className="checkPassword">
            <S.SortInput>
              <S.StyledSvg>
                <I.Password />
              </S.StyledSvg>
              <S.InputPassword
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
                onFocus={() => {
                  setFocused(true);
                }}
              />
            </S.SortInput>
          </S.InputWrapper>
          <S.SignupButton isFocused={Focused}>다음</S.SignupButton>
          <S.TextBox>비밀번호는 8자리 이상 및 기호를 포함해주세요.</S.TextBox>
        </S.SignupBox>
      </S.SignupWrapper>
    </>
  );
};

export default SetMain;

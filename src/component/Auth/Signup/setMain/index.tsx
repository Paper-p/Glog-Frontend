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
        </S.SignupBox>
      </S.SignupWrapper>
    </>
  );
};

export default SetMain;

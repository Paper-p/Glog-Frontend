import Header from "../../../Default/Header";
import * as S from "./style";
import * as I from "../../../../Assets/svg";
import { useState } from "react";
import useInputs from "../../../../hooks/useInputs";

const SetName: React.FC = () => {
  const [Focused, setFocused] = useState(false);
  const [{ name }, onChange, reset] = useInputs({
    name: "",
  });

  return (
    <>
      <Header />
      <S.SignupWrapper>
        <S.SignupBox>
          <S.GifBox>
            <S.StyledGif src="/images/Signup.gif" alt="gif" />
          </S.GifBox>
          <S.InputWrapper>
            <S.SortInput>
              <S.StyledSvg>
                <I.IdAndName />
              </S.StyledSvg>
              <S.InputName
                name="name"
                placeholder="사용하실 닉네임을 입력해주세요"
                onFocus={() => {
                  setFocused(true);
                }}
                onChange={onChange}
                value={name}
              />
            </S.SortInput>
          </S.InputWrapper>
          <S.SignupButton isFocused={Focused} onClick={reset}>
            완료
          </S.SignupButton>
        </S.SignupBox>
      </S.SignupWrapper>
    </>
  );
};

export default SetName;
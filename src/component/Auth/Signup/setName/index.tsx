import Header from "component/Common/Header";
import * as S from "./style";
import * as I from "Assets/svg";
import { useState } from "react";
import useInputs from "hooks/useInputs";
import auth from "data/request/auth";
import { useNavigate } from "react-router-dom";

const SetName: React.FC = () => {
  const [Focused, setFocused] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const navigate = useNavigate();
  const [{ name }, onChange, reset] = useInputs({
    name: "",
  });

  const checkUserName = async () => {
    try {
      const result: any = await auth.confirmName(name);
      console.log(result.status);
      if (result.status === 200) {
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
          <S.SignupButton isFocused={Focused} onClick={checkUserName}>
            완료
          </S.SignupButton>
        </S.SignupBox>
      </S.SignupWrapper>
    </>
  );
};

export default SetName;

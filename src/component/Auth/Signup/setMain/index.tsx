import * as S from "./style";
import * as I from "Assets/svg";
import Header from "component/Common/Header";
import Input from "component/Common/Input";
import { useState } from "react";
import useInputs from "hooks/useInputs";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import auth from "data/request/auth";

const SetMain: React.FC = () => {
  const [state, setState] = useState({
    focused: false,
    isError: false,
    errorText: "",
  });
  const [{ userId, password, checkPassword }, onChange, , setNull] = useInputs({
    userId: "",
    password: "",
    checkPassword: "",
  });
  const { register, handleSubmit, setError } = useForm();
  return (
    <>
      <Header />
      <S.SignupWrapper>
        <S.JoinSection>
          <S.JoinBox>
            <S.GifBox>
              <S.StyledGif src="/images/Signup.gif" alt="gif" />
            </S.GifBox>
            <S.InputElements>
              <Input sortation={true} />
              <S.ErrorText>asdasd</S.ErrorText>
            </S.InputElements>
            <S.InputElements>
              <Input sortation={false} />
              <S.ErrorText>asdasd</S.ErrorText>
            </S.InputElements>
            <S.InputElements>
              <Input sortation={false} />
              <S.ErrorText>asdasd</S.ErrorText>
            </S.InputElements>
            <S.SignupButton isFocused={state.focused}>다음</S.SignupButton>
            <S.CommonText>
              비밀번호는 8자리 이상 및 기호를 포함해주세요.
            </S.CommonText>
          </S.JoinBox>
        </S.JoinSection>
      </S.SignupWrapper>
    </>
  );
};

export default SetMain;

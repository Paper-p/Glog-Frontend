import * as S from "./style";
import Header from "component/Common/Header";
import Logo from "component/Common/Logo";
import Input from "component/Common/Input";
import Button from "component/Common/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loggedAtom } from "Atoms";
import auth from "data/request/auth";
import { useForm } from "react-hook-form";

interface AuthForm {
  userId: string;
  password: string;
}

const Signin: React.FC = () => {
  const navigate = useNavigate();
  const [Focused, setFocused] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthForm>();
  const [, setLogged] = useRecoilState(loggedAtom);

  return (
    <>
      <Header />
      <S.SigninWrapper>
        <S.SigninBox>
          <Logo width={335} height={96} />
          <S.HighlightText>다시 온걸 환영해요!</S.HighlightText>
          <S.InputBox>
            <Input
              sortation={true}
              placeholder="아이디를 입력해주세요."
              register={register}
              isError={isError}
            />
            <Input
              sortation={false}
              placeholder="비밀번호를 입력해주세요."
              register={register}
              isError={isError}
            />
          </S.InputBox>
          <S.ButtonBox>
            <Button text="로그인" />
          </S.ButtonBox>
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

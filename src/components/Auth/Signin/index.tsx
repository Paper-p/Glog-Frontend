import * as S from "./style";
import Header from "components/Common/Header";
import Logo from "components/Common/Logo";
import Input from "components/Common/Input";
import Button from "components/Common/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loggedAtom } from "atoms";
import auth from "data/request/auth";
import { useForm } from "react-hook-form";
import { LoginType } from "types/authType";

export default function Signin() {
  const navigate = useNavigate();
  const [Focused, setFocused] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginType>();

  const [logged, setLogged] = useRecoilState(loggedAtom);

  const onValid = async (data: LoginType) => {
    try {
      const res: any = await auth.signin(data);
      setLogged(true);
      //token && toast
    } catch (error: any) {
      console.log(error);
    }
  };

  const inValid = (error: any) => {
    error && setIsError(true);
  };
  return (
    <>
      <Header />
      <S.SigninWrapper>
        <S.JoinSection>
          <S.JoinBox onSubmit={handleSubmit(onValid, inValid)}>
            <Logo width={335} height={96} />
            <S.HighlightText>다시 온걸 환영해요!</S.HighlightText>
            <S.InputElements>
              <Input
                sortation={true}
                register={register("userId", {
                  required: "아이디는 필수입력입니다.",
                })}
                isError={isError}
                placeholder="아이디를 입력해주세요."
              />
              <S.ErrorText>{errors.userId?.message}</S.ErrorText>
            </S.InputElements>
            <S.InputElements>
              <Input
                sortation={false}
                register={register("password", {
                  required: "비밀번호는 필수입력입니다.",
                })}
                isError={isError}
                placeholder="비밀번호를 입력해주세요."
              />
              <S.ErrorText>{errors.password?.message}</S.ErrorText>
            </S.InputElements>
            <Button>로그인</Button>
            <S.TextBox>
              <S.TextUl>
                <S.Text>비밀번호</S.Text>
                <S.Text>를 잊어 버리셨나요?</S.Text>
              </S.TextUl>
            </S.TextBox>
          </S.JoinBox>
        </S.JoinSection>
      </S.SigninWrapper>
    </>
  );
}

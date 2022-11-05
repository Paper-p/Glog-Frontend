import * as S from "./style";
import Logo from "components/Common/Logo";
import Input from "components/Common/Input";
import Button from "components/Common/Button";
import AuthLayout from "components/Common/Layout/Auth";
import Header from "components/Common/Header";
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

  const [, setLogged] = useRecoilState(loggedAtom);

  const onValid = async (data: LoginType) => {
    try {
      const res: any = await auth.signin(data);

      setLogged(true);

      localStorage.setItem("token", JSON.stringify(res.data));
      const expiredAtDate = new Date(
        JSON.parse(localStorage.getItem("token") || "{}").expiredAt
      );

      // 만료시간 변형
      localStorage.setItem(
        "expiredAt",
        expiredAtDate.setHours(expiredAtDate.getHours() + 9).toString()
      );

      console.log(
        JSON.parse(localStorage.getItem("token") || "{}").accessToken
      );

      navigate("/");
    } catch (error: any) {
      console.log(error);
    }
  };

  const inValid = (error: any) => {
    error && setIsError(true);
  };

  //GMT: 2022년 November 3일 Thursday PM 10:12:17
  //GMT: 2022년 November 4일 Friday AM 6:57:17.126

  return (
    <>
      <Header />
      <AuthLayout onSubmit={handleSubmit(onValid, inValid)}>
        <Logo width={335} height={96} />
        <S.HighlightText>다시 온걸 환영해요!</S.HighlightText>
        <Input
          sortation={true}
          register={register("userId", {
            required: "아이디는 필수입력입니다.",
          })}
          isError={isError}
          placeholder="아이디를 입력해주세요."
        >
          <S.ErrorText>{errors.userId?.message}</S.ErrorText>
        </Input>
        <Input
          sortation={false}
          register={register("password", {
            required: "비밀번호는 필수입력입니다.",
          })}
          isError={isError}
          placeholder="비밀번호를 입력해주세요."
        >
          <S.ErrorText>{errors.password?.message}</S.ErrorText>
        </Input>
        <Button>로그인</Button>
        <S.TextBox>
          <S.TextUl>
            <S.Text>비밀번호</S.Text>
            <S.Text>를 잊어 버리셨나요?</S.Text>
          </S.TextUl>
        </S.TextBox>
      </AuthLayout>
    </>
  );
}

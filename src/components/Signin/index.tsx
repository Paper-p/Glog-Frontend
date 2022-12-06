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
import { LoginInterface } from "interfaces/AuthInterface";
import { toast } from "react-toastify";
import TokenService from "util/TokenService";

export default function Signin() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginInterface>();

  const [, setLogged] = useRecoilState(loggedAtom);

  const onValid = async (data: LoginInterface) => {
    try {
      const res: any = await auth.signin(data);

      setLogged(true);
      TokenService.setUser(res.data);

      toast.success("로그인에 성공했어요", {
        autoClose: 2000,
      });

      navigate("/");
    } catch (error: any) {
      setError(
        "userId",
        { message: "아이디 혹은 비밀번호를 다시 확인해주세요" },
        { shouldFocus: true }
      );
      setIsError(true);
    }
  };

  const inValid = (error: any) => {
    error && setIsError(true);
  };

  return (
    <>
      <Header />
      <AuthLayout onSubmit={handleSubmit(onValid, inValid)}>
        <Logo width={335} height={96} />
        <S.HighlightText>다시 온걸 환영해요!</S.HighlightText>
        <Input
          register={register("userId", {
            required: "아이디는 필수입력입니다.",
          })}
          isError={isError}
          purpose="userId"
          placeholder="아이디를 입력해주세요."
        >
          <S.ErrorText>{errors.userId?.message}</S.ErrorText>
        </Input>
        <Input
          register={register("password", {
            required: "비밀번호는 필수입력입니다.",
          })}
          isError={isError}
          purpose="password"
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

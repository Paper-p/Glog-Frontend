import * as S from "./style";
import Input from "components/Common/Input";
import Button from "components/Common/Button";
import AuthLayout from "components/Common/Layout/Auth";
import Header from "components/Common/Header";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import auth from "data/request/auth";
import { useState } from "react";

interface AuthForm {
  userId: string;
  password: string;
  confirmPassword: string;
}

export default function SetMain() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthForm>();

  const onValid = async (data: AuthForm) => {
    if (data.password === data.confirmPassword) {
      try {
        const res: any = await auth.confirmId(data.userId);
        console.log(res);

        navigate("/signup/name", {
          state: { userId: data.userId, password: data.password },
        });
      } catch (error: any) {
        console.log(error);
        setError(
          "userId",
          { message: "이미 존재하는 아이디에요." },
          { shouldFocus: true }
        );
        setIsError(true);
      }
    } else {
      setError(
        "confirmPassword",
        { message: "비밀번호가 일치하지 않습니다." },
        { shouldFocus: true }
      );
    }
  };

  const inValid = (error: any) => {
    error && setIsError(true);
    console.log(isError);
  };

  return (
    <>
      <Header />
      <AuthLayout onSubmit={handleSubmit(onValid, inValid)}>
        <S.GifBox>
          <S.StyledGif src="/images/Signup.gif" alt="gif" />
        </S.GifBox>
        <Input
          register={register("userId", {
            required: "아이디는 필수입력입니다.",
            minLength: {
              message: "아이디는 4자 이상이어야해요.",
              value: 4,
            },
            maxLength: {
              message: "아이디는 최대 20자 입니다.",
              value: 20,
            },
          })}
          isError={isError}
          purpose="userId"
          placeholder="사용하실 아이디를 입력해주세요."
        >
          <S.ErrorText>{errors.userId?.message}</S.ErrorText>
        </Input>
        <Input
          register={register("password", {
            required: "비밀번호는 필수입력입니다.",
            minLength: {
              message: "비밀번호는 8자 이상이어야해요.",
              value: 8,
            },
            maxLength: {
              message: "비밀번호는 최대 20자 입니다.",
              value: 20,
            },
            pattern: {
              message: "잘못된 비밀번호 형식이에요.",
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            },
          })}
          isError={isError}
          purpose="password"
          placeholder="사용하실 비밀번호를 입력해주세요."
        >
          <S.ErrorText>{errors.password?.message}</S.ErrorText>
        </Input>
        <Input
          register={register("confirmPassword", {
            required: "비밀번호 확인은 필수입력입니다.",
          })}
          isError={isError}
          purpose="password"
          placeholder="사용하실 비밀번호를 한번 더 입력해주세요."
        >
          <S.ErrorText>{errors.confirmPassword?.message}</S.ErrorText>
        </Input>
        <Button>다음</Button>
        <S.CommonText>
          비밀번호는 8자리 이상 및 숫자와 문자, 기호를 포함해주세요.
        </S.CommonText>
      </AuthLayout>
    </>
  );
}

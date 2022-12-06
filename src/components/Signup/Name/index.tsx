import * as S from "./style";
import { useState } from "react";
import Input from "components/Common/Input";
import Button from "components/Common/Button";
import AuthLayout from "components/Common/Layout/Auth";
import Header from "components/Common/Header";
import auth from "data/request/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface StateType {
  userId: string;
  password: string;
}

export default function SetName() {
  const [isError, setIsError] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation().state as StateType;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<{ nickname: string }>();

  const onValid = async (data: any) => {
    try {
      const res: any = await auth.confirmName(data.nickname);
      console.log(res);
      createUser(data.nickname);
    } catch (error: any) {
      console.log(error);
      setError(
        "nickname",
        { message: "이미 존재하는 닉네임입니다." },
        { shouldFocus: true }
      );
    }
  };

  const inValid = (error: any) => {
    console.log(error);

    error && setIsError(true);
  };

  const createUser = async (nickname: string) => {
    if (!location) {
      toast.error("회원가입을 다시 시도해주세요", {
        autoClose: 2000,
      });

      navigate("/signup/main");
    }

    try {
      await auth.signup({
        nickname: nickname,
        userId: location.userId,
        password: location.password,
      });

      toast.success("회원가입을 성공했어요", {
        autoClose: 2000,
      });
      navigate("/");
    } catch (error: any) {
      console.log(error);
      setIsError(true);
    }
  };

  return (
    <>
      <Header />
      <AuthLayout onSubmit={handleSubmit(onValid, inValid)}>
        <S.GifBox>
          <S.StyledGif src="/images/Signup.gif" alt="gif" />
        </S.GifBox>
        <Input
          register={register("nickname", {
            required: "닉네임 필수입력입니다.",
            minLength: {
              message: "닉네임은 4자 이상이어야해요.",
              value: 4,
            },
            maxLength: {
              message: "닉네임은 최대 20자 입니다.",
              value: 20,
            },
          })}
          isError={isError}
          purpose="userId"
          placeholder="사용하실 닉네임을 입력해주세요."
        >
          <S.ErrorText>{errors.nickname?.message}</S.ErrorText>
        </Input>
        <Button>완료</Button>
      </AuthLayout>
    </>
  );
}

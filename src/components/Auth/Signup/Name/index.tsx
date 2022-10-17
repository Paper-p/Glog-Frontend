import * as S from "./style";
import { useState } from "react";
import Header from "components/Common/Header";
import Input from "components/Common/Input";
import Button from "components/Common/Button";
import auth from "data/request/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

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
    console.log(data);

    try {
      const res: any = await auth.confirmName(data.nickname);
      console.log(res.status);

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
    error && setIsError(true);
    console.log(isError);
  };

  const createUser = async (nickname: string) => {
    try {
      const res: any = await auth.signup({
        nickname: nickname,
        userId: location.userId,
        password: location.password,
      });
      console.log(res);
      //toast
      navigate("/");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <S.SignupWrapper>
        <S.SignupBox onSubmit={handleSubmit(onValid, inValid)}>
          <S.GifBox>
            <S.StyledGif src="/images/Signup.gif" alt="gif" />
          </S.GifBox>
          <S.InputElements>
            <Input
              sortation={true}
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
              placeholder="사용하실 닉네임을 입력해주세요."
            />
            <S.ErrorText>{errors.nickname?.message}</S.ErrorText>
          </S.InputElements>
          <Button>완료</Button>
        </S.SignupBox>
      </S.SignupWrapper>
    </>
  );
}

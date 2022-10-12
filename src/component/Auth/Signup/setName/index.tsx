import Header from "component/Common/Header";
import * as S from "./style";
import Input from "component/Common/Input";
import { useState } from "react";
import auth from "data/request/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const SetName: React.FC = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<{ nickname: string }>();
  return (
    <>
      <Header />
      <S.SignupWrapper>
        <S.SignupBox>
          <S.GifBox>
            <S.StyledGif src="/images/Signup.gif" alt="gif" />
          </S.GifBox>
          <Input
            sortation={true}
            placeholder="사용하실 닉네임을 입력해주세요."
            register={register}
            isError={isError}
          />
          <S.SignupButton>완료</S.SignupButton>
        </S.SignupBox>
      </S.SignupWrapper>
    </>
  );
};

export default SetName;

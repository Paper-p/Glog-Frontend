import * as S from "./style";
import Header from "../../../Common/Header";
import * as I from "../../../../Assets/svg";
import { useState } from "react";
import useInputs from "../../../../hooks/useInputs";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import auth from "../../../../data/request/auth";

const SetMain: React.FC = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    focused: false,
    isError: false,
    errorText: "",
  });
  const [{ userId, password, checkPassword }, onChange, reset, setNull] =
    useInputs({
      userId: "",
      password: "",
      checkPassword: "",
    });
  const { register, handleSubmit, setError } = useForm();

  const onValid = async () => {
    if (password !== checkPassword) {
      setNull("checkPassword");
      setError(
        "checkPassword",
        { message: "비밀번호가 일치하지 않습니다." },
        { shouldFocus: true }
      );
      setState({
        ...state,
        isError: true,
        errorText: "비밀번호가 일치하지 않습니다",
      });
    } else {
      await auth.confirmId(userId);
      //toastify
      navigate("/second-signup", {
        state: { userId: userId, password: password },
      });
    }
  };

  const inValid = (errors: any) => {
    console.log(errors);
    setState({
      ...state,
      isError: true,
      errorText: "",
    });
  };

  return (
    <>
      <Header />
      <S.SignupWrapper>
        <S.SignupBox>
          <S.GifBox>
            <S.StyledGif src="/images/Signup.gif" alt="gif" />
          </S.GifBox>
          <form onSubmit={handleSubmit(onValid, inValid)}>
            <S.InputWrapper isError={state.isError}>
              <S.SortInput>
                <S.StyledSvg>
                  <I.IdAndName />
                </S.StyledSvg>
                <S.Input
                  {...register("userId", { required: true })}
                  name="userId"
                  placeholder="아이디를 입력해주세요"
                  onFocus={() => {
                    setState({
                      ...state,
                      focused: true,
                    });
                  }}
                  onChange={onChange}
                  value={userId}
                />
              </S.SortInput>
            </S.InputWrapper>
            <S.InputWrapper isError={state.isError}>
              <S.SortInput>
                <S.StyledSvg>
                  <I.Password />
                </S.StyledSvg>
                <S.Input
                  {...register("password", { required: true })}
                  name="password"
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  onFocus={() => {
                    setState({
                      ...state,
                      focused: true,
                    });
                  }}
                  onChange={onChange}
                  value={password}
                  autoComplete="off"
                />
              </S.SortInput>
            </S.InputWrapper>
            <S.InputWrapper isError={state.isError}>
              <S.SortInput>
                <S.StyledSvg>
                  <I.Password />
                </S.StyledSvg>
                <S.Input
                  {...register("checkPassword", { required: true })}
                  name="checkPassword"
                  type="password"
                  placeholder="비밀번호를 다시 입력해주세요"
                  onFocus={() => {
                    setState({
                      ...state,
                      focused: true,
                    });
                  }}
                  onChange={onChange}
                  value={checkPassword}
                  autoComplete="off"
                />
              </S.SortInput>
            </S.InputWrapper>
            <S.ErrorTextBox>
              <S.ErrorText isError={state.isError}>
                {state.errorText}
              </S.ErrorText>
            </S.ErrorTextBox>
            <S.SignupButton isFocused={state.focused} type={"submit"}>
              다음
            </S.SignupButton>
            <S.TextBox>비밀번호는 8자리 이상 및 기호를 포함해주세요.</S.TextBox>
          </form>
        </S.SignupBox>
      </S.SignupWrapper>
    </>
  );
};

export default SetMain;

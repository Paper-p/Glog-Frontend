import Header from "../../Header/DefaultHeader/index";
import * as S from "../SignIn/style";
import useInputs from "../../../hooks/useInputs";
import { RequestSignInModel } from "../../../type/auth/request";
import { ResponseSignInModel } from "../../../type/auth/response";
import axios from "axios";
import { getAuth } from "../../../Utils/getEndPoints";

async function login(loginData: RequestSignInModel) {
  return axios
    .post<ResponseSignInModel>(`${getAuth.signin()}`, loginData)
    .then((response) => {
      console.log(response.data);
      return response;
    });
}

const SignInPage: React.FC = () => {
  const [{ userId, password }, onChange, reset] = useInputs({
    userId: "",
    password: "",
  });

  const onClick = () => {
    const user = {
      userId,
      password,
    };

    login(user).then((response) => {
      console.log(response.status);
      reset();
    });
  };

  return (
    <>
      <Header isLogined={false} />
      <S.Container>
        <S.Modal>
          <S.ModalText1>login</S.ModalText1>
          <S.ModalText2>오신것을 환영해요!</S.ModalText2>
          <S.IdTxt>아이디</S.IdTxt>
          <S.InputIdBorder>
            <S.InputId
              type="text"
              placeholder="아이디를 입력해주세요."
              onChange={onChange}
              name={"userId"}
              value={userId}
            />
          </S.InputIdBorder>
          <S.PwTxt>비밀번호</S.PwTxt>
          <S.InputPwBorder>
            <S.InputPw
              type="text"
              placeholder="비밀번호를 입력해주세요."
              onChange={onChange}
              name={"password"}
              value={password}
            />
          </S.InputPwBorder>
          <S.LoginBtn onClick={onClick}>로그인</S.LoginBtn>
          <S.FindPassword>for got password?</S.FindPassword>
        </S.Modal>
      </S.Container>
    </>
  );
};

export default SignInPage;

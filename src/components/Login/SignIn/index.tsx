import Header from "../../Header/DefaultHeader/index";
import * as S from "../SignIn/style";
import useInputs from "../../../hooks/useInputs";
import auth from "../../../request/auth";

const SignInPage: React.FC = () => {
  const [{ userId, password }, onChange, reset] = useInputs({
    userId: "",
    password: "",
  });

  const onClick = async () => {
    const user = {
      userId,
      password,
    };
    try {
      const res: any = await auth.signin(user);
      console.log(res.data);
    } catch (e: any) {
      console.log(e);
    }
    reset();
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

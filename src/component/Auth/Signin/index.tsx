import Header from "../../Default/Header";
import * as S from "./style";

const Signin: React.FC = () => {
  return (
    <>
      <Header />
      <S.SigninWrapper>
        <S.SigninBox />
      </S.SigninWrapper>
    </>
  );
};

export default Signin;

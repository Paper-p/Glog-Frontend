import Button from "components/Common/Button";
import Header from "components/Common/Header";
import * as S from "./style";
import { Link } from "react-router-dom";
function IsNotLogin() {
  return (
    <>
      <Header />
      <S.Layout>
        <S.Section>
          <S.Box>
            <S.Emoji>π</S.Emoji>
            <S.WarnningText>
              κ²μλ¬Ό μμ±μ λ‘κ·ΈμΈμ νμ  νμ μμ± νμ€ μ μμ΄μ.
            </S.WarnningText>
            <Link to="/signin">
              <Button>λ‘κ·ΈμΈνλ¬ κ°κΈ°</Button>
            </Link>
          </S.Box>
        </S.Section>
      </S.Layout>
    </>
  );
}

export default IsNotLogin;

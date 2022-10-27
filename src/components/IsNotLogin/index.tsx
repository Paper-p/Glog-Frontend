import Button from "components/Common/Button";
import Header from "components/Common/Header";
import * as S from "./style";
import { Link } from "react-router-dom";
function IsNotLogin() {
  return (
    <>
      ~
      <Header />
      <S.Layout>
        <S.Section>
          <S.Box>
            <S.Emoji>😅</S.Emoji>
            <S.WarnningText>
              게시물 작성은 로그인을 하신 후에 작성 하실 수 있어요.
            </S.WarnningText>
            <Link to="/signin">
              <Button>로그인하러 가기</Button>
            </Link>
          </S.Box>
        </S.Section>
      </S.Layout>
    </>
  );
}

export default IsNotLogin;

import Button from "components/Common/Button";
import Header from "components/Common/Header";
import * as S from "./style";

function CheckLogin() {
  return (
    <>
      <Header />
      <S.Section>
        <S.Wrap>
          <S.Box>
            <S.Emoji>😅</S.Emoji>
            <S.WarnningText>
              게시물 작성은 로그인을 하신 후에 작성 하실 수 있어요.
            </S.WarnningText>
            <Button>로그인하러 하기</Button>
          </S.Box>
        </S.Wrap>
      </S.Section>
    </>
  );
}

export default CheckLogin;

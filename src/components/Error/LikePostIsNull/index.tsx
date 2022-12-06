import * as S from "./style";

export default function LikePostIsNull() {
  return (
    <S.NullPageLayout>
      <S.Emoji>😧</S.Emoji>
      <S.Text>좋아요를 누른 게시물이 아직 없어요..</S.Text>
    </S.NullPageLayout>
  );
}

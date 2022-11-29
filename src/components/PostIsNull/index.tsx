import * as S from "./style";

export default function PostIsNull() {
  return (
    <S.NullPageLayout>
      <S.Emoji>😑</S.Emoji>
      <S.Text>게시물이 아직 없어요..</S.Text>
    </S.NullPageLayout>
  );
}

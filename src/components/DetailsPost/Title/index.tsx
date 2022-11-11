import * as S from "./style";

interface Props {
  title: string;
}
function PostTitle({ title }: Props) {
  return <S.Title>{title}</S.Title>;
}

export default PostTitle;

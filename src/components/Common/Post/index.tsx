import * as S from "./style";
import * as I from "assets/svg";

interface Props {
  id: number;
  title: string;
  thumbnail: string;
  previewContent: string;
  hit: string;
  likeCount: number;
}

export default function Post({
  id,
  title,
  thumbnail,
  previewContent,
  hit,
  likeCount,
}: Props) {
  return (
    <S.PostBox>
      <S.Thumbnail src={thumbnail} />
      <S.TextBox>
        <S.Title>{title}</S.Title>
        <S.Description>{previewContent}</S.Description>
        <S.TextBoxBottom>
          <S.LikeBox>
            <I.Like />
            <p>{likeCount}</p>
          </S.LikeBox>
          <S.ViewsBox>
            <I.Views />
            <p>{hit}</p>
          </S.ViewsBox>
        </S.TextBoxBottom>
      </S.TextBox>
    </S.PostBox>
  );
}

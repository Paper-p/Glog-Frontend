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
    <S.Poster_Box>
      <S.Thumbnail src={thumbnail} />
      <S.TextBox>
        <S.Title>{title}</S.Title>
        <S.Description>{previewContent}</S.Description>
        <S.TextBox_Bottom>
          <S.LikeBox>
            <I.Like />
            <p>{hit}</p>
          </S.LikeBox>
          <S.ViewsBox>
            <I.Views />
            <p>{likeCount}</p>
          </S.ViewsBox>
        </S.TextBox_Bottom>
      </S.TextBox>
    </S.Poster_Box>
  );
}

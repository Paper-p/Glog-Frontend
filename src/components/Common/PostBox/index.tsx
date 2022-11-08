import { Heartt, Vieww } from "assets/svg";
import * as S from "./style";

interface Props {
  imageUrl: string;
  title: string;
  content: string;
  like: number;
  view: number;
}

function PostBox({ imageUrl, title, content, like, view }: Props) {
  return (
    <S.PreviewBox>
      <S.Preview url={imageUrl}>
        <S.PreviewTitle>{title}</S.PreviewTitle>
        <S.PreviewContent>{content}</S.PreviewContent>
        <S.InfoBox>
          <S.Info>
            <S.Svg className="heart">
              <Heartt />
            </S.Svg>
            <p>{like}</p>
          </S.Info>
          <S.Info>
            <S.Svg className="view">
              <Vieww />
            </S.Svg>
            <p>{view}</p>
          </S.Info>
        </S.InfoBox>
      </S.Preview>
    </S.PreviewBox>
  );
}

export default PostBox;

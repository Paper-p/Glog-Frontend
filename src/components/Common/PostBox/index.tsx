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
    <S.PostLayout>
      <S.PostBox url={imageUrl}>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostContent>{content}</S.PostContent>
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
      </S.PostBox>
    </S.PostLayout>
  );
}

export default PostBox;

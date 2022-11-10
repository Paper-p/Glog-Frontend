import { Heartt, Vieww } from "assets/svg";
import { Link } from "react-router-dom";
import * as S from "./style";

interface Props {
  id?: number;
  imageUrl: string;
  title: string;
  content: string;
  like: number;
  view: number;
}

function PostBox({ id, imageUrl, title, content, like, view }: Props) {
  return (
    <S.PostLayout>
      <Link to={`/post/${id}`}>
        <S.PostBox url={imageUrl} className="preview">
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
      </Link>
    </S.PostLayout>
  );
}

export default PostBox;

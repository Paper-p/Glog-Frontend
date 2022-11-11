import { Link } from "react-router-dom";
import * as S from "./style";
import React from "react";
import InfoBox from "./Common";

interface Props {
  isDefault: boolean;
  id?: number;
  imageUrl: string;
  title: string;
  content: string;
  like: number;
  view: number;
}

function PostBox({
  isDefault,
  id,
  imageUrl,
  title,
  content,
  like,
  view,
}: Props) {
  return (
    <React.Fragment>
      <S.PostBoxLayout>
        <Link to={`/post/${id}`}>
          {isDefault ? (
            <S.PostBox url={imageUrl} className="preview">
              <S.PostTitle className="default">{title}</S.PostTitle>
              <S.PostContent className="default">{content}</S.PostContent>
              <InfoBox like={like} hit={view} />
            </S.PostBox>
          ) : (
            <S.PostBox className="not-default">
              <S.Thumbnail src={imageUrl} />
              <S.TextBox>
                <S.PostTitle>{title}</S.PostTitle>
                <S.PostContent>{content}</S.PostContent>
                <InfoBox like={view} hit={like} />
              </S.TextBox>
            </S.PostBox>
          )}
        </Link>
      </S.PostBoxLayout>
    </React.Fragment>
  );
}

export default PostBox;

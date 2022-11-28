import { Link } from "react-router-dom";
import * as S from "./style";
import React, { useState } from "react";
import InfoBox from "./Common";
import * as I from "assets/svg";

interface Props {
  isDefault: boolean;
  id?: number;
  imageUrl: string;
  title: string;
  content: string;
  like: number;
  view: number;
  isMine?: boolean;
  isPreview?: boolean;
}

function PostBox({
  isDefault,
  id,
  imageUrl,
  title,
  content,
  like,
  view,
  isMine,
  isPreview,
}: Props) {
  const [modify, setModify] = useState<boolean>(false);

  return (
    <React.Fragment>
      <S.PostBoxLayout isPreview={isPreview}>
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
                <S.PostFooter>
                  <InfoBox like={like} hit={view} />
                  {isMine ? (
                    <S.ModifyBox modify={modify}>
                      <div>
                        <S.Modify>수정</S.Modify>
                        <S.Delete>삭제 </S.Delete>
                      </div>
                      <span
                        onClick={() => {
                          setModify(!modify);
                        }}
                      >
                        <I.Kebob />
                      </span>
                    </S.ModifyBox>
                  ) : (
                    <></>
                  )}
                </S.PostFooter>
              </S.TextBox>
            </S.PostBox>
          )}
        </Link>
      </S.PostBoxLayout>
    </React.Fragment>
  );
}

export default PostBox;

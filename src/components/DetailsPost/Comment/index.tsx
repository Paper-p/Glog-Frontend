import React from "react";
import * as S from "./style";

function DetailsPostComment() {
  return (
    <S.DetailsPostCommentLayout>
      <S.CommentBox>
        <div>
          <S.UserProfile>
            <img
              src="https://www.sanitascare.it/wp-content/uploads/2017/04/default-user-image.jpg"
              alt=""
            />
          </S.UserProfile>
        </div>
        <div>
          <S.Box>
            <S.UserName>오종진</S.UserName>
            <S.CreatedAt>2022-10-10</S.CreatedAt>
          </S.Box>
          <S.UserComment>좋은글이네요</S.UserComment>
        </div>
      </S.CommentBox>
      <S.Border />
    </S.DetailsPostCommentLayout>
  );
}

export default DetailsPostComment;

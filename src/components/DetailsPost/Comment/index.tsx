import { Control, Kebob } from "assets/svg";
import { Button } from "components/Common";
import React, { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import * as S from "./style";

interface Props {
  author: {
    userId: string;
    nickname: string;
    profileImageUrl: string;
  };
  content: string;
  createdAt: Date;
  isMine: boolean;
}

function DetailsPostComment({ author, content, createdAt, isMine }: Props) {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isRemove, setIsRemove] = useState<boolean>(false);

  useEffect(() => {
    if (isClick === false) {
      setIsEdit(false);
    }
  }, [isClick]);

  return (
    <S.DetailsPostCommentLayout>
      <S.Commnet>
        <S.UserBox>
          <S.UserProfile>
            <img
              src="https://www.sanitascare.it/wp-content/uploads/2017/04/default-user-image.jpg"
              alt=""
            />
          </S.UserProfile>
          <div>
            <S.UserName>오종진</S.UserName>
            {isEdit ? (
              <S.EditTextarea>
                <TextareaAutosize placeholder="댓글을 입력해주세요" />
                <Button>수정</Button>
              </S.EditTextarea>
            ) : (
              <S.UserComment>
                실제로는 이런구조인것인데 var 키워드를 사용하면 이러한 문제들이
              </S.UserComment>
            )}
          </div>
        </S.UserBox>
        <S.CommentBox isClick={isClick}>
          <S.CreatedAt>2022-10-10</S.CreatedAt>
          <S.Icon isClick={isClick}>
            {isMine ? (
              <React.Fragment>
                <div onClick={() => setIsClick(!isClick)}>
                  {isClick ? <Control /> : <Kebob />}
                </div>
                {isClick ? (
                  <S.CommentControl>
                    <S.Edit onClick={() => setIsEdit(true)}>수정</S.Edit>
                    <S.Remove>삭제</S.Remove>
                  </S.CommentControl>
                ) : (
                  <></>
                )}
              </React.Fragment>
            ) : (
              <></>
            )}
          </S.Icon>
        </S.CommentBox>
      </S.Commnet>
      <S.Border />
    </S.DetailsPostCommentLayout>
  );
}

export default DetailsPostComment;

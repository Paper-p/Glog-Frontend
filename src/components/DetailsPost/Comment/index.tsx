import { Control, Kebob } from "assets/svg";
import { Button } from "components/Common";
import React, { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { CommentType } from "types/commentType";
import * as S from "./style";

interface Props extends CommentType {}

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
            <img src={author.profileImageUrl} alt="" />
          </S.UserProfile>
          <div>
            <S.UserName>{author.nickname}</S.UserName>
            {isEdit ? (
              <S.EditTextarea>
                <TextareaAutosize placeholder="댓글을 입력해주세요" />
                <Button>수정</Button>
              </S.EditTextarea>
            ) : (
              <S.UserComment>{content}</S.UserComment>
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

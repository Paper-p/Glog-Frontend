import { Control, Kebob } from "assets/svg";
import { removeCommentModalAtom } from "atoms";
import { commentIdAtom } from "atoms/AtomContainer";
import { Button } from "components/Common";
import comment from "data/request/comment";
import { useDate } from "hooks/useDate";
import useInputs from "hooks/useInputs";
import React, { useEffect, useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import { Link } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import { useRecoilState } from "recoil";
import { CommentType } from "types/commentType";
import * as S from "./style";

interface Props extends CommentType {
  setState: (x: boolean) => void;
}

function DetailsPostComment({
  id,
  author,
  content,
  createdAt,
  isMine,
  setState,
}: Props) {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [, setRemoveCommentModal] = useRecoilState(removeCommentModalAtom);
  const [, setCommentId] = useRecoilState(commentIdAtom);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [{ edit }, onChange] = useInputs({
    edit: content,
  });

  useEffect(() => {
    if (isClick === false) {
      setIsEdit(false);
    }
  }, [isClick]);

  const queryClient = useQueryClient();

  const onEditComment = async () => {
    setIsClick(false);
    return comment.editComment(id, edit);
  };

  const { mutate: editComment } = useMutation(() => onEditComment(), {
    onSettled: () => {
      queryClient.invalidateQueries("feed");
    },
  });

  const onRemoveComment = () => {
    setCommentId(id);
    setRemoveCommentModal(true);
  };

  const formatDate = useDate(new Date(createdAt));

  return (
    <S.DetailsPostCommentLayout>
      <S.Comment>
        <S.UserBox>
          {isEdit ? (
            <S.EditTextarea>
              <TextareaAutosize name="edit" onChange={onChange} value={edit} />
              <Button onClick={() => editComment()}>수정</Button>
            </S.EditTextarea>
          ) : (
            <>
              <S.UserProfile>
                <Link to={`/${author.nickname}`}>
                  <img src={author.profileImageUrl} alt="" />
                </Link>
              </S.UserProfile>
              <div>
                <S.UserName>{author.nickname}</S.UserName>
                <S.UserComment>{content}</S.UserComment>
              </div>
            </>
          )}
        </S.UserBox>
        <S.CommentBox isClick={isClick}>
          {isEdit ? <></> : <S.CreatedAt>{formatDate}</S.CreatedAt>}
          <S.Icon isClick={isClick}>
            {isMine ? ( // 내댓글일때는 수정이나 삭제가 가능하도록 케밥버튼 띄워주기
              <React.Fragment>
                <div onClick={() => setIsClick(!isClick)}>
                  {isClick ? <Control /> : <Kebob />}
                </div>
                {isClick ? (
                  <S.CommentControl>
                    <S.Edit onClick={() => setIsEdit(true)}>수정</S.Edit>
                    <S.Remove onClick={onRemoveComment}>삭제</S.Remove>
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
      </S.Comment>
      <S.Border />
    </S.DetailsPostCommentLayout>
  );
}

export default DetailsPostComment;

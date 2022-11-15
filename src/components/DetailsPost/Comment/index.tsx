import { Control, Kebob } from "assets/svg";
import { loggedAtom } from "atoms";
import { Button } from "components/Common";
import comment from "data/request/comment";
import feed from "data/request/feed";
import useInputs from "hooks/useInputs";
import React, { useEffect, useState } from "react";
import { useQueryClient, useQuery, useMutation } from "react-query";
import { useParams } from "react-router-dom";
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
  const [{ edit }, onChange] = useInputs({
    edit: content,
  });
  const params = useParams();
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [logged] = useRecoilState(loggedAtom);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (isClick === false) {
      setIsEdit(false);
    }
  }, [isClick]);

  const query = useQuery({
    queryKey: ["edit"],
    queryFn: () => reload(),
  });

  const reload = async () => {
    try {
      const res: any = await feed.getDetailsPost(
        Number(params.postId),
        logged
          ? JSON.parse(localStorage.getItem("token") || "{}").accessToken
          : ""
      );
      setState(res.data);
    } catch (e: any) {
      console.log(e);
    }
  };

  const editComment = async () => {
    const { res }: any = await comment.editComment(id, edit);
    return res;
  };

  const saveComment = useMutation(() => editComment(), {
    onSuccess: () => {
      queryClient.invalidateQueries("edit");
      setIsEdit(false);
      setIsClick(false);
    },
    onError: () => {},
    onSettled: () => {},
  });

  return (
    <S.DetailsPostCommentLayout>
      <S.Comment>
        <S.UserBox>
          {isEdit ? (
            <S.EditTextarea>
              <TextareaAutosize
                placeholder="댓글을 입력해주세요"
                onChange={onChange}
                value={edit}
                name="edit"
              />
              <Button onClick={() => saveComment.mutate()}>수정</Button>
            </S.EditTextarea>
          ) : (
            <>
              <S.UserProfile>
                <img src={author.profileImageUrl} alt="" />
              </S.UserProfile>
              <div>
                <S.UserName>{author.nickname}</S.UserName>
                <S.UserComment>{content}</S.UserComment>
              </div>
            </>
          )}
        </S.UserBox>
        <S.CommentBox isClick={isClick}>
          {isEdit ? <></> : <S.CreatedAt>2022-10-10</S.CreatedAt>}
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
      </S.Comment>
      <S.Border />
    </S.DetailsPostCommentLayout>
  );
}

export default DetailsPostComment;

import { removeCommentModalAtom, commentIdAtom } from "atoms";
import { Button, ModalLayout } from "components/Common";
import comment from "data/request/comment";
import React from "react";
import { useQueryClient, useMutation } from "react-query";
import { useRecoilState } from "recoil";
import * as S from "./style";

function RemoveCommentModal() {
  const [commentId] = useRecoilState(commentIdAtom);
  const [, setRemoveCommentModal] = useRecoilState(removeCommentModalAtom);

  const queryClient = useQueryClient();

  const onRemoveComment = async () => {
    return comment.removeComment(commentId);
  };

  const { mutate: removeComment } = useMutation(() => onRemoveComment(), {
    onSettled: () => {
      queryClient.invalidateQueries("feed");
      setRemoveCommentModal(false);
    },
  });

  return (
    <ModalLayout setModal={setRemoveCommentModal}>
      <S.RemoveCommentModal onClick={(e) => e.stopPropagation()}>
        <S.TitleText>댓글삭제</S.TitleText>
        <S.Text>정말 댓글을 삭제하시겠습니까?</S.Text>
        <S.ButtonBox>
          <Button onClick={() => removeComment()}>확인</Button>
          <Button onClick={() => setRemoveCommentModal(false)}>취소</Button>
        </S.ButtonBox>
      </S.RemoveCommentModal>
    </ModalLayout>
  );
}
export default RemoveCommentModal;

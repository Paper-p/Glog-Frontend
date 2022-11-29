import { deletePostModalAtom } from "atoms";
import { Button, ModalLayout } from "components/Common";
import React from "react";
import { useQueryClient, useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as S from "./style";

function DeletePostModal() {
  const [, setDeletePostModal] = useRecoilState(deletePostModalAtom);
  const queryClient = useQueryClient();
  const params = useParams();
  const onDeletePost = async () => {
    Number(params.postId);
  };

  const { mutate: deletePost } = useMutation(() => onDeletePost(), {
    onSettled: () => {
      queryClient.invalidateQueries("feed");
      setDeletePostModal(false);
    },
  });

  return (
    <ModalLayout setModal={setDeletePostModal}>
      <S.DeletePostModal onClick={(e) => e.stopPropagation()}>
        <S.TitleText>게시물삭제</S.TitleText>
        <S.Text>해당 게시물을 삭제하시겠습니까?</S.Text>
        <S.ButtonBox>
          <Button onClick={() => deletePost()}>확인</Button>
          <Button onClick={() => setDeletePostModal(false)}>취소</Button>
        </S.ButtonBox>
      </S.DeletePostModal>
    </ModalLayout>
  );
}
export default DeletePostModal;

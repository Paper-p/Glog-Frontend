import { deletePostModalAtom, deletePostId } from "atoms";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as I from "assets/svg";
import * as S from "./style";

interface Props {
  id: number;
}

function UserPagePostBoxControlPart({ id }: Props) {
  const [control, setControl] = useState<boolean>(false);
  const [, setDeletePostModal] = useRecoilState(deletePostModalAtom);
  const [, setPostId] = useRecoilState(deletePostId);
  const navigate = useNavigate();

  const onDeletePost = () => {
    setDeletePostModal(true);
    setPostId(Number(id));
  };

  const onEditPost = () => {
    navigate("/write", {
      state: {
        id: id,
      },
    });
  };

  return (
    <>
      <S.ControlBoxLayout control={control}>
        <div>
          <S.Modify onClick={onEditPost}>수정</S.Modify>
          <S.Delete onClick={onDeletePost}>삭제 </S.Delete>
        </div>
        <S.KebobBox
          onClick={() => {
            setControl(!control);
          }}
        >
          <I.Kebob />
        </S.KebobBox>
      </S.ControlBoxLayout>
    </>
  );
}

export default UserPagePostBoxControlPart;

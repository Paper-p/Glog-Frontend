import { editProfileModalAtom } from "atoms/AtomContainer";
import { ModalLayout } from "components/Common";
import React from "react";
import { useRecoilState } from "recoil";
import * as S from "./style";

function EditProfileModal() {
  const [, setEditProfileModal] = useRecoilState(editProfileModalAtom);

  return (
    <ModalLayout setModal={setEditProfileModal}>
      <S.EditProfileModal></S.EditProfileModal>
    </ModalLayout>
  );
}

export default EditProfileModal;

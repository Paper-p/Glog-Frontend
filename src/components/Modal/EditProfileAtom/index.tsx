import { Edit } from "Assets/svg";
import { editProfileModalAtom } from "Atoms/AtomContainer";
import { ModalLayout } from "components/Common";
import useInputs from "hooks/useInputs";
import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import image from "data/request/image";
import * as S from "./style";
import user from "data/request/user";
import TokenService from "util/TokenService";
import { toast } from "react-toastify";

interface Props {
  userImage: string;
  nickname: string;
}

function EditProfileModal({ userImage, nickname }: Props) {
  const [profileImage, setProfileImage] = useState<string>(userImage);
  const [loading, setLoading] = useState<boolean>(false);
  const setImage = useRef<any>(null);

  const [{ name }, onChange] = useInputs({
    name: nickname,
  });
  const [, setEditProfileModal] = useRecoilState(editProfileModalAtom);

  const imgHandler = async (e: any) => {
    try {
      let blob = new Blob([new ArrayBuffer(e.target.files[0])], {
        type: "image/png",
      });
      setProfileImage(URL.createObjectURL(blob));
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      setLoading(true);
      const res: any = await image.uploadImage(
        formData,
        JSON.parse(localStorage.getItem("token") || "{}").accessToken
      );
      setProfileImage(res.data.imageUrl);
      setLoading(false);
    } catch (e: any) {
      console.log(e);
    }
  };

  const imgBtnClick = (e: any) => {
    e.preventDefault();
    setImage.current?.click();
  };

  const onEdit = async () => {
    try {
      const res: any = await user.editProfileImage(
        profileImage,
        TokenService.getLocalAccessToken()
      );
      console.log(res);

      toast.success("프로필을 변경했어요", {
        autoClose: 2000,
      });
      setEditProfileModal(false);
    } catch (e: any) {
      console.log(e);
    }
  };

  const onExit = () => {
    setEditProfileModal(false);
  };

  return (
    <ModalLayout setModal={setEditProfileModal}>
      <S.EditProfileModal onClick={(e) => e.stopPropagation()}>
        <S.ProfileBox>
          <S.ImageBox>
            <S.ImageChangeBox onClick={imgBtnClick}>
              <S.EditSvg>
                <Edit />
              </S.EditSvg>
              <p>변경</p>
            </S.ImageChangeBox>
            {loading ? (
              <S.ProfileImage src={userImage} />
            ) : (
              <S.ProfileImage src={profileImage} />
            )}
            <input
              ref={setImage}
              type={"file"}
              id={"profile"}
              accept={"image/*"}
              name={"file"}
              onChange={imgHandler}
            />
          </S.ImageBox>
          <S.Nickname
            placeholder="닉네임을 입력하세요"
            value={name}
            onChange={onChange}
            name="name"
          />
        </S.ProfileBox>
        <S.MoveBox>
          <S.Exit onClick={onExit}>취소하기</S.Exit>
          <S.Edit onClick={onEdit}>수정완료</S.Edit>
        </S.MoveBox>
      </S.EditProfileModal>
    </ModalLayout>
  );
}

export default EditProfileModal;

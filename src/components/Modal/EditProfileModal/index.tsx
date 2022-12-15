import { Edit } from "assets/svg";
import { editProfileModalAtom, myInfoAtom } from "atoms/AtomContainer";
import { ModalLayout } from "components/Common";
import useInputs from "hooks/useInputs";
import React, { useEffect, useRef, useState } from "react";
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
  const [myInfo, setMyInfo] = useRecoilState(myInfoAtom);
  const [profileImage, setProfileImage] = useState<string>(userImage);
  const [loading, setLoading] = useState<boolean>(false);
  const setImage = useRef<any>(null);
  const [requested, setRequested] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

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
        TokenService.getLocalAccessToken()
      );
      setProfileImage(res.data.imageUrl);
      setLoading(false);
    } catch (e: any) {
      setError("잘못된 이미지에요");
      setLoading(false);
      setProfileImage(userImage);
      console.log(e);
    }
  };

  const imgBtnClick = (e: any) => {
    e.preventDefault();
    setImage.current?.click();
  };

  const updateUser = async () => {
    setRequested(false);
    try {
      if (profileImage !== userImage) {
        await user.editProfileImage(
          profileImage,
          TokenService.getLocalAccessToken()
        );
      }
      if (myInfo.nickname !== name) {
        await user.editProfileNickname(
          name,
          TokenService.getLocalAccessToken()
        );
      }

      setRequested(true);
      setError("");
    } catch (e: any) {
      setError("사용할 수 없는 이름입니다");
      setRequested(true);
    }
  };

  const onEdit = () => {
    if (!loading) {
      updateUser();
    }
  };

  const onExit = () => {
    setEditProfileModal(false);
  };

  useEffect(() => {
    console.log(loading, error, requested);

    if (error === "" && requested) {
      setMyInfo({
        nickname: name,
        profileUrl: profileImage,
      });

      toast.success("프로필을 변경했어요", {
        autoClose: 2000,
      });
      setEditProfileModal(false);
    }
  }, [requested]);

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
              <S.ProfileImage src="/images/loading.gif" />
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
            error={error}
          />
        </S.ProfileBox>
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
        <S.MoveBox error={error}>
          <S.Exit onClick={onExit}>취소하기</S.Exit>
          <S.Edit onClick={onEdit}>수정완료</S.Edit>
        </S.MoveBox>
      </S.EditProfileModal>
    </ModalLayout>
  );
}

export default EditProfileModal;

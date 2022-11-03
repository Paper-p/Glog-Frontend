import { useRef, useState } from "react";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { writeModalAtom, thumbnailUrlAtom, tagAtom } from "atoms/AtomContainer";
import ModalLayout from "components/Common/Layout/Modal";
import Button from "components/Common/Button";
import { Upload } from "assets/svg";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function WriteModal() {
  const [thumbnailUrl, setThumbnailUrl] = useRecoilState(thumbnailUrlAtom);
  const [, setWriteModal] = useRecoilState(writeModalAtom);
  const [requestTagList, setRequestTagList] = useState<string[]>([]);
  const [tag, setTag] = useRecoilState(tagAtom);
  const [isClick, setIsClick] = useState<boolean>(false);
  const setProfileImage = useRef<any>(null);

  const imgHandler = async (e: any) => {
    try {
      setThumbnailUrl(URL.createObjectURL(e.target.files[0]));
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      // const res: any = await image.uploadImage(
      //   formData,
      //   String(window.localStorage.getItem("access-token"))
      // );
      // setThumbnailUrl(res.data.imageUrl);
    } catch (e: any) {
      console.log(e);
    }
  };

  const imgBtnClick = (e: any) => {
    e.preventDefault();
    setProfileImage.current?.click();
  };

  return (
    <ModalLayout setModal={setWriteModal}>
      <S.WriteModal onClick={(e) => e.stopPropagation()}>
        <S.Text>게시글 프리뷰</S.Text>
        <S.UploadSvgBox onClick={imgBtnClick}>
          <S.UploadSvg>
            <Upload />
          </S.UploadSvg>
          <p>썸네일 변경</p>
        </S.UploadSvgBox>
        <S.PreviewBox>
          <S.Preview url={thumbnailUrl}>
            <S.PreviewTitle>유저 리서치(User Research)란?</S.PreviewTitle>
            <S.PreviewContent>
              asdasdasdasdasdasdasdasdasd
              asdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
            </S.PreviewContent>
          </S.Preview>
        </S.PreviewBox>
        <S.UploadThumbnail>
          <input
            ref={setProfileImage}
            type={"file"}
            id={"profile"}
            accept={"image/*"}
            name={"file"}
            onChange={imgHandler}
          />
          <Button width="452px" height="40px" css={{ fontSize: "15px" }}>
            작성하기
          </Button>
        </S.UploadThumbnail>
      </S.WriteModal>
    </ModalLayout>
  );
}

export default WriteModal;

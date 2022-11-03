import { useRef, useState } from "react";
import * as S from "./style";
import { useRecoilState } from "recoil";
import {
  writeModalAtom,
  thumbnailUrlAtom,
  tagAtom,
  contentAtom,
  titleAtom,
} from "atoms/AtomContainer";
import ModalLayout from "components/Common/Layout/Modal";
import Button from "components/Common/Button";
import { Upload } from "assets/svg";

function WriteModal() {
  const [thumbnailUrl, setThumbnailUrl] = useRecoilState(thumbnailUrlAtom);
  const [, setWriteModal] = useRecoilState(writeModalAtom);
  const [title, setTitle] = useRecoilState(titleAtom);
  const [content] = useRecoilState(contentAtom);

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
            <S.PreviewTitle>{title}</S.PreviewTitle>
            <S.PreviewContent>{content}</S.PreviewContent>
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
          <Button>작성하기</Button>
        </S.UploadThumbnail>
      </S.WriteModal>
    </ModalLayout>
  );
}

export default WriteModal;

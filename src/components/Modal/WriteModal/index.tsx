import { useRef, useState } from "react";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { writeModalAtom, thumbnailUrlAtom, tagAtom } from "atoms/AtomContainer";
import image from "data/request/image";
import ModalLayout from "components/Common/Layout/Modal";

function WriteModal() {
  const [thumbnailUrl, setThumbnailUrl] = useRecoilState(thumbnailUrlAtom);
  const [, setWriteModal] = useRecoilState(writeModalAtom);
  const [requestTagList, setRequestTagList] = useState<string[]>([]);
  const [tag, setTag] = useRecoilState(tagAtom);
  const [isClick, setIsClick] = useState<boolean>(false);
  const setProfileImage = useRef<any>(null);

  // <img src={thumbnailUrl} alt="thumbnail" />
  // <button onClick={imgBtnClick}>asd</button>
  // <input
  //   ref={setProfileImage}
  //   type={"file"}
  //   id={"profile"}
  //   accept={"image/*"}
  //   name={"file"}
  //   onChange={imgHandler}
  // />

  const imgHandler = async (e: any) => {
    try {
      setThumbnailUrl(URL.createObjectURL(e.target.files[0]));
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      const res: any = await image.uploadImage(
        formData,
        String(window.localStorage.getItem("access-token"))
      );
      setThumbnailUrl(res.data.imageUrl);
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
      <S.ThumbnailModal onClick={(e) => e.stopPropagation()}></S.ThumbnailModal>
    </ModalLayout>
  );
}

export default WriteModal;

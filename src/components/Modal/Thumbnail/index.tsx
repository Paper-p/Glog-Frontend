import { useEffect, useRef, useState } from "react";
import * as S from "./style";
import Button from "components/Common/Button";
import { useRecoilState } from "recoil";
import { imageModalAtom } from "atoms/AtomContainer";
import image from "data/request/image";

function ThumbnailModal() {
  const [, setImageModal] = useRecoilState(imageModalAtom);
  const [profile, setProfile] = useState("/images");
  const setProfileImage = useRef<any>(null);

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px; 
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const onClick = () => {
    setImageModal(false);
  };

  const imgHandler = async (e: any) => {
    try {
      setProfile(URL.createObjectURL(e.target.files[0]));
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      const res = await image.uploadImage(
        formData,
        String(window.localStorage.getItem("access-token"))
      );
      console.log(res);
    } catch (e: any) {
      console.log(e);
    }
  };

  const imgBtnClick = (e: any) => {
    e.preventDefault();
    setProfileImage.current?.click();
  };

  return (
    <S.ThumbnailModalLayout>
      <S.Background onClick={onClick}>
        <S.ThumbnailModal onClick={(e) => e.stopPropagation()}>
          <S.Box>
            <S.InputFileBox>
              {/* <div className="box-file-input">
                <label>
                  <input
                    type="file"
                    name="ev_display"
                    className="file-input"
                    accept="image/*"
                    onChange={imgHandler}
                  />
                </label>
                <p>썸네일 이미지를 정해주세요</p>
              </div> */}
              <img src={profile} alt="" />
              <button onClick={imgBtnClick}>asd</button>
              <input
                ref={setProfileImage}
                type={"file"}
                id={"profile"}
                accept={"image/*"}
                name={"file"}
                onChange={imgHandler}
              />
            </S.InputFileBox>
          </S.Box>
          <S.Box>
            <Button className="button">적용하기</Button>
          </S.Box>
        </S.ThumbnailModal>
      </S.Background>
    </S.ThumbnailModalLayout>
  );
}

export default ThumbnailModal;

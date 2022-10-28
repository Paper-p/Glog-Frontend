import React, { Dispatch, SetStateAction, useEffect } from "react";
import * as S from "./style";
import Button from "components/Common/Button";
import { useRecoilState } from "recoil";
import { imageModalAtom } from "atoms/AtomContainer";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

function ThumbnailModal() {
  const [, setImageModal] = useRecoilState(imageModalAtom);

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

  return (
    <S.ThumbnailModalLayout>
      <S.Background onClick={onClick}>
        <S.ThumbnailModal onClick={(e) => e.stopPropagation()}>
          <S.Box>
            <S.InputFileBox>
              <div className="box-file-input">
                <label>
                  <input
                    type="file"
                    name="ev_display"
                    className="file-input"
                    accept="image/*"
                  />
                </label>
                <p>썸네일 이미지를 정해주세요</p>
              </div>
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

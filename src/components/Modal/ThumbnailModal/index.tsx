import Button from "components/Common/Button";
import * as S from "./style";
import React, { useState, Dispatch, SetStateAction, useEffect } from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

function ThumbnailModal({ setModalOpen }: Props) {
  return (
    <S.ThumbnailModalLayout>
      <S.Background>
        <S.ThumbnailModal>
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

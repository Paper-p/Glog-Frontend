import React from "react";
import * as S from "./style";

interface Props {
  title: any;
  onChange: any;
  isTitleNull: any;
}

function WriteTitle({ title, onChange, isTitleNull }: Props) {
  return (
    <S.TitleBox isNull={isTitleNull}>
      <S.TitleInput
        name="title"
        placeholder="제목을 입력해주세요"
        onChange={onChange}
        value={title}
        type="text"
      />
    </S.TitleBox>
  );
}

export default WriteTitle;

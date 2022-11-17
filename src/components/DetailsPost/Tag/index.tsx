import React from "react";
import * as S from "./style";

interface Props {
  tagList: string[];
}

function DetailsPostTag({ tagList }: Props) {
  return (
    <S.TagList>
      {tagList?.map((item: string) => (
        <React.Fragment key={item}>
          <S.Tag>{item}</S.Tag>
        </React.Fragment>
      ))}
    </S.TagList>
  );
}

export default DetailsPostTag;

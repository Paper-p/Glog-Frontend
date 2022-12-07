import React from "react";
import * as S from "./style";

interface Props {
  title: string;
  content: string;
}

function TextSection({ title, content }: Props) {
  return (
    <React.Fragment>
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
    </React.Fragment>
  );
}

export default TextSection;

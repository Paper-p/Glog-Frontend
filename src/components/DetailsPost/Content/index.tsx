import MDEditor from "@uiw/react-md-editor";
import React from "react";
import * as S from "./style";

interface Props {
  content: string;
}

function DetailsPostContent({ content }: Props) {
  return (
    <S.Markdown data-color-mode="dark">
      <MDEditor.Markdown source={`${content}\n ---`} />
    </S.Markdown>
  );
}

export default DetailsPostContent;

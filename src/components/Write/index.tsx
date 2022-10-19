import { useState } from "react";
import * as S from "./style";
import Header from "components/Common/Header";
import MarkdownEditor from "@uiw/react-markdown-editor";
import MarkdownPreview from "@uiw/react-markdown-preview";

function Post() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const TitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const ContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <>
      <Header />
      <S.WriteSection>
        <S.TitleBox>
          <S.Input placeholder="제목" onChange={TitleChange} value={title} />
        </S.TitleBox>
        <S.MarkdownBox />
      </S.WriteSection>
    </>
  );
}
export default Post;

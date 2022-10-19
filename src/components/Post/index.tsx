import MarkdownEditor from "@uiw/react-markdown-editor";
import Header from "components/Common/Header";
import * as S from "./style";

function Post() {
  return (
    <>
      <Header />
      <S.InputSection>
        <S.TitleBox>
          <S.Input placeholder="제목" />
        </S.TitleBox>
      </S.InputSection>
      <S.Markdown>
        <MarkdownEditor
          className="markdown-editor"
          visible={true}
          height={"100vh"}
          theme={"dark"}
          placeholder="내용을 입력해주세요"
        />
      </S.Markdown>
    </>
  );
}
export default Post;

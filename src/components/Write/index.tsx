import { useState } from "react";
import * as S from "./style";
import Header from "components/Common/Header";
import MarkdownEditor from "@uiw/react-markdown-editor";
import useInputs from "hooks/useInputs";
import Tag from "components/Tag";

function Write() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [markdown, setMarkdown] = useState("");

  const [{ title }, onChange] = useInputs({
    title: "",
  });

  const tabbar = [
    {
      tabTitle: (
        <S.Tabs
          key="0"
          className={activeIndex === 0 ? "is-active" : ""}
          onClick={() => tabClickHandler(0)}
        >
          글작성
        </S.Tabs>
      ),
      tabContent: (
        <MarkdownEditor
          visible={false}
          hideToolbar={false}
          onChange={(value, viewUpdate) => setMarkdown(value)}
          theme={"dark"}
          value={markdown}
          height="90vh"
        />
      ),
    },
    {
      tabTitle: (
        <S.Tabs
          key="1"
          className={activeIndex === 1 ? "is-active" : ""}
          onClick={() => tabClickHandler(1)}
        >
          미리보기
        </S.Tabs>
      ),
      tabContent: <MarkdownEditor.Markdown source={markdown} />,
    },
  ];

  const tabClickHandler = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Header />
      <S.WriteLayout>
        <S.TitleBox>
          <S.TitleInput
            name="title"
            placeholder="제목을 입력해주세요"
            onChange={onChange}
            value={title}
          />
        </S.TitleBox>
        <Tag />
        <S.Tabbar>
          {tabbar.map((idx) => {
            return idx.tabTitle;
          })}
        </S.Tabbar>
        <S.Markdown>{tabbar[activeIndex].tabContent}</S.Markdown>
      </S.WriteLayout>
    </>
  );
}
export default Write;

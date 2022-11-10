import MarkdownEditor from "@uiw/react-markdown-editor";
import MDEditor from "@uiw/react-md-editor";
import { contentAtom } from "atoms/AtomContainer";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import * as S from "./style";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  isContentNull: boolean;
}

function WriteContent({ isContentNull }: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [content, setContent] = useRecoilState(contentAtom);

  const tabClickHandler = (index: number) => {
    setActiveIndex(index);
  };

  const tabbar = [
    {
      tabTitle: (
        <S.Tabs
          key="write-part"
          className={activeIndex === 0 ? "is-active" : ""}
          onClick={() => tabClickHandler(0)}
        >
          글작성
        </S.Tabs>
      ),
      tabContent: (
        <MDEditor
          hideToolbar={true}
          onChange={(value) => setContent(value)}
          value={content}
          textareaProps={{
            placeholder: "내용을 입력해주세요",
          }}
        />
      ),
    },
    {
      tabTitle: (
        <S.Tabs
          key="preview-part"
          className={activeIndex === 1 ? "is-active" : ""}
          onClick={() => tabClickHandler(1)}
        >
          미리보기
        </S.Tabs>
      ),
      tabContent: <MDEditor.Markdown source={content} />,
    },
  ];

  return (
    <S.ContentBox isNull={isContentNull}>
      <S.Tabbar>
        {tabbar.map((idx) => {
          return idx.tabTitle;
        })}
      </S.Tabbar>
      <S.Markdown data-color-mode="dark">
        {tabbar[activeIndex].tabContent}
      </S.Markdown>
    </S.ContentBox>
  );
}

export default WriteContent;

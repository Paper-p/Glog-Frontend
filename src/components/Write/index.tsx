import React, { useRef, useState } from "react";
import * as S from "./style";
import Header from "components/Common/Header";
import MarkdownEditor from "@uiw/react-markdown-editor";
import useInputs from "hooks/useInputs";

interface TagType {
  id: number;
  name: string;
}

function Write() {
  const [tag, setTag] = useState<TagType[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [markdown, setMarkdown] = useState("");

  const [{ title, content }, onChange, , setNull] = useInputs({
    title: "",
    content: "",
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

  const nextId = useRef(0); //unique id
  const onAddTag = (e: any) => {
    if (content !== "" && e.key === "Enter" && tag.length < 6) {
      setTag(
        //불변성 지키기
        tag.concat({
          id: nextId.current,
          name: content,
        })
      );
      setNull("content");
      window.localStorage.setItem("access-token", "asdasdawdwadaw");
      nextId.current += 1;
    } else if (e.key === "Enter") {
      setNull("content");
    }
  };

  const onRemoveTag = (data: TagType) => {
    setTag(tag.filter((tag) => tag.id !== data.id));
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
        <S.TagInputBox>
          <S.TagInput
            name="content"
            placeholder="태그를 입력해주세요"
            onKeyPress={onAddTag}
            onChange={onChange}
            value={content}
          />
        </S.TagInputBox>
        <S.TagListBox>
          {tag.map((item) => (
            <div key={item.id}>
              <S.Tag
                onClick={() => {
                  onRemoveTag(item);
                }}
              >
                {item.name}
              </S.Tag>
            </div>
          ))}
        </S.TagListBox>
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

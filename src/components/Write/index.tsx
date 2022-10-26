import React, { useRef, useState } from "react";
import * as S from "./style";
import Header from "components/Common/Header";
import MarkdownEditor from "@uiw/react-markdown-editor";

interface TagType {
  id: number;
  name: string;
}

function Write() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState<TagType[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [markdown, setMarkdown] = useState("");

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

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const nextId = useRef(0); //unique id
  const onAddTag = (e: any) => {
    if (content !== "" && e.key === "Enter" && tag.length < 6) {
      setTag(
        tag.concat({
          id: nextId.current,
          name: content,
        })
      );
      setContent("");
      window.localStorage.setItem("access-token", "asdasdawdwadaw");
      nextId.current += 1;
    } else if (e.key === "Enter") {
      setContent("");
    }
  };

  const onRemoveTag = (data: TagType) => {
    setTag(tag.filter((tag) => tag.id !== data.id));
  };
  //

  return (
    <>
      <Header />
      <S.WriteLayout>
        <S.TitleBox>
          <S.TitleInput
            placeholder="제목을 입력해주세요"
            onChange={onTitleChange}
            value={title}
          />
        </S.TitleBox>
        <S.TagInputBox>
          <S.TagInput
            placeholder="태그를 입력해주세요"
            onKeyPress={onAddTag}
            onChange={onContentChange}
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

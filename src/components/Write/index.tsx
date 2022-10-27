import { useState } from "react";
import * as S from "./style";
import Header from "components/Common/Header";
import Tag from "components/Tag";
import useInputs from "hooks/useInputs";
import MarkdownEditor from "@uiw/react-markdown-editor";
import Button from "components/Common/Button";

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
          key="write-part"
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
          onChange={(value) => setMarkdown(value)}
          theme="dark"
          value={markdown}
          height="90vh"
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
      tabContent: (
        <MarkdownEditor.Markdown source={`# ${title}\n ${markdown}`} />
      ),
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
        {/* <S.InputFileModalLayout>
          <S.Box>
            <S.InputFileBox>
              <div className="box-file-input">
                <label>
                  <input
                    type="file"
                    name="ev_display"
                    className="file-input"
                    accept="image/*"
                  />
                </label>
                <p>썸네일 이미지를 정해주세요</p>
              </div>
            </S.InputFileBox>
          </S.Box>
          <S.Box>
            <Button className="button">적용하기</Button>
          </S.Box>
        </S.InputFileModalLayout> */}
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

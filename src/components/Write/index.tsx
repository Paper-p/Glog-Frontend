import { useCallback, useEffect, useMemo, useState } from "react";
import * as S from "./style";
import MarkdownEditor from "@uiw/react-markdown-editor";
import WriteModal from "components/Modal/WriteModal";
import Header from "components/Common/Header";
import Tag from "components/Tag";
import Button from "components/Common/Button";
import feed from "data/request/feed";
import { useRecoilState } from "recoil";
import { writeModalAtom, tagAtom, thumbnailUrlAtom } from "atoms/AtomContainer";
import useInputs from "hooks/useInputs";

interface WriteType {
  title: string;
  content: string;
  thumbnailUrl: string;
  tags: string[];
}

function Write() {
  const [{ title }, onChange] = useInputs({
    title: "",
  });

  const [requestTagList, setRequestTagList] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [markdown, setMarkdown] = useState<string>("");
  const [isClick, setIsClick] = useState<boolean>(false);
  const [border, setBorder] = useState<number>(0);

  const [tag, setTag] = useRecoilState(tagAtom);
  const [thumbnailUrl, setThumbnailUrl] = useRecoilState(thumbnailUrlAtom);
  const [writeModal, setWriteModal] = useRecoilState(writeModalAtom);

  const tabClickHandler = (index: number) => {
    setActiveIndex(index);
    setBorder(activeIndex);
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
        <MarkdownEditor
          visible={false}
          hideToolbar={false}
          onChange={(value) => setMarkdown(value)}
          theme="dark"
          value={markdown}
          height="89vh"
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
      tabContent: <MarkdownEditor.Markdown source={markdown} />,
    },
  ];

  useEffect(() => {
    if (isClick) {
      const data = {
        title,
        content: markdown,
        tags: requestTagList,
      };

      const isEmpty = (obj: Object) =>
        !Object.values(obj).every((x) => x !== null && x !== "");

      if (!isEmpty(data)) {
        setIsClick(false);
        setWriteModal(true);
        // request(data);
      } else {
        setIsClick(false);
      }
    }
  }, [isClick]);

  const saveTag = () => {
    // recoil tag 배열에서 name 만 requestTagList 로 concat(불변성 유지)
    tag.forEach((item) => {
      setRequestTagList((preveList: any) => [
        ...preveList,
        requestTagList.concat(item.name).join(""),
      ]);
    });

    setIsClick(true);
  };

  const request = async (data: WriteType) => {
    console.log(data);
    try {
      await feed.writeFeed({
        title: data.title,
        content: data.content,
        thumbnail: thumbnailUrl,
        tags: requestTagList,
        token: String(window.localStorage.getItem("access-token")),
      });
    } catch (e: any) {
      console.log(e);
    }
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
        {writeModal && <WriteModal />}
        <S.Tabbar>
          {tabbar.map((idx) => {
            return idx.tabTitle;
          })}
        </S.Tabbar>
        <S.Markdown isPreview={border}>
          {tabbar[activeIndex].tabContent}
        </S.Markdown>
        <S.Sumbit>
          <Button onClick={saveTag}>작성하기</Button>
        </S.Sumbit>
      </S.WriteLayout>
    </>
  );
}

export default Write;

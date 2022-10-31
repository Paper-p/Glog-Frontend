import { useEffect, useState } from "react";
import * as S from "./style";
import MarkdownEditor from "@uiw/react-markdown-editor";
import Header from "components/Common/Header";
import Tag from "components/Tag";
import ThumbnailModal from "components/Modal/Thumbnail";
import Button from "components/Common/Button";
import feed from "data/request/feed";
import { useRecoilState } from "recoil";
import { imageModalAtom, tagAtom, thumbnailUrlAtom } from "atoms/AtomContainer";
import useInputs from "hooks/useInputs";

function Write() {
  const [{ title }, onChange] = useInputs({
    title: "",
  });

  const [requestTagList, setRequestTagList] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [markdown, setMarkdown] = useState("");

  const [tag, setTag] = useRecoilState(tagAtom);
  const [thumbnailUrl, setThumbnailUrl] = useRecoilState(thumbnailUrlAtom);
  const [imageModal, setImageModal] = useRecoilState(imageModalAtom);

  useEffect(() => {
    console.log(requestTagList);
  }, [requestTagList]);

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
      tabContent: <MarkdownEditor.Markdown source={markdown} />,
    },
  ];

  const writeFeed = () => {
    tag.forEach((item) => {
      setRequestTagList((preveList: any) => [
        ...preveList,
        requestTagList.concat(item.name).join(""),
      ]);
    });

    if (tag) {
      request();
    }
  };

  const request = async () => {
    try {
      await feed.writeFeed({
        title: title,
        content: markdown,
        thumbnail: thumbnailUrl,
        tags: requestTagList,
        token: String(window.localStorage.getItem("access-token")),
      });
      setTag([]);
      setThumbnailUrl("");
    } catch (e: any) {
      console.log(e);
    }
  };

  const showModal = () => {
    setImageModal(true);
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
        <button onClick={showModal}>모달 띄우기</button>
        {imageModal && <ThumbnailModal />}
        <S.Tabbar>
          {tabbar.map((idx) => {
            return idx.tabTitle;
          })}
        </S.Tabbar>
        <S.Markdown>{tabbar[activeIndex].tabContent}</S.Markdown>
        <Button onClick={writeFeed}>작성하기</Button>
      </S.WriteLayout>
    </>
  );
}

export default Write;

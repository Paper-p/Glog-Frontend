import { useEffect, useState } from "react";
import * as S from "./style";
import MarkdownEditor from "@uiw/react-markdown-editor";
import WriteModal from "components/Modal/WriteModal";
import Header from "components/Common/Header";
import Tag from "components/Write/WriteTag";
import Button from "components/Common/Button";
import feed from "data/request/feed";
import { useRecoilState } from "recoil";
import { writeModalAtom, tagAtom, thumbnailUrlAtom } from "atoms/AtomContainer";
import useInputs from "hooks/useInputs";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface WriteType {
  title: string;
  content: string;
  thumbnailUrl: string;
  tags: string[];
}

function WritePost() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<{ title: string }>();

  const [{ title }, onChange] = useInputs({
    title: "",
  });

  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [markdown, setMarkdown] = useState<string>("");
  const [requestTagList, setRequestTagList] = useState<string[]>([]);
  const [isClick, setIsClick] = useState<boolean>(false);

  const [tag, setTag] = useRecoilState(tagAtom);
  const [thumbnailUrl, setThumbnailUrl] = useRecoilState(thumbnailUrlAtom);
  const [writeModal, setWriteModal] = useRecoilState(writeModalAtom);

  const [contentIsNotNull, setContentIsNotNull] = useState<boolean>(false);

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
        setWriteModal(true);
      }
    }
  }, [isClick]);

  const saveTag = () => {
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

  const onExit = () => {
    setTag([]);
    navigate("/");
  };

  const onWrite = () => {
    setWriteModal(true);
  };

  const onValid = () => {
    console.log("asd");
  };

  const inValid = () => {
    console.log("hi");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid, inValid)}>
        <Header />
        {writeModal && <WriteModal />}
        <S.WritePostForm>
          <S.TitleBox>
            <S.TitleInput
              type="text"
              placeholder="제목을 입력해주세요"
              {...register("title", {
                required: "이메일은 필수 입력입니다.",
              })}
            />
          </S.TitleBox>
          <Tag />
          <S.Tabbar>
            {tabbar.map((idx) => {
              return idx.tabTitle;
            })}
          </S.Tabbar>
          <S.Markdown>{tabbar[activeIndex].tabContent}</S.Markdown>
        </S.WritePostForm>
        <S.Footer>
          <S.Part>
            <Button
              width="100px"
              onClick={onExit}
              className="exit"
              isButton={true}
            >
              나가기
            </Button>
          </S.Part>
          <S.Part className="errorText">error text</S.Part>
          <S.Part>
            <Button width="100px" className="submit">
              작성하기
            </Button>
          </S.Part>
        </S.Footer>
      </form>
    </>
  );
}

export default WritePost;

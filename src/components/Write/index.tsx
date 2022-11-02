import { useEffect, useState } from "react";
import * as S from "./style";
import WriteModal from "components/Modal/WriteModal";
import Header from "components/Common/Header";
import Tag from "components/Write/WriteTag";
import feed from "data/request/feed";
import { useRecoilState } from "recoil";
import {
  writeModalAtom,
  tagAtom,
  thumbnailUrlAtom,
  contentAtom,
} from "atoms/AtomContainer";
import useInputs from "hooks/useInputs";
import WriteFooter from "./WriteFooter";
import WriteContent from "./WriteContent";

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
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isTitleNull, setIsTitleError] = useState<boolean>(false);
  const [isContentNull, setIsContentError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [tag, setTag] = useRecoilState(tagAtom);
  const [thumbnailUrl, setThumbnailUrl] = useRecoilState(thumbnailUrlAtom);
  const [content, setContent] = useRecoilState(contentAtom);
  const [writeModal, setWriteModal] = useRecoilState(writeModalAtom);

  const handleClick = () => {
    const confirmContent = content.replace(/\n/g, "").trim().length; // 줄바꿈 제외

    if (title.trim().length === 0 && confirmContent === 0) {
      setIsTitleError(true);
      setIsContentError(true);
      setErrorMessage("제목과 내용은 필수 입력입니다");
    } else if (title.trim().length === 0) {
      setIsTitleError(true);
      setIsContentError(false);
      setErrorMessage("제목은 필수 입력입니다");
    } else if (confirmContent === 0) {
      setIsContentError(true);
      setIsTitleError(false);
      setErrorMessage("내용은 필수 입력입니다");
    } else {
      setWriteModal(true);
      setIsTitleError(false);
      setIsContentError(false);
      setErrorMessage("");
    }
  };

  useEffect(() => {
    if (isClick) {
      const data = {
        title,
        content: content,
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

  return (
    <>
      <Header />
      {writeModal && <WriteModal />}
      <S.WritePostLayout>
        <S.TitleBox isNull={isTitleNull}>
          <S.TitleInput
            name="title"
            placeholder="제목을 입력해주세요"
            onChange={onChange}
            value={title}
            type="text"
          />
        </S.TitleBox>
        <Tag />
        <WriteContent isContentNull={isContentNull} />
      </S.WritePostLayout>
      <WriteFooter onClick={handleClick} errorMessage={errorMessage} />
    </>
  );
}

export default Write;

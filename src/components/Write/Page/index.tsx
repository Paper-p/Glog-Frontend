import { useEffect, useState } from "react";
import * as S from "./style";
import Header from "components/Common/Header";
import { useRecoilState } from "recoil";
import {
  writeModalAtom,
  contentAtom,
  titleAtom,
  tagAtom,
  thumbnailUrlAtom,
} from "atoms";
import WriteFooter from "../Footer";
import WriteContent from "../Content";
import WriteTag from "../Tag";
import { WriteModal } from "components/Modal/WriteModal";
import WriteTitle from "../Title";
import { useLocation } from "react-router-dom";
import feed from "data/request/feed";
import TokenService from "util/TokenService";

type Mode = "작성하기" | "수정하기";

interface Location {
  id: number;
}

interface TagType {
  id: number;
  name: string;
}

function WritePage() {
  const [mode, setMode] = useState<Mode>("작성하기");

  const [isTitleNull, setIsTitleError] = useState<boolean>(false);
  const [isContentNull, setIsContentError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [title, setTitle] = useRecoilState(titleAtom);
  const [content, setContent] = useRecoilState(contentAtom);
  const [writeModal, setWriteModal] = useRecoilState(writeModalAtom);
  const [, setThumbnailUrl] = useRecoilState(thumbnailUrlAtom);
  const [, setTag] = useRecoilState(tagAtom);

  const [editor, setEditor] = useState<string>("");
  // 유저프로필 페이지에서 수정버튼 클릭 시 수정할 게시글 id 넘겨받기
  const editPostId = useLocation().state as Location;

  useEffect(() => {
    setTitle("");
    setContent("");

    // state로 넘겨받은 id가 존재한다면 (수정요청을 받았다면)
    if (editPostId) {
      setMode("수정하기");

      const getEditPostData = async () => {
        try {
          const res: any = await feed.getDetailsPost(
            Number(editPostId?.id),
            TokenService.getLocalAccessToken()
          );

          const list: TagType[] = [];
          res.data.tagList.map((item: string, index: number) => {
            const tag = {
              id: index,
              name: item,
            };
            list.push(tag);
          });

          setEditor(res.data.author.nickname);
          setThumbnailUrl(res.data.thumbnail);
          setTag(list);
          setTitle(res.data.title);
          setContent(res.data.content);
        } catch (e: any) {
          console.log(e);
        }
      };

      getEditPostData();
    }
  }, [editPostId]);

  const handleClick = () => {
    const confirmContent = content.replace(/\n/g, "").trim().length;

    if (title.trim().length === 0 && confirmContent === 0) {
      setIsTitleError(true);
      setIsContentError(true);
      setErrorMessage("제목과 내용은 필수 입력입니다");
    } else if (title.trim().length === 0) {
      setIsTitleError(true);
      setIsContentError(false);
      setErrorMessage("제목은 필수 입력입니다");
    } else if (confirmContent === 0) {
      setIsTitleError(false);
      setIsContentError(true);
      setErrorMessage("내용은 필수 입력입니다");
    } else {
      setIsTitleError(false);
      setIsContentError(false);
      setWriteModal(true);
      setErrorMessage("");
    }
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <Header />
      {writeModal && (
        <WriteModal
          mode={mode}
          editPostId={Number(editPostId?.id)}
          editor={editor}
        />
      )}
      <S.WritePostLayout>
        <WriteTitle
          title={title}
          onChange={onTitleChange}
          isTitleNull={isTitleNull}
        />
        <WriteTag />
        <WriteContent isContentNull={isContentNull} />
      </S.WritePostLayout>
      <WriteFooter
        onClick={handleClick}
        errorMessage={errorMessage}
        mode={mode}
      />
    </>
  );
}

export default WritePage;

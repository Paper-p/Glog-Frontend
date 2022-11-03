import { useState } from "react";
import * as S from "./style";
import WriteModal from "components/Modal/WriteModal";
import Header from "components/Common/Header";
import Tag from "components/Write/WriteTag";
import { useRecoilState } from "recoil";
import { writeModalAtom, contentAtom, titleAtom } from "atoms/AtomContainer";
import WriteFooter from "./WriteFooter";
import WriteContent from "./WriteContent";

function Write() {
  const [isTitleNull, setIsTitleError] = useState<boolean>(false);
  const [isContentNull, setIsContentError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [title, setTitle] = useRecoilState(titleAtom);
  const [content] = useRecoilState(contentAtom);
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
      {writeModal && <WriteModal />}
      <S.WritePostLayout>
        <S.TitleBox isNull={isTitleNull}>
          <S.TitleInput
            name="title"
            placeholder="제목을 입력해주세요"
            onChange={onTitleChange}
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

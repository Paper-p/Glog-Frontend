import React, { useRef, useState } from "react";
import * as S from "./style";
import Header from "components/Common/Header";
import MarkdownEditor from "@uiw/react-markdown-editor";

interface TagType {
  id: number;
  name: string;
}

function Post() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState<TagType[]>([]);
  const [imageSrc, setImageSrc] = useState<String>("");

  const encodeFileToBase64 = (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImageSrc(String(reader.result));
        resolve();
      };
    });
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const nextId = useRef(0);
  const onKeyPress = (e: any) => {
    if (content !== "" && e.key === "Enter" && tag.length < 6) {
      setTag(
        tag.concat({
          id: nextId.current,
          name: content,
        })
      );
      setContent("");
      nextId.current += 1;
    } else if (e.key === "Enter") {
      setContent("");
    }
  };

  const onRemoveTag = (data: TagType) => {
    setTag(tag.filter((tag) => tag.id !== data.id));
  };

  return (
    <>
      <Header />
      <S.WriteSection>
        <S.TitleBox>
          <S.Input
            placeholder="제목을 입력해주세요"
            onChange={onTitleChange}
            value={title}
          />
        </S.TitleBox>
        <S.TagInputBox>
          <S.TagInput
            placeholder="태그를 입력해주세요"
            onKeyPress={onKeyPress}
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
        <S.ChooseThumbNailFile
          type="file"
          onChange={(e: any) => {
            encodeFileToBase64(e.target.files[0]);
          }}
          accept="image/*"
        />
        <S.ChooseImageBox>
          <p>{imageSrc && <img src={String(imageSrc)} alt="preview-img" />}</p>
        </S.ChooseImageBox>
        <S.MarkdownBox>
          <S.Editor>
            <MarkdownEditor
              placeholder="내용을 입력해주세요"
              height="70vh"
              visible={true}
              theme="dark"
            />
          </S.Editor>
        </S.MarkdownBox>
      </S.WriteSection>
    </>
  );
}
export default Post;

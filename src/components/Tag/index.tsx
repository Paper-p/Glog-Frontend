import useInputs from "hooks/useInputs";
import { useCallback, useRef, useState } from "react";
import * as S from "./style";

interface TagType {
  id: number;
  name: string;
}

function Tag() {
  const [tag, setTag] = useState<TagType[]>([]);
  const [{ content }, onChange, , setNull] = useInputs({
    content: "",
  });

  const nextId = useRef(1); //unique id
  const onAddTag = useCallback(
    (e: any) => {
      if (content !== "" && e.key === "Enter") {
        setTag(
          tag.concat({
            id: nextId.current,
            name: content,
          })
        );
        setNull("content");
        nextId.current += 1;
      } else if (e.key === "Enter") {
        setNull("content");
      }
    },
    [content, setNull, tag]
  );

  const onRemoveTag = (data: TagType) => {
    setTag(tag.filter((tag) => tag.id !== data.id));
  };

  return (
    <S.TagLayout>
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
    </S.TagLayout>
  );
}

export default Tag;
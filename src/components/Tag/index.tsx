import { useCallback, useRef } from "react";
import * as S from "./style";
import useInputs from "hooks/useInputs";
import { useRecoilState } from "recoil";
import { tagAtom } from "atoms/AtomContainer";
import React from "react";

interface TagType {
  id: number;
  name: string;
}

function Tag() {
  const [tag, setTag] = useRecoilState(tagAtom);
  const [{ content }, onChange, setNull] = useInputs({
    content: "",
  });

  const nextId = useRef(1);
  const onAddTag = useCallback(
    (e: any) => {
      if (content !== "" && e.key === "Enter" && tag.length + 1 < 6) {
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
    [content, tag]
  );

  const onRemoveTag = useCallback(
    (data: TagType) => {
      setTag(tag.filter((tag) => tag.id !== data.id));
    },
    [tag]
  );

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

export default React.memo(Tag);

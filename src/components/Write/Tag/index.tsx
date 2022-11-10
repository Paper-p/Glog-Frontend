import { useCallback, useEffect, useRef, useState } from "react";
import * as S from "./style";
import useInputs from "hooks/useInputs";
import { useRecoilState } from "recoil";
import { tagAtom } from "atoms";
import React from "react";

interface TagType {
  id: number;
  name: string;
}

function WriteTag() {
  const [isRight, setIsRight] = useState<boolean>(false);
  const [onlyNameList, setOnlyNameList] = useState<string[]>([]);
  const [tag, setTag] = useRecoilState(tagAtom);
  const nextId = useRef(1);
  const [{ content }, onChange, setNull] = useInputs({
    content: "",
  });

  useEffect(() => {
    if (isRight && !onlyNameList.includes(content)) {
      setTag(
        tag.concat({
          id: nextId.current,
          name: content,
        })
      );
      nextId.current += 1;
      setIsRight(false);
      setNull("content");
      setOnlyNameList([]);
    } else {
      setIsRight(false);
      setNull("content");
      setOnlyNameList([]);
    }
  }, [isRight]);

  const onAddTag = useCallback(
    (e: any) => {
      if (content !== "" && e.key === "Enter" && tag.length + 1 < 6) {
        setOnlyNameList(
          tag.map(({ name }) => {
            return name;
          })
        );
        setIsRight(true);
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
    <S.WriteTagLayout>
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
    </S.WriteTagLayout>
  );
}

export default React.memo(WriteTag);

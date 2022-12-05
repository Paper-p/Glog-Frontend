import { useCallback, useEffect, useRef, useState } from "react";
import * as S from "./style";
import useInputs from "hooks/useInputs";
import { useRecoilState } from "recoil";
import { tagAtom } from "Atoms";
import React from "react";

interface TagType {
  id: number;
  name: string;
}

function WriteTag() {
  const [onlyNameList, setOnlyNameList] = useState<string[]>([]);
  const [tag, setTag] = useRecoilState(tagAtom);
  const nextId = useRef(1);
  const [{ content }, onChange, setNull] = useInputs({
    content: "",
  });

  // useEffect 에 tag 추가 요청을 감지시켜주기 위한 boolean state
  const [isRight, setIsRight] = useState<boolean>(false);

  useEffect(() => {
    // 요청이왔는지 && 이미 존재하는 값이 아닌지 검토
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
          // useEffect 에서 다음요소의 중복여부 검토를 위해 name을 이용해 중복검사 배열 만들기
          tag.map(({ name }) => {
            return name;
          })
        );
        // true => tag 추가 요청을 보냄
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

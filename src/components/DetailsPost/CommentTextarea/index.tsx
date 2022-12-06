import { loggedAtom } from "atoms";
import { Button } from "components/Common";
import comment from "data/request/comment";
import useInputs from "hooks/useInputs";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import { useRecoilState } from "recoil";
import * as S from "./style";

function DetailsPostTextarea() {
  const params = useParams();
  const [logged] = useRecoilState(loggedAtom);
  const queryClient = useQueryClient();
  const [{ content }, onChange, setNull] = useInputs({
    content: "",
  });

  const onAddComment = async () => {
    if (content !== "") {
      setNull("content");
      return comment.addComment(Number(params.postId), content);
    }
  };

  const { mutate: addComment } = useMutation(onAddComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("feed");
    },
  });

  return (
    <React.Fragment>
      {logged ? (
        <S.TextareaLayout>
          <div style={{ padding: "18px", width: "90%" }}>
            <TextareaAutosize
              name="content"
              placeholder="댓글을 입력해주세요"
              onChange={onChange}
              value={content}
            />
          </div>
          <Button onClick={() => addComment()}>등록</Button>
        </S.TextareaLayout>
      ) : (
        <S.NotLogged>댓글작성은 로그인이 필요합니다</S.NotLogged>
      )}
    </React.Fragment>
  );
}

export default DetailsPostTextarea;

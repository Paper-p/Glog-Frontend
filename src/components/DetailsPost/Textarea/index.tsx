import { loggedAtom } from "atoms";
import { Button } from "components/Common";
import comment from "data/request/comment";
import feed from "data/request/feed";
import useInputs from "hooks/useInputs";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import { useRecoilState } from "recoil";
import * as S from "./style";

interface Props {
  setState: (x: boolean) => void;
}

function DetailsPostTextarea({ setState }: Props) {
  const params = useParams();
  const [logged] = useRecoilState(loggedAtom);
  const [{ content }, onChange, setNull] = useInputs({
    content: "",
  });

  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["add"],
    queryFn: () => reload(),
  });

  const reload = async () => {
    try {
      const res: any = await feed.getDetailsPost(
        Number(params.postId),
        logged
          ? JSON.parse(localStorage.getItem("token") || "{}").accessToken
          : ""
      );
      setState(res.data);
    } catch (e: any) {
      console.log(e);
    }
  };

  const onAddComment = async () => {
    const { res }: any = await comment.addComment(
      Number(params.postId),
      content
    );
    setNull("content");
    return res;
  };

  const saveComment = useMutation(() => onAddComment(), {
    onSuccess: () => {
      queryClient.invalidateQueries("add");
    },
    onError: () => {
      console.log("onError");
    },
    onSettled: () => {
      console.log("onSettled");
    },
  });

  const onSaveComment = () => {
    saveComment.mutate();
  };

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
          <Button onClick={onSaveComment}>등록</Button>
        </S.TextareaLayout>
      ) : (
        <S.NotLogged>댓글작성은 로그인이 필요합니다</S.NotLogged>
      )}
    </React.Fragment>
  );
}

export default DetailsPostTextarea;

import { loggedAtom } from "atoms";
import { Button, Header, Category } from "components/Common";
import comment from "data/request/comment";
import feed from "data/request/feed";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import TextareaAutosize from "react-textarea-autosize";
import {
  DetailsPostComment,
  DetailsPostContent,
  DetailsPostInfo,
  DetailsPostSkeleton,
  DetailsPostThumbnail,
  DetailsPostTitle,
} from "components/DetailsPost";
import * as S from "./style";
import { CommentType } from "types/commentType";
import useInputs from "hooks/useInputs";

function DetailsPostPage() {
  const params = useParams();
  const [response, setResponse] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [logged] = useRecoilState(loggedAtom);

  const [{ content }, onChange, setNull] = useInputs({
    content: "",
  });

  const getDetailsPost = async () => {
    setIsLoading(false);
    try {
      const res: any = await feed.getDetailsPost(
        Number(params.postId),
        logged
          ? JSON.parse(localStorage.getItem("token") || "{}").accessToken
          : ""
      );
      setResponse(res.data);
      setIsLoading(true);
      console.log(res.data.comments);
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDetailsPost();
  }, []);

  const onAddTag = async () => {
    try {
      const res: any = await comment.addComment(response.id, content);
      setNull("content");
      getDetailsPost();
      console.log(res);
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <React.Fragment>
      <Header isNeedSearch={false} />
      <S.DetailsPostLayout>
        {isLoading ? (
          <>
            <DetailsPostTitle title={response.title} />
            <S.TagList>
              {response.tagList?.map((item: string) => (
                <React.Fragment key={item}>
                  <S.Tag>{item}</S.Tag>
                </React.Fragment>
              ))}
            </S.TagList>
            <DetailsPostInfo
              author={response.author}
              createdAt={response.createdAt}
              like={response.likeCount}
              hit={response.hit}
            />
            <DetailsPostThumbnail imageUrl={response.thumbnail} />
            <DetailsPostContent content={response.content} />
            <Category>📖 댓글</Category>
            {logged ? (
              <S.CommentBox>
                <div style={{ padding: "18px", width: "90%" }}>
                  <TextareaAutosize
                    name="content"
                    placeholder="댓글을 입력해주세요"
                    onChange={onChange}
                    value={content}
                  />
                </div>
                <Button onClick={onAddTag}>등록</Button>
              </S.CommentBox>
            ) : (
              <S.NotLogged>댓글작성은 로그인이 필요합니다</S.NotLogged>
            )}

            {response.comments?.map((idx: CommentType) => (
              <DetailsPostComment
                key={idx.id}
                id={idx.id}
                author={idx.author}
                content={idx.content}
                createdAt={idx.createdAt}
                isMine={idx.isMine}
              />
            ))}
          </>
        ) : (
          <DetailsPostSkeleton />
        )}
      </S.DetailsPostLayout>
    </React.Fragment>
  );
}

export default DetailsPostPage;

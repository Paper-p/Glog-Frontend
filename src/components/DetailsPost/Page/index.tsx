import { loggedAtom } from "atoms";
import { Button, Header, Category } from "components/Common";
import feed from "data/request/feed";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import TextareaAutosize from "react-textarea-autosize";
import * as S from "./style";
import {
  DetailsPostComment,
  DetailsPostContent,
  DetailsPostInfo,
  DetailsPostSkeleton,
  DetailsPostThumbnail,
  DetailsPostTitle,
} from "components/DetailsPost";

function DetailsPostPage() {
  const params = useParams();
  const [response, setResponse] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [logged] = useRecoilState(loggedAtom);

  useEffect(() => {
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
      } catch (e: any) {
        console.log(e);
      }
    };

    getDetailsPost();
  }, []);

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
            <S.CommentBox>
              <div style={{ padding: "18px" }}>
                <TextareaAutosize placeholder="댓글을 입력해주세요" />
              </div>
              <Button>등록</Button>
            </S.CommentBox>
            <DetailsPostComment />
            <DetailsPostComment />
            <DetailsPostComment />
          </>
        ) : (
          <DetailsPostSkeleton />
        )}
      </S.DetailsPostLayout>
    </React.Fragment>
  );
}

export default DetailsPostPage;

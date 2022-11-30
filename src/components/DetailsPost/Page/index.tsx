import { Header, Category } from "components/Common";
import feed from "data/request/feed";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  DetailsPostComment,
  DetailsPostContent,
  DetailsPostInfo,
  DetailsPostSkeleton,
  DetailsPostThumbnail,
  DetailsPostTag,
} from "components/DetailsPost";
import * as S from "./style";
import { CommentType } from "interfaces/IComment";
import { loggedAtom, removeCommentModalAtom } from "atoms";
import { useRecoilState } from "recoil";
import DetailsPostTextarea from "../Textarea";
import { useQuery } from "react-query";
import RemoveCommentModal from "components/Modal/CommentDeleteModal";
import TokenService from "util/TokenService";

function DetailsPostPage() {
  const [logged] = useRecoilState(loggedAtom);
  const [removeCommentModal] = useRecoilState(removeCommentModalAtom);
  const params = useParams();
  const [response, setResponse] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const fetching = async () => {
    try {
      const res: any = await feed.getDetailsPost(
        Number(params.postId),
        logged
          ? JSON.parse(localStorage.getItem("token") || "{}").accessToken
          : ""
      );
      setResponse(res.data);
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getDetailsPostData = async () => {
      setLoading(false);
      try {
        const res: any = await feed.getDetailsPost(
          Number(params.postId),
          logged ? TokenService.getLocalAccessToken() : ""
        );
        setResponse(res.data);
        setLoading(true);
      } catch (e: any) {
        console.log(e);
      }
    };

    getDetailsPostData();
  }, []);

  const commentQuery = useQuery({
    queryKey: "feed",
    queryFn: fetching,
    refetchOnWindowFocus: false,
  });

  return (
    <React.Fragment>
      <Header isNeedSearch={false} />
      <S.DetailsPostLayout>
        {removeCommentModal && <RemoveCommentModal />}
        {loading ? (
          <>
            <S.Title>{response.title}</S.Title>
            <DetailsPostTag tagList={response.tagList} />
            <DetailsPostInfo
              author={response.author}
              createdAt={response.createdAt}
              like={response.likeCount}
              hit={response.hit}
            />
            <DetailsPostThumbnail imageUrl={response.thumbnail} />
            <DetailsPostContent content={response.content} />
            <Category>📖 댓글</Category>
            <DetailsPostTextarea />
          </>
        ) : (
          <DetailsPostSkeleton />
        )}
        {response.comments?.map((idx: CommentType) => (
          <DetailsPostComment
            key={idx.id}
            id={idx.id}
            author={idx.author}
            content={idx.content}
            createdAt={idx.createdAt}
            isMine={idx.isMine}
            setState={setResponse}
          />
        ))}
      </S.DetailsPostLayout>
    </React.Fragment>
  );
}

export default DetailsPostPage;

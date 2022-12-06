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
import * as I from "Assets/svg";
import { CommentInterface } from "interfaces/IComment";
import { loggedAtom, removeCommentModalAtom } from "Atoms";
import { useRecoilState } from "recoil";
import DetailsPostTextarea from "../CommentTextarea";
import { useQuery } from "react-query";
import RemoveCommentModal from "components/Modal/CommentDeleteModal";
import TokenService from "util/TokenService";

function DetailsPostPage() {
  const [logged] = useRecoilState(loggedAtom);
  const [removeCommentModal] = useRecoilState(removeCommentModalAtom);
  const params = useParams();
  const [response, setResponse] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const fetching = async () => {
    try {
      const res: any = await feed.getDetailsPost(
        Number(params.postId),
        logged
          ? JSON.parse(localStorage.getItem("token") || "{}").accessToken
          : ""
      );
      setIsLiked(res.data.isLiked);
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
        setIsLiked(res.data.isLiked);
        setResponse(res.data);
        setLoading(true);
      } catch (e: any) {
        console.log(e);
      }
    };

    getDetailsPostData();
  }, []);

  const Like = async () => {
    try {
      if (isLiked) {
        const res: any = await feed.CancleLikePost(Number(params.postId));
        setIsLiked(!isLiked);
      } else {
        const res: any = await feed.LikePost(Number(params.postId));
        setIsLiked(!isLiked);
      }
    } catch (e) {
      console.log(e);
    }
  };

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
            <S.Box>
              <S.Title>{response.title}</S.Title>
              <S.SvgBox onClick={Like} isLiked={isLiked}>
                {isLiked ? <I.PostLiked /> : <I.PostLike />}
              </S.SvgBox>
            </S.Box>
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
        {response.comments?.map((idx: CommentInterface) => (
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

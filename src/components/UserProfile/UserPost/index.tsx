import { PostBox } from "components/Common";
import PostIsNull from "components/PostIsNull/PostIsNull";
import user from "data/request/user";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as S from "./style";
import TokenService from "util/TokenService";

export default function UserPost() {
  const [feedList, setFeedList] = useState<any[]>([]);
  const [isMine, setIsMine] = useState<boolean>(false);
  const [postsNull, setPostsNull] = useState<boolean>(false);
  const params = useParams();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res: any = await user.getUserInfo(
          TokenService.getLocalAccessToken(),
          String(params.nickname)
        );
        setIsMine(res.data.isMine);
        setFeedList(res.data.feedList);
        if (res.data.feedList.length === 0) {
          setPostsNull(true);
        }
      } catch (e: any) {
        console.log(e);
      }
    };

    getUserInfo();
  }, [params.nickname]);

  const fetch = async () => {
    try {
      const res: any = await user.getUserInfo(
        TokenService.getLocalAccessToken(),
        String(params.nickname)
      );
      setIsMine(res.data.isMine);
      setFeedList(res.data.feedList);
    } catch (e: any) {
      console.log(e);
    }
  };

  const userProfileQuery = useQuery({
    queryKey: "UserProfile",
    queryFn: fetch,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {postsNull ? (
        <PostIsNull />
      ) : (
        <S.UserPostsBox>
          {feedList.map((post) => (
            <PostBox
              key={post.id}
              id={post.id}
              title={post.title}
              imageUrl={post.thumbnail}
              content={post.previewContent}
              view={post.hit}
              like={post.likeCount}
              isMine={isMine}
              isDefault={false}
              inUserPage={true}
            />
          ))}
        </S.UserPostsBox>
      )}
    </>
  );
}

import { PostBox } from "components/Common";
import { useEffect, useState } from "react";
import * as S from "./style";
import LikePostIsNull from "components/PostIsNull/LikePostIsNull";
import TokenService from "util/TokenService";
import feed from "data/request/feed";
import { marked } from "marked";

export default function MyLikePost() {
  const [isMine] = useState<boolean>(false);
  const [postsNull, setPostsNull] = useState<boolean>(false);
  const [likeList, setLikeList] = useState<any[]>([]);

  useEffect(() => {
    const getMyLikePosts = async () => {
      try {
        const res: any = await feed.getMyLikeFeedList(
          TokenService.getLocalAccessToken()
        );

        setLikeList(res.data.list);

        if (res.data.list.length === 0) {
          setPostsNull(true);
        }
      } catch (e: any) {
        console.log(e);
      }
    };
    getMyLikePosts();
  }, []);

  return (
    <>
      {postsNull ? (
        <LikePostIsNull />
      ) : (
        <S.MyLikesPostsBox>
          {likeList.map((post) => (
            <PostBox
              key={post.id}
              id={post.id}
              title={post.title}
              imageUrl={post.thumbnail}
              content={
                marked(post.previewContent).replace(/<[^>]+>/g, "") + "..."
              }
              view={post.hit}
              like={post.likeCount}
              isMine={isMine}
              isDefault={false}
              inUserPage={true}
            />
          ))}
        </S.MyLikesPostsBox>
      )}
    </>
  );
}

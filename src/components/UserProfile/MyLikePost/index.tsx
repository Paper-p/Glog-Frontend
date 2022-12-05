import { deletePostModalAtom, loggedAtom, MyLikeAtom, MyPostAtom } from "atoms";
import { PostBox } from "components/Common";
import Category from "components/Common/Category";
import PostIsNull from "components/PostIsNull";
import DeletePostModal from "components/Modal/DeletePostModal";
import user from "data/request/user";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as S from "./style";
import * as I from "assets/svg";
import LikePostIsNull from "components/PostIsNull/LikePostIsNull";
import feed from "data/request/feed";
import TokenService from "util/TokenService";

export default function MyLikePost() {
  const [isMine, setIsMine] = useState<boolean>(false);
  const [postsNull, setPostsNull] = useState<boolean>(false);
  const [myLike] = useRecoilState(MyLikeAtom);
  const [logged] = useRecoilState(loggedAtom);
  const [likeList, setLikeList] = useState<any[]>([]);

  useEffect(() => {
    const getMyLikePosts = async () => {
      try {
        const res: any = await feed.getMyLikeFeedList(
          logged && TokenService.getLocalAccessToken()
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
  }, [myLike]);

  return (
    <>
      {postsNull ? (
        <LikePostIsNull />
      ) : (
        <S.MyPostsBox>
          {likeList.map((post) => (
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
        </S.MyPostsBox>
      )}
    </>
  );
}

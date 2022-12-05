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

export default function MyLikePost() {
  const [userInfo, setUserInfo] = useState<any>({});
  const [feedList, setFeedList] = useState<any[]>([]);
  const [isMine, setIsMine] = useState<boolean>(false);
  const [postsNull, setPostsNull] = useState<boolean>(false);
  const params = useParams();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res: any = await user.getUserInfo(
          JSON.parse(localStorage.getItem("token") || "{}").accessToken,
          String(params.nickname)
        );
        setIsMine(res.data.isMine);
        setFeedList(res.data.feedList);
        setUserInfo(res.data);
        if (res.data.feedList.length === 0) {
          setPostsNull(true);
        }
      } catch (e: any) {
        console.log(e);
      }
    };
    getUserInfo();
  }, [params.ninkname]);

  const getUserInfo = async () => {
    try {
      const res: any = await user.getUserInfo(
        JSON.parse(localStorage.getItem("token") || "{}").accessToken,
        String(params.nickname)
      );
      setIsMine(res.data.isMine);
      setFeedList(res.data.feedList);
      setUserInfo(res.data);
    } catch (e: any) {
      console.log(e);
    }
  };

  const postsQuery = useQuery({
    queryKey: "posts",
    queryFn: getUserInfo,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {postsNull ? (
        <LikePostIsNull />
      ) : (
        <S.MyPostsBox>
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
        </S.MyPostsBox>
      )}
    </>
  );
}
import { deletePostModalAtom, loggedAtom, MyLikeAtom, MyPostAtom } from "Atoms";
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
import * as I from "Assets/svg";
import TokenService from "util/TokenService";

export default function MyLikePost() {
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
  }, []);

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

import { loggedAtom } from "atoms";
import { PostBox } from "components/Common";
import Category from "components/Common/Category";
import user from "data/request/user";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as S from "./style";

export default function UserPropfile() {
  const [userInfo, setUserInfo] = useState<any>({});
  const [feedList, setFeedList] = useState<any[]>([]);
  const [isMine, setIsMine] = useState<boolean>(false);
  const [logged] = useRecoilState(loggedAtom);
  const navigator = useNavigate();
  const params = useParams();

  useEffect(() => {
    console.log(params.nickname);

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

    if (isMine) {
      if (!logged) {
        navigator("/signin");
      }
    }

    getUserInfo();
  }, []);

  return (
    <>
      <S.ProfileLayout>
        <S.ProfileBox>
          <S.ProfileImage src={userInfo.profileImageUrl} />
          <S.ProfileName>{userInfo.nickname}</S.ProfileName>
        </S.ProfileBox>
      </S.ProfileLayout>
      <S.MyPostsLayout>
        <S.CategoryBox>
          <Category>
            {isMine ? "💻내 게시물's" : `💻 ${userInfo.nickname}님의 게시물's`}
          </Category>
        </S.CategoryBox>
        <S.MyPostsBox>
          {feedList.map((post) => (
            <PostBox
              isDefault={false}
              key={post.id}
              id={post.id}
              title={post.title}
              imageUrl={post.thumbnail}
              content={post.previewContent}
              view={post.hit}
              like={post.likeCount}
            />
          ))}
        </S.MyPostsBox>
      </S.MyPostsLayout>
    </>
  );
}

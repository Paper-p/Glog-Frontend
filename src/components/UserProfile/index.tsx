import { loggedAtom } from "atoms";
import { PostBox } from "components/Common";
import Category from "components/Common/Category";
import user from "data/request/user";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useLocation } from "react-router-dom";
import * as S from "./style";

interface LocationType {
  userId: number;
}

export default function UserPropfile() {
  const [userInfo, setUserInfo] = useState<any>({});
  const [feedList, setFeedList] = useState<any[]>([]);
  const [logged] = useRecoilState(loggedAtom);
  const navigator = useNavigate();
  const location = useLocation().state as LocationType;

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res: any = await user.getUserInfo(
          JSON.parse(localStorage.getItem("token") || "{}").accessToken,
          location.userId
        );
        setFeedList(res.data.feedList);
        setUserInfo(res.data);
      } catch (e: any) {
        console.log(e);
      }
    };

    if (!logged) {
      navigator("/signin");
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
          <Category>💻내 게시물's</Category>
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

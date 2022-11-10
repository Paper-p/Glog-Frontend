import { loggedAtom } from "atoms";
import Category from "components/Common/Category";
import Post from "components/Common/Post";
import user from "data/request/user";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as S from "./style";

export default function MyPageInfo() {
  const [myInfo, setMyInfo] = useState<any>({});
  const [myFeedList, setMyFeedList] = useState<any[]>([]);
  const [logged] = useRecoilState(loggedAtom);
  const navigator = useNavigate();
  useEffect(() => {
    const getMyInfo = async () => {
      try {
        const res: any = await user.getMyInfo(
          JSON.parse(localStorage.getItem("token") || "{}").accessToken
        );
        setMyFeedList(res.data.feedList);
        setMyInfo(res.data);
      } catch (e: any) {
        console.log(e);
      }
    };
    const isLogged = () => {
      if (!logged) {
        navigator("/signin");
      }
    };

    isLogged();
    getMyInfo();
  }, []);

  return (
    <>
      <S.ProfileLayout>
        <S.ProfileBox>
          <S.ProfileImage src={myInfo.profileImageUrl} />
          <S.ProfileName>{myInfo.nickname}</S.ProfileName>
        </S.ProfileBox>
      </S.ProfileLayout>
      <S.MyPostsLayout>
        <S.CategoryBox>
          <Category>💻내 게시물's</Category>
        </S.CategoryBox>
        <S.MyPostsBox>
          {myFeedList.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              thumbnail={post.thumbnail}
              previewContent={post.previewContent}
              hit={post.hit}
              likeCount={post.likeCount}
            />
          ))}
        </S.MyPostsBox>
      </S.MyPostsLayout>
    </>
  );
}

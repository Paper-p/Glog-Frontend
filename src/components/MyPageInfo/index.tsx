import Category from "components/Common/Category";
import Post from "components/Common/Post";
import user from "data/request/user";
import { useEffect, useState } from "react";
import * as S from "./style";

export default function MyPageInfo() {
  const [myInfo, setMyInfo] = useState<any[]>([]);
  useEffect(() => {
    const getMyInfo = async () => {
      try {
        const res: any = await user.getMyInfo(
          String(window.localStorage.getItem("access-token"))
        );
        setMyInfo(res.data.feedList);
        console.log(res.data);
      } catch (e: any) {
        console.log(e);
      }
    };

    getMyInfo();
  }, []);

  return (
    <>
      <S.ProfileLayout>
        <S.ProfileBox>
          <S.ProfileImage src="images/profile.jpeg" />
          <S.ProfileName>wheniwasym</S.ProfileName>
        </S.ProfileBox>
      </S.ProfileLayout>
      <S.MyPostsLayout>
        <S.CategoryBox>
          <Category>💻내 게시물's</Category>
        </S.CategoryBox>
        <S.MyPostsBox>
          {myInfo.map((post) => (
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

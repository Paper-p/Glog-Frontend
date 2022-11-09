import Category from "components/Common/Category";
import Post from "components/Common/Post";
import user from "data/request/user";
import { useEffect } from "react";
import * as S from "./style";

export default function MyPageInfo() {
  useEffect(() => {
    const getMyInfo = async () => {
      try {
        const res: any = await user.getMyInfo(
          String(window.localStorage.getItem("access-token"))
        );
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
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </S.MyPostsBox>
      </S.MyPostsLayout>
    </>
  );
}

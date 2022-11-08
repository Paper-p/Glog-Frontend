import Category from "components/Common/Category";
import Poster from "components/Common/Poster";
import * as S from "./style";

export default function MyPageInfo() {
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
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
        </S.MyPostsBox>
      </S.MyPostsLayout>
    </>
  );
}

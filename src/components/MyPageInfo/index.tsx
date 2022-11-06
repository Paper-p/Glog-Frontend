import Poster from "components/Poster";
import * as S from "./style";

export default function MyPageInfo() {
  return (
    <>
      <S.Profile_Layout>
        <S.Profile_Box>
          <S.ProfileImage src="images/profile.jpeg" />
          <S.ProfileName>wheniwasym</S.ProfileName>
        </S.Profile_Box>
      </S.Profile_Layout>
      <S.MyPost>내 게시물's</S.MyPost>
      <S.MyPosts_Layout>
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
      </S.MyPosts_Layout>
    </>
  );
}

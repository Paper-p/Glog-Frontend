import * as S from "./style";
import * as I from "assets/svg";

export default function Post() {
  return (
    <S.Poster_Box>
      <S.Thumbnail src="images/profile.jpeg" />
      <S.TextBox>
        <S.Title>유저 리서치(User Research)란?</S.Title>
        <S.Description>
          일상에서 제품을 이해하고 사용하는데 영향을 미치는 사람의 행위와 동기
        </S.Description>
        <S.TextBox_Bottom>
          <S.LikeBox>
            <I.Like />
            <p>90</p>
          </S.LikeBox>
          <S.ViewsBox>
            <I.Views />
            <p>12</p>
          </S.ViewsBox>
        </S.TextBox_Bottom>
      </S.TextBox>
    </S.Poster_Box>
  );
}

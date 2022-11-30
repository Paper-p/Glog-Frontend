import { Category } from "components/Common";
import React from "react";
import * as S from "./style";

function MainPageHotPosts() {
  return (
    <S.HotPostsLayout>
      <S.CategoryBox>
        <Category>🔥 HOT’</Category>
      </S.CategoryBox>
      <S.HotPostList></S.HotPostList>
    </S.HotPostsLayout>
  );
}

export default MainPageHotPosts;

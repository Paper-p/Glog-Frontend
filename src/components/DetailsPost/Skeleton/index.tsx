import React from "react";
import * as S from "./style";

function Skeleton() {
  return (
    <S.SkeletonLayout className="skeleton-item">
      <S.Title />
      <S.Tag />
      <S.InfoBox />
      <S.Image />
      <S.Content />
    </S.SkeletonLayout>
  );
}

export default Skeleton;

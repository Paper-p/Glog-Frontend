import React from "react";
import uuid from "react-uuid";
import * as S from "./style";

function HotPostsSkeleton() {
  const skeleton = () => {
    const returnList: any[] = [];
    for (let i = 0; i < 4; i++) {
      returnList.push(<S.Post key={uuid()} />);
    }
    return returnList;
  };

  return (
    <S.HotPostsSkeletonLayout>
      <S.Category />
      <S.HotPostList>{skeleton()}</S.HotPostList>
    </S.HotPostsSkeletonLayout>
  );
}

export default HotPostsSkeleton;

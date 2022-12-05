import React from "react";
import uuid from "react-uuid";
import * as S from "./style";

function UserProfilePageSkeleton() {
  const skeleton = () => {
    const returnList: any[] = [];
    for (let i = 0; i < 16; i++) {
      returnList.push(<S.Skeleton key={uuid()} />);
    }
    return returnList;
  };
  return <S.SkeletonLayout>{skeleton()}</S.SkeletonLayout>;
}

export default UserProfilePageSkeleton;

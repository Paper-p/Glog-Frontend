import * as S from "./style";
import uuid from "react-uuid";

function MainSkeleton() {
  const skeleton = () => {
    const returnList: any[] = [];
    for (let i = 0; i < 6; i++) {
      returnList.push(<S.Skeleton key={uuid()} />);
    }
    return returnList;
  };
  return <S.SkeletonLayout>{skeleton()}</S.SkeletonLayout>;
}

export default MainSkeleton;

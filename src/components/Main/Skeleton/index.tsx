import * as S from "./style";

function MainSkeleton() {
  const skeleton = () => {
    const returnList: any[] = [];
    for (let i = 0; i < 8; i++) {
      returnList.push(<S.Skeleton key={i} />);
    }
    return returnList;
  };
  return <S.SkeletonLayout>{skeleton()}</S.SkeletonLayout>;
}

export default MainSkeleton;

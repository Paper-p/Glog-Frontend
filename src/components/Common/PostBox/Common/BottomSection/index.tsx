import React from "react";
import * as S from "./style";
import * as I from "assets/svg";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  like: number;
  hit: number;
  isNormal?: boolean;
}

function BottomSection({ like, hit, isNormal, children }: Props) {
  return (
    <S.BottomSectionLayout className={isNormal ? "normal" : ""}>
      <S.ItemBox>
        <S.Svg className="like">
          <I.Like />
        </S.Svg>
        <S.ItemValue>{like}</S.ItemValue>
      </S.ItemBox>
      <S.ItemBox>
        <S.Svg>
          <I.Hit />
        </S.Svg>
        <S.ItemValue>{hit}</S.ItemValue>
      </S.ItemBox>
      {children}
    </S.BottomSectionLayout>
  );
}

export default BottomSection;

import React from "react";
import * as S from "./style";
import * as I from "assets/svg";

interface Props {
  like: number;
  hit: number;
}

function InfoBox({ like, hit }: Props) {
  return (
    <S.InfoBox>
      <S.Info>
        <S.Svg className="heart">
          <I.Like />
        </S.Svg>
        <p>{like}</p>
      </S.Info>
      <S.Info>
        <S.Svg className="view">
          <I.Hit />
        </S.Svg>
        <p>{hit}</p>
      </S.Info>
    </S.InfoBox>
  );
}

export default InfoBox;

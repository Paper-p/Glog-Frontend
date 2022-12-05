import * as S from "./style";
import * as I from "Assets/svg";
import React from "react";

interface PropsType {
  width: number;
  height: number;
}

function Logo({ width, height }: PropsType) {
  return (
    <S.LogoWrapper width={width} height={height} className="logo">
      <S.SmallCircle />
      <S.BigCircle />
      <S.SvgWrapper width={width} height={height}>
        <I.Glog />
      </S.SvgWrapper>
    </S.LogoWrapper>
  );
}

export default React.memo(Logo);

import * as S from "./style";
import * as I from "Assets/svg";
import React from "react";

type PropsType = {
  width: number;
  height: number;
};

const Logo: React.FC<PropsType> = ({ width, height }) => {
  return (
    <S.LogoWrapper width={width} height={height}>
      <S.SmallCircle />
      <S.BigCircle />
      <S.SvgWrapper width={width} height={height}>
        <I.Glog />
      </S.SvgWrapper>
    </S.LogoWrapper>
  );
};

export default React.memo(Logo);

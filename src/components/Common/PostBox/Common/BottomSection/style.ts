import styled from "@emotion/styled";

export const BottomSectionLayout = styled.div`
  width: 91.5%;
  display: flex;
  position: absolute;
  bottom: 12px;
  gap: 8px;

  &.normal {
    bottom: 24.5px;
  }
`;

export const ItemBox = styled.div`
  display: flex;
  gap: 4.44px;
`;

export const Svg = styled.div`
  & > svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  &.like {
    margin-bottom: 1.4px;
  }
`;

export const ItemValue = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #929292;
  margin-top: 2px;
`;

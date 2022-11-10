import styled from "styled-components";

export const InfoBox = styled.div`
  display: flex;

  p {
    font-weight: 500;
    font-size: 14px;
    color: #929292;
  }

  gap: 8px;
`;

export const Info = styled.div`
  display: flex;
  gap: 6px;
`;

export const Svg = styled.div`
  & > svg {
    display: block;
  }
`;

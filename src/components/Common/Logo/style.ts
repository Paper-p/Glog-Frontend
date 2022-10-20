import styled from "@emotion/styled";

type WrapperType = {
  width: number;
  height: number;
};

export const LogoWrapper = styled.div<WrapperType>`
  position: relative;
  width: ${(e) => {
    return `${e.width}px`;
  }};
  height: ${(e) => {
    return `${e.height}px`;
  }};
`;

export const SmallCircle = styled.div`
  position: absolute;
  bottom: 0;
  width: 15%;
  height: 50%;
  background: conic-gradient(
    from 180deg at 50% 50%,
    #0f9864 0deg,
    rgba(0, 255, 117, 0) 360deg
  );
  border-radius: 50%;
`;

export const BigCircle = styled.div`
  position: absolute;
  left: 5%;
  width: 27.5%;
  height: 95%;
  background: conic-gradient(
    from 180deg at 50% 50%,
    #0f9864 0deg,
    rgba(0, 255, 117, 0) 360deg
  );
  border-radius: 50%;
`;

export const SvgWrapper = styled.div<WrapperType>`
  position: absolute;
  right: 0;
  width: ${(e) => {
    return `${e.width}px`;
  }};
  height: ${(e) => {
    return `${e.height}px`;
  }};

  & > svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

import styled from "@emotion/styled";

export const DetailsPostLayout = styled.div`
  width: 50vw;
  margin: auto;
  padding: 65px 65px;

  @media screen and (max-width: 1350px) {
    width: 70vw;
  }

  @media screen and (max-width: 900px) {
    width: 93vw;
    padding: 65px 0px;
  }
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 48px;
  line-height: 57px;
  color: #ffffff;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SvgBox = styled.div<{ isLiked: boolean }>`
  cursor: pointer;
  height: 100%;
  width: 57px;
  transition: 0.7s;
  transform: ${(e) => (e.isLiked ? "rotate(360deg)" : "")};

  & > svg {
    margin-bottom: -36px;
    height: 100%;
    width: 100%;
  }
`;

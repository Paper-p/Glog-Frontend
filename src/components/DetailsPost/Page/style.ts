import styled from "@emotion/styled";

export const DetailsPostLayout = styled.div`
  width: 50vw;
  margin: auto;
  padding: 65px 65px;

  @media screen and (max-width: 1430px) {
    width: 70vw;
  }

  @media screen and (max-width: 1000px) {
    width: 85vw;
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
  }
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 48px;
  line-height: 57px;
  color: #ffffff;
`;

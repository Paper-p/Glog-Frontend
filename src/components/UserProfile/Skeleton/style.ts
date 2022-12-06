import styled from "@emotion/styled";

export const SkeletonLayout = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 2vw 1.5vw;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @-webkit-keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
`;

export const Skeleton = styled.div`
  width: 17vw;
  height: 330px;
  border-radius: 10px;
  -webkit-animation: skeleton-gradient 1.5s infinite ease-in-out;
  animation: skeleton-gradient 1.5s infinite ease-in-out;

  @media screen and (max-width: 1350px) {
    width: 21vw;
  }

  @media screen and (max-width: 1100px) {
    width: 30vw;
  }

  @media screen and (max-width: 850px) {
    width: 46vw;
  }

  @media screen and (max-width: 750px) {
    width: 37vw;
  }

  @media screen and (max-width: 650px) {
    width: 75vw;
  }
`;

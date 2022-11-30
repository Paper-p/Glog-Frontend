import styled from "@emotion/styled";

export const SkeletonLayout = styled.div`
  width: 72.5%;
  gap: 0.83vw 0.83vw;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 1rem;

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

  @media screen and (max-width: 1350px) {
    width: 90vw;
    gap: 1.3vw 0.6vw;
  }

  @media screen and (max-width: 1000px) {
    width: 95vw;
  }

  @media screen and (max-width: 850px) {
    width: 85vw;
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 600px) {
    width: 95vw;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Skeleton = styled.div`
  width: 35.63vw;
  height: 150px;
  border-radius: 10px;
  -webkit-animation: skeleton-gradient 1.5s infinite ease-in-out;
  animation: skeleton-gradient 1.5s infinite ease-in-out;

  @media screen and (max-width: 1350px) {
    width: 43vw;
  }

  @media screen and (max-width: 1000px) {
    width: 45vw;
  }

  @media screen and (max-width: 850px) {
    width: 80vw;
    margin: auto;
  }

  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`;

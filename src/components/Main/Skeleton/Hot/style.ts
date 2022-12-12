import styled from "@emotion/styled";

export const HotPostsSkeletonLayout = styled.div`
  width: 72.5vw;
  margin: auto;

  @media screen and (max-width: 1350px) {
    width: 95vw;
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

export const Category = styled.div`
  width: 100px;
  height: 37px;
  margin: 60px 0 15px 0;
  border-radius: 8px;
  -webkit-animation: skeleton-gradient 1.5s infinite ease-in-out;
  animation: skeleton-gradient 1.5s infinite ease-in-out;
`;

export const HotPostList = styled.div`
  width: 100%;
  display: grid;
  gap: 0.83vw 0.83vw;
  margin: auto;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1350px) {
    gap: 1.3vw 0.6vw;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6vw 1.3vw;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Post = styled.div`
  width: 100%;
  height: 330px;
  border-radius: 8px;
  -webkit-animation: skeleton-gradient 1.5s infinite ease-in-out;
  animation: skeleton-gradient 1.5s infinite ease-in-out;
`;

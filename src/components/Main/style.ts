import styled from "@emotion/styled";

export const CategoryBox = styled.div`
  width: 72.5%;
  margin: auto;
  padding: 400px 0 22.5px 0;
`;

export const PostListSection = styled.div`
  width: 72.5%;
  gap: 0.83vw 0.83vw;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 1rem;
`;

export const SkeletonLayout = styled.div`
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

export const Skeleton = styled.div``;

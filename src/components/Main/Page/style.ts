import styled from "@emotion/styled";

export const MainPageLayout = styled.div`
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
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

export const MainPageNormalPosts = styled.div`
  width: 72.5vw;
  margin: auto;

  @media screen and (max-width: 1350px) {
    width: 95vw;
  }
`;

export const CategoryBox = styled.div`
  width: 100%;
  padding: 70px 0 15px 0;
`;

export const PostListSection = styled.section`
  width: 100%;
  gap: 0.83vw 0.83vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 1rem;

  @media screen and (max-width: 1350px) {
    gap: 1.3vw 0.6vw;
  }

  @media screen and (max-width: 850px) {
    gap: 3vw 0;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SearchResultIsNone = styled.div`
  display: flex;
  gap: 10px;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export const SearchText = styled.p`
  color: #fa3830;
  font-weight: 400;
`;

export const SkeletonCategory = styled.div`
  width: 83px;
  height: 37px;
  margin: 70px 0 15px 0;
  border-radius: 8px;
  -webkit-animation: skeleton-gradient 1.5s infinite ease-in-out;
  animation: skeleton-gradient 1.5s infinite ease-in-out;
`;

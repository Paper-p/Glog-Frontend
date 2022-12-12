import styled from "styled-components";

export const HotPostsLayout = styled.div`
  width: 72.5%;
  margin: auto;

  @media screen and (max-width: 1350px) {
    width: 95vw;
  }
`;

export const CategoryBox = styled.div`
  width: 100%;
  margin: auto;
  padding: 60px 0 15px 0;
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

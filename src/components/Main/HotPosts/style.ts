import styled from "styled-components";

export const HotPostsLayout = styled.div``;

export const CategoryBox = styled.div`
  width: 72.5%;
  margin: auto;
  padding: 90px 0 22.5px 0;

  @media screen and (max-width: 1350px) {
    width: 88.5vw;
  }

  @media screen and (max-width: 1000px) {
    width: 93vw;
  }

  @media screen and (max-width: 850px) {
    width: 80vw;
  }

  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`;

export const HotPostList = styled.div`
  width: 72.5%;
  gap: 0.83vw 0.83vw;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1350px) {
    width: 90vw;
    gap: 1.3vw 0.6vw;
  }

  @media screen and (max-width: 1000px) {
    width: 95vw;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6vw 1.3vw;
  }

  @media screen and (max-width: 850px) {
    width: 85vw;
    gap: 3vw 0;
  }

  @media screen and (max-width: 650px) {
    width: 80vw;
    gap: 2vw;
    overflow: auto;
    white-space: nowrap;
    display: flex;
  }

  @media screen and (max-width: 600px) {
    width: 90vw;
    gap: 2vw;
    overflow: auto;
    white-space: nowrap;
    display: flex;
  }
`;

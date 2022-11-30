import styled from "@emotion/styled";

export const CategoryBox = styled.div`
  width: 72.5%;
  margin: auto;
  padding: 90px 0 22.5px 0;
`;

export const PostListSection = styled.div`
  width: 72.5%;
  gap: 0.83vw 0.83vw;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 1rem;

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

// mobile: '640px',
// tablet: '960px',
// laptop: '1080px',

import styled from "@emotion/styled";

export const NormalPostBoxLayout = styled.div<{ backgroundImage: string }>`
  position: relative;
  width: 35.63vw;
  height: 150px;
  padding: 24.5px 36px;
  border-radius: 10px;
  background-image: ${(e) =>
    `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${e.backgroundImage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 0.2s;
  cursor: pointer;

  &.preview {
    width: 684px;
    margin: auto;
    pointer-events: none;

    @media screen and (max-width: 1350px) {
      width: 684px;
    }

    @media screen and (max-width: 1000px) {
      width: 684px;
    }

    @media screen and (max-width: 900px) {
      width: 524px;
    }

    @media screen and (max-width: 850px) {
      width: 524px;
    }

    @media screen and (max-width: 650px) {
      width: 390px;
    }

    @media screen and (max-width: 600px) {
      width: 390px;
    }
  }

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 1350px) {
    width: 43vw;
  }

  @media screen and (max-width: 1000px) {
    width: 45vw;
  }

  @media screen and (max-width: 850px) {
    width: 80vw;
  }

  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`;

import styled from "@emotion/styled";

export const NormalPostBoxLayout = styled.div`
  &.preview {
    pointer-events: none;
  }
`;

export const NormalPost = styled.div<{ backgroundImage: string }>`
  position: relative;
  width: 100%;
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

    @media screen and (max-width: 900px) {
      width: 524px;
    }

    @media screen and (max-width: 650px) {
      width: 390px;
    }
  }

  &:hover {
    transform: scale(1.02);
  }
`;

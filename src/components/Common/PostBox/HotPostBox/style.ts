import styled from "@emotion/styled";

export const HotPostBoxLayout = styled.div`
  position: relative;
  width: 17vw;
  height: 330px;
  background: none;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 1350px) {
    width: 20vw;
  }

  @media screen and (max-width: 1000px) {
    width: 45vw;
  }

  @media screen and (max-width: 850px) {
    width: 38vw;
  }

  @media screen and (max-width: 650px) {
    width: 45vw;

    &:hover {
      transform: scale(1);
    }
  }

  @media screen and (max-width: 600px) {
    width: 90vw;

    &:hover {
      transform: scale(1);
    }
  }
`;

export const Thumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto;
  border-radius: 10px;
`;

export const PostInfoSection = styled.section`
  width: 100%;
  height: 145px;
  position: absolute;
  bottom: 0;
  background: rgba(51, 51, 51, 0.7);
  backdrop-filter: blur(14px);
  border-radius: 10px;
  padding: 10px 13px 12px 12px;
`;

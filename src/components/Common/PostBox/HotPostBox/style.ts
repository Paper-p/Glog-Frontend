import styled from "@emotion/styled";

export const HotPostBoxLayout = styled.div`
  position: relative;
  width: 100%;
  height: 330px;
  background: none;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 650px) {
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

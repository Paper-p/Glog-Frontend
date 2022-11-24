import styled from "@emotion/styled";

export const PostBoxLayout = styled.div<{ isPreview: boolean | undefined }>`
  display: flex;
  justify-content: center;
  pointer-events: ${(e) => (e.isPreview ? "none" : "")};
  z-index: 1;
`;

export const PostBox = styled.div<{ url?: string }>`
  cursor: pointer;
  width: 35.63vw;
  height: 150px;
  border-radius: 10px;
  padding: 26px 39px;
  background-image: ${(e) =>
    e.url
      ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${e.url})`
      : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://cdn.head-fi.org/assets/classifieds/hf-classifieds_no-image-available_2.jpg)`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &.not-default {
    width: 17.19vw;
    height: 330px;
    position: relative;
    background: none;
    padding: 0;
  }
`;

export const PostTitle = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;

  &.default {
    font-weight: 600;
    font-size: 17px;
    line-height: 24px;
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

export const PostContent = styled.p`
  font-size: 15px;
  color: #85888d;
  font-weight: 400;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 72.5px;

  &.default {
    height: auto;
    font-size: 18px;
    color: #9c9c9c;
    -webkit-line-clamp: 1;
    line-height: 21px;
    margin-bottom: 34.5px;
  }
`;

export const TextBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 145px;
  background: rgba(51, 51, 51, 0.7);
  backdrop-filter: blur(14px);
  border-radius: 10px;
  padding: 10px 12px 12px 12px;
`;

export const InfoBox = styled.div`
  display: flex;

  p {
    font-weight: 500;
    font-size: 14px;
    color: #929292;
  }

  gap: 8px;
`;

export const Info = styled.div`
  display: flex;
  gap: 6px;
`;

export const Svg = styled.div`
  & > svg {
    display: block;
  }
`;

export const PostFooter = styled.div`
  display: flex;
  z-index: 999;
`;

export const ModifyBox = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  gap: 18px;
`;

export const Modify = styled.p`
  color: #7b7b7b;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;

export const Delete = styled.p`
  color: #e22e2e;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
`;

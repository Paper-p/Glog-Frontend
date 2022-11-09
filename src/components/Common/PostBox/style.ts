import styled from "@emotion/styled";

export const PostLayout = styled.div`
  display: flex;
  justify-content: center;
`;

export const PostBox = styled.div<{ url: string }>`
  width: 684px;
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
`;

export const PostTitle = styled.p`
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PostContent = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #9c9c9c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const InfoBox = styled.div`
  display: flex;
  margin-top: 34.5px;

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

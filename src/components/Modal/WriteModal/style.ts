import styled from "@emotion/styled";

export const WriteModal = styled.div`
  width: 600px;
  height: 339px;
  background: #252727;
  border-radius: 15px;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-top: 40px;
`;

export const UploadSvgBox = styled.div`
  width: 452px;
  margin: auto;
  display: flex;
  padding: 24px 0 9px 0;
  cursor: pointer;

  p {
    margin-left: 6px;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #18d570;
  }
`;

export const UploadSvg = styled.div`
  width: 15px;
  height: 15px;

  & > svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const PreviewBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Preview = styled.div<{ url: string }>`
  width: 452px;
  height: 100px;
  border-radius: 10px;
  padding: 22px 36px;
  background-image: ${(e) =>
    e.url
      ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${e.url})`
      : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://siliconvalleygazette.com/posts/what-is-the-404-not-found-error.png)`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const PreviewTitle = styled.p`
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  color: #fff;
`;

export const PreviewContent = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #9c9c9c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const UploadThumbnail = styled.div`
  display: flex;
  justify-content: center;

  input {
    display: none;
  }

  button {
    width: 452px;
    height: 40px;
    font-size: 15px;
    margin-top: 32px;
  }
`;

import styled from "@emotion/styled";

export const WriteModal = styled.div`
  width: 760px;
  height: 400px;
  background: #252727;
  border-radius: 15px;

  @media screen and (max-width: 900px) {
    width: 600px;
  }

  @media screen and (max-width: 650px) {
    width: 450px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-top: 40px;
`;

export const UploadSvgBox = styled.div`
  width: 684px;
  margin: auto;
  display: flex;
  padding: 35px 0 9px 0;

  p {
    margin-left: 6px;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #18d570;
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    width: 524px;
  }

  @media screen and (max-width: 650px) {
    width: 390px;
  }
`;

export const UploadSvg = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 10px;

  & > svg {
    cursor: pointer;

    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const UploadThumbnail = styled.div`
  display: flex;
  justify-content: center;

  input {
    display: none;
  }

  button {
    width: 682px;
    height: 45px;
    font-size: 17px;
    margin-top: 20px;

    @media screen and (max-width: 900px) {
      width: 524px;
    }

    @media screen and (max-width: 650px) {
      width: 390px;
    }
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 15px;
  color: #e83f28;
  text-align: center;
  font-weight: 600;
`;

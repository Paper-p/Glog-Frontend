import styled from "@emotion/styled";

export const ThumbnailModalLayout = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(0.1px);
`;

export const ThumbnailModal = styled.div`
  width: 800px;
  height: 750px;
  background: #252727;
  border-radius: 15px;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .button {
    margin-top: 80px;
  }
`;

export const InputFileBox = styled.div`
  display: flex;
  width: 684px;
  height: 338px;
  background: #656262;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 25%;

  .box-file-input {
    text-align: center;
  }

  .box-file-input label {
    display: inline-block;
    background: #23a3a7;
    color: #fff;
    padding: 0px 15px;
    line-height: 35px;
    cursor: pointer;
    border-radius: 7px;
    margin: 65px 0 40px 0;
  }

  .box-file-input label:after {
    content: "BROWSE";
    font-size: 15px;
  }

  .box-file-input .file-input {
    display: none;
  }

  .box-file-input .filename {
    display: inline-block;
    padding-left: 10px;
  }
`;

import styled from "@emotion/styled";

export const Footer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72.5%;
  height: 100px;
  left: 50%;
  bottom: 0;
  margin-left: -36.25%;
  background: #262626;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  font-size: 17px;

  p.error {
    color: #e83f28;
  }
`;

export const ButtonBox = styled.div`
  position: absolute;
  display: flex;
  gap: 40px;
  top: 50%;
  right: 5px;
  color: #18d570;
  transform: translate(-50%, -50%);

  p {
    cursor: pointer;
  }

  button {
    border: 0;
    outline: 0;
    background-color: #262626;
    color: #18d570;
    font-size: 17px;
  }
`;

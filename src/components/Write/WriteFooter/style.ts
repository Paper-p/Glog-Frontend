import styled from "@emotion/styled";

export const Footer = styled.div`
  position: fixed;
  width: 72.5%;
  height: 100px;
  left: 50%;
  bottom: 0;
  margin-left: -36.25%;
  background: #262626;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
`;

export const Part = styled.div`
  width: 33.3%;
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 100px;
  color: #e83f28;
  font-size: 18px;

  .exit {
    margin-left: -200px;
  }

  .submit {
    margin-right: -200px;
  }
`;

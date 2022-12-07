import styled from "@emotion/styled";

export const FooterLayout = styled.footer`
  position: fixed;
  display: flex;
  width: 72.5%;
  height: 100px;
  left: 50%;
  bottom: 0;
  margin-left: -36.25%;
  align-items: center;
  justify-content: center;
  background: #262626;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  font-size: 17px;

  p.error {
    color: #e83f28;

    @media screen and (max-width: 900px) {
      margin-right: 250px;
    }

    @media screen and (max-width: 600px) {
      margin-right: 180px;
    }
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

  @media screen and (max-width: 900px) {
    gap: 20px;
  }
  @media screen and (max-width: 600px) {
    gap: 10px;
    right: -30px;
  }

  p {
    cursor: pointer;
    font-weight: bold;
  }

  div {
    font-weight: bold;
    color: #18d570;
    font-size: 17px;
  }
`;

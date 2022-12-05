import styled from "@emotion/styled";

export const LogoutModal = styled.div`
  width: 400px;
  height: 190px;
  background: #252727;
  padding: 30px;
  border-radius: 2px;
`;

export const TitleText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: #dbd4d4;
  margin-bottom: 15px;
`;

export const Text = styled.p`
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #dbd4d4;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 38px;
  align-items: center;
  justify-content: center;

  button {
    width: 130px;
    height: 30px;
    font-size: 14px;
    margin-top: 48px;
  }
`;

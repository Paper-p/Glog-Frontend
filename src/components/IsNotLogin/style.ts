import styled from "@emotion/styled";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

export const Section = styled.div`
  display: flex;
  height: calc(100vh - 360px);
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: 600px;
  height: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Emoji = styled.div`
  font-size: 94px;
`;

export const WarnningText = styled.div`
  font-size: 24px;
  color: #d7d7d7;
`;

import styled from "@emotion/styled";

export const ModalLayout = styled.div`
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
  background-color: hsla(50, 33%, 25%, 0.01);
  backdrop-filter: blur(10px);
`;

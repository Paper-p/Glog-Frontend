import styled from "@emotion/styled";

export const SigninWrapper = styled.div`
  display: flex;
  height: calc(100vh - 170px);
  align-items: center;
  justify-content: center;
`;

export const SigninBox = styled.div`
  width: 366px;
  height: 410px;
  margin-bottom: 170px;
`;

export const LogoWrapper = styled.div`
  width: 333px;
  height: 96px;
`;

export const InputBox = styled.div`
  & > * {
    margin-top: 20px;
  }
`;

export const ButtonBox = styled.div`
  & > * {
    margin: 20px 10px 0 0;
  }
`;

export const HighlightText = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  padding-top: 20px;
  color: white;
  margin-bottom: 8px;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const TextUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const Text = styled.li`
  color: white;

  &:first-of-type {
    color: #39c078;
    cursor: pointer;
  }
`;

export const ErrorText = styled.div<{ isError: boolean }>`
  display: ${(e) => {
    return e.isError ? "block" : "none";
  }};
  text-align: center;
  color: #e83f28;
  font-size: 14px;
  margin-top: 72px;
`;

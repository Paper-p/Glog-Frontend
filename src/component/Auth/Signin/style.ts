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
    margin: 20px 0;
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

export const LoginButton = styled.button`
  width: 366px;
  height: 60px;
  background: linear-gradient(95.2deg, #17d56f 45.83%, #119e6d 93.3%);
  border-radius: 10px;
  border: none;
  font-weight: 800;
  font-size: 18px;
  color: #1c1c1c;
  cursor: pointer;
  &:hover {
    box-sizing: border-box;
    background: #f5f5f5;
    border: 2px solid #17d46f;
    color: #17d46f;
  }
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
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

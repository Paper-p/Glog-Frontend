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
  background-color: white;
`;

export const LogoWrapper = styled.div`
  width: 333px;
  height: 96px;

  & > svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const HighlightText = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  padding-top: 20px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 52px;
  background: #252727;
  border-radius: 10px;
  margin-top: 20px;
  align-items: center;

  &.password {
    margin-top: 12px;
  }
`;

export const StyledInputBase = styled.input`
  width: 90%;
  height: 40px;
  border: none;
`;

export const InputID = styled(StyledInputBase)``;

export const InputPassword = styled(StyledInputBase)``;

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
`;

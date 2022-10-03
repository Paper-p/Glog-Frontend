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

export const HighlightText = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  padding-top: 20px;
  color: white;
  margin-bottom: 8px;
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
    margin-bottom: 32px;
  }
`;

export const StyledInputBase = styled.input`
  width: 90%;
  height: 40px;
  border: none;
  margin: 6px;
  background: #252727;
  font-size: 16px;
  color: #ffffff7a;

  &:focus {
    outline: none;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #252727 inset !important;
  }
`;

export const SortInput = styled.div`
  display: flex;
  text-align: center;
  margin-left: 10px;
`;

export const StyledSvg = styled.div`
  margin: auto;

  & > svg {
    margin-top: 1.5px;
  }
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

  &:hover {
    border: 1px solid linear-gradient(91.86deg, #17d46f 7.02%, #119e6d 105.05%);
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

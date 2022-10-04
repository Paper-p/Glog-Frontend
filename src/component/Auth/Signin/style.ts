import styled from "@emotion/styled";

type ButtonPropsType = {
  isFocused: boolean;
};

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

export const InputWrapper = styled.div<{ isError: boolean }>`
  width: 100%;
  height: 52px;
  background: #252727;
  border-radius: 10px;
  margin-top: 20px;
  align-items: center;
  ${(e) => {
    return e.isError ? "filter: drop-shadow(0px 2px 13px #E45B3C);" : "";
  }}

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

export const InputID = styled(StyledInputBase)``;

export const InputPassword = styled(StyledInputBase)``;

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

export const LoginButton = styled.button<ButtonPropsType>`
  width: 366px;
  height: 60px;
  background: ${(e) => {
    return e.isFocused
      ? "linear-gradient(95.2deg, #17D56F 45.83%, #119E6D 93.3%)"
      : "#505151";
  }};
  border-radius: 10px;
  border: none;
  font-weight: 800;
  font-size: 18px;
  color: ${(e) => {
    return e.isFocused ? "#1C1C1C" : "#9E9E9E";
  }};
  cursor: ${(e) => {
    return e.isFocused ? "pointer" : "";
  }};

  &:hover {
    ${(e) => {
      return e.isFocused
        ? "box-sizing: border-box; background: #f5f5f5; border: 2px solid #17d46f; color: #17d46f;"
        : "";
    }};
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

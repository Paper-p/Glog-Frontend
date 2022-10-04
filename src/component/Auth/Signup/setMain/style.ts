import styled from "@emotion/styled";

type ButtonPropsType = {
  isFocused: boolean;
};

export const SignupWrapper = styled.div`
  display: flex;
  height: calc(100vh - 170px);
  align-items: center;
  justify-content: center;
`;

export const SignupBox = styled.div`
  width: 366px;
  margin-bottom: 170px;
`;

export const GifBox = styled.div`
  text-align: center;
`;

export const StyledGif = styled.img`
  width: 180px;
  height: 140px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 52px;
  background: #252727;
  border-radius: 10px;
  margin-top: 20px;
  align-items: center;
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

export const SignupButton = styled.button<ButtonPropsType>`
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
  cursor: pointer;
  margin-top: 16px;
  margin-bottom: 20px;

  &:hover {
    border: 1px solid linear-gradient(91.86deg, #17d46f 7.02%, #119e6d 105.05%);
  }
`;

export const TextBox = styled.div`
  text-align: center;
  color: #eaeaea;
  font-size: 14px;
`;

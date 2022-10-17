import styled from "@emotion/styled";

export const InputElements = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const ErrorText = styled.div`
  display: flex;
  margin-left: 20px;
  color: #e83f28;
  align-items: center;
`;

export const InputBox = styled.div<{ isError: boolean }>`
  width: 366px;
  height: 52px;
  background: #252727;
  border-radius: 10px;
  align-items: center;

  filter: ${(e) => (e.isError ? "drop-shadow(0px 1px 7px #e45b3c)" : "")};
`;

export const Input = styled.input`
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
    box-shadow: 0 0 0 30px #252727 inset !important;
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

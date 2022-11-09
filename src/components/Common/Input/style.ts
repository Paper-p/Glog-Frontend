import styled from "@emotion/styled";

export const InputElements = styled.div`
  display: flex;
  margin-top: 20px;
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
  height: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const StyledSvg = styled.div`
  margin: auto;

  &.need-margin > svg {
    margin-top: 1.5px;
  }
  &.search {
    width: 13px;
    height: 22.5px;
    margin: 10px;
    padding-bottom: 1px;
  }
`;

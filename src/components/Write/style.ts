import styled from "@emotion/styled";

export const WritePostLayout = styled.div`
  width: 72.5%;
  margin: auto;
  padding-top: 40px;
`;

export const TitleBox = styled.div<{ isNull: boolean }>`
  width: 100%;
  height: 100px;
  background: #1a1b1e;
  border-bottom: 1px solid #484848;
  border-radius: ${(e) => (e.isNull ? "10px" : "")};
  padding: 10px;
  filter: ${(e) => (e.isNull ? "drop-shadow(0px 1px 7px #e45b3c)" : "")};
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 40px;
  background: #1a1b1e;
  border: none;
  color: #ededed;
  font-weight: 500;

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

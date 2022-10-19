import styled from "@emotion/styled";

export const InputSection = styled.div`
  margin-top: 65px;
  height: 250px;
  display: flex;
  justify-content: center;
`;

export const TitleBox = styled.div`
  width: 73%;
  height: 100px;
  background: #1a1b1e;
  border-bottom: 1px solid #484848;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 48px;
  background: #1a1b1e;
  border: none;
  color: #ededed;

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

export const Markdown = styled.div`
  font-size: 18px;
  width: 100%;
  display: flex;
  justify-content: center;

  & .md-editor {
    width: 73%;
  }

  & .md-editor-toolbar-warp {
    height: 60px;
    margin: auto;
  }
`;

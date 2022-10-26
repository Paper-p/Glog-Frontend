import styled from "@emotion/styled";

export const WriteLayout = styled.section`
  width: 72.5%;
  margin: auto;
  padding-top: 120px;
`;

export const TitleBox = styled.div`
  width: 100%;
  height: 100px;
  background: #1a1b1e;
  border-bottom: 1px solid #484848;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 48px;
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

export const Tabbar = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  height: 60px;
  background: #373b45;
  border-radius: 10px 10px 0 0;
  border-top: 1px solid #767676;
  border-left: 1px solid #767676;
  border-right: 1px solid #767676;

  .is-active {
    background-color: #1f2125;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 3px double #1f2125;
  }
`;

export const Tabs = styled.div`
  display: flex;
  width: 150px;
  height: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #d8d7d7;
  font-weight: 700;
  cursor: pointer;
`;

export const Markdown = styled.div`
  width: 100%;
  height: 90vh;
  background: #1f2125;
  border-bottom: 1px solid #767676;
  border-left: 1px solid #767676;
  border-right: 1px solid #767676;

  .md-editor {
    font-size: 15px;
    background: #1f2125;
  }

  .md-editor-preview {
    display: none;
  }

  .wmde-markdown {
    background: #1f2125;
    padding: 50px;
    color: #bbbbbb;
  }

  .wmde-markdown pre > code {
    color: black;
  }
`;

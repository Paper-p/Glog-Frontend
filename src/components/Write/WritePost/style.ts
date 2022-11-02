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

export const ContentBox = styled.div<{ isNull: boolean }>`
  border-radius: 2px;
  border: 1px solid #767676;
  margin: 40px 0 150px 0;
  filter: ${(e) => (e.isNull ? "drop-shadow(0px 1px 7px #e45b3c)" : "")};
`;

export const Tabbar = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background: #373b45;

  .is-active {
    box-sizing: content-box;
    background-color: #1f2125;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
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
  background: #1f2125;

  .md-editor {
    min-height: 40vh;
    height: content;
    font-size: 15px;
    background: #1f2125;
  }

  .md-editor-preview {
    display: none;
  }

  .wmde-markdown {
    min-height: 40vh;
    height: content;
    font-size: 20px;
    background: #1f2125;
    color: #bbbbbb;
    padding: 50px;
  }

  .wmde-markdown pre > code {
    color: black;
  }
`;

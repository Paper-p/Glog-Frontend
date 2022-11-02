import styled from "@emotion/styled";

export const WritePostForm = styled.div`
  width: 72.5%;
  margin: auto;
  padding-top: 40px;
`;

export const TitleBox = styled.div<{ isError: boolean }>`
  width: 100%;
  height: 100px;
  background: #1a1b1e;
  border-bottom: 1px solid #484848;
  border-radius: ${(e) => (e.isError ? "10px" : "")};
  padding: ${(e) => (e.isError ? "20px" : "")};
  filter: ${(e) => (e.isError ? "drop-shadow(0px 1px 7px #e45b3c)" : "")};
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

export const Tabbar = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  margin-top: 40px;
  background: #373b45;
  border-radius: 3px 3px 0 0;

  border-top: 1px solid #767676;
  border-left: 1px solid #767676;
  border-right: 1px solid #767676;

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
  margin-bottom: 150px;
  background: #1f2125;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

  border-left: 1px solid #767676;
  border-right: 1px solid #767676;
  border-bottom: 1px solid #767676;

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

export const Footer = styled.div`
  position: fixed;
  width: 72.5%;
  height: 100px;
  left: 50%;
  bottom: 0;
  margin-left: -36.25%;
  background: #262626;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
`;

export const Part = styled.div`
  width: 33.3%;
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 100px;
  color: #e83f28;
  font-size: 20px;

  .exit {
    margin-left: -200px;
  }

  .submit {
    margin-right: -200px;
  }
`;

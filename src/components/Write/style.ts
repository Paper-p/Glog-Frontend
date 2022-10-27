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
  margin-top: 30px;
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

export const InputFileModalLayout = styled.div`
  width: 800px;
  height: 750px;
  background: #252727;
  border-radius: 10px;
`;

export const InputFileBox = styled.div`
  display: flex;
  width: 684px;
  height: 338px;
  background: #656262;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 25%;

  .box-file-input {
    text-align: center;
  }

  .box-file-input label {
    display: inline-block;
    background: #23a3a7;
    color: #fff;
    padding: 0px 15px;
    line-height: 35px;
    cursor: pointer;
    border-radius: 7px;
    margin: 65px 0 40px 0;
  }

  .box-file-input label:after {
    content: "BROWSE";
    font-size: 15px;
  }

  .box-file-input .file-input {
    display: none;
  }

  .box-file-input .filename {
    display: inline-block;
    padding-left: 10px;
  }
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .button {
    margin-top: 80px;
  }
`;

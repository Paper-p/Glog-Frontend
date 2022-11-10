import styled from "@emotion/styled";

export const ContentBox = styled.div<{ isNull: boolean }>`
  border-radius: 2px;
  border: 1px solid #767676;
  margin-top: 40px;
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
  padding: 25px;
  background-color: #1f2125;

  /* .w-md-editor-text-pre > code,
  .w-md-editor-text-input {
    font-size: 20px !important;
    line-height: 19px !important;
  } */

  .w-md-editor {
    box-shadow: inherit !important;
  }

  .w-md-editor-bar {
    display: none;
  }

  .wmde-markdown h1 {
    border-bottom: 1px solid #484848;
  }

  .wmde-markdown h2 {
    border-bottom: 1px solid #484848;
  }

  .w-md-editor-text {
    padding: 0;
  }

  .w-md-editor-input {
    width: 100%;
    background-color: #1f2125;
  }

  .w-md-editor-preview {
    display: none;
  }

  .w-md-editor-text-input {
    color: white;
  }

  .wmde-markdown.wmde-markdown-color {
    background: none;
    min-height: 40vh !important;
    height: fit-content !important;
  }

  .w-md-editor-text-pre,
  .w-md-editor-text-input {
    min-height: 40vh;
    color: white;
  }

  .wmde-markdown-var.w-md-editor.w-md-editor-show-live {
    min-height: 40vh !important;
    height: fit-content !important;
    background-color: #1f2125;
  }
`;

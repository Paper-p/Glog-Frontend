import styled from "@emotion/styled";

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

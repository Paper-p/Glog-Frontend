import styled from "@emotion/styled";

export const WriteSection = styled.form`
  width: 72.5%;
  margin: auto;
  padding-top: 65px;
`;

export const TitleBox = styled.div`
  width: 100%;
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

export const TagInputBox = styled.div`
  width: 100%;
  height: 50px;
  background: #1a1b1e;
  padding-left: 5px;
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const TagInput = styled(Input)`
  font-size: 20px;
  color: #969696;
`;

export const TagListBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  gap: 8px;
`;

export const Tag = styled.div`
  min-width: 60px;
  height: 38px;
  background: #3a3b3d;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  color: #969696;
  padding: 0 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const ChooseImageBox = styled.div`
  width: 100%;
  height: 600px;
  background-color: white;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: white;

  img {
    width: 150px;
    height: 150px;
  }
`;
export const MarkdownBox = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  margin-top: 25px;
`;

export const Editor = styled.div`
  width: 100%;
  height: 100%;

  .md-editor {
    font-size: 20px;
  }

  .md-editor-toolbar-warp {
    justify-content: center;
    height: 45px;
  }

  .md-editor-toolbar-mode {
    display: none;
  }
  .wmde-markdown p {
    text-align: center;
  }
`;

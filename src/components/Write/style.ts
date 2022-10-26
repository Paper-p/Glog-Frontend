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
  font-weight: 00;

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

export const TagInput = styled(TitleInput)`
  font-size: 20px;
  color: #969696;
`;

export const TagListBox = styled.div`
  width: 100%;
  height: 60px;
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
  cursor: pointer;

  animation: fadein 0.4s;
  -moz-animation: fadein 0.4s; /* Firefox */
  -webkit-animation: fadein 0.4s; /* Safari and Chrome */
  -o-animation: fadein 0.4s; /* Opera */

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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

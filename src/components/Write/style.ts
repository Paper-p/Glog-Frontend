import styled from "@emotion/styled";

export const WriteSection = styled.form`
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

export const ExampleThumbnail = styled.div`
  width: 684px;
  height: 150px;
  border-radius: 20px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://avatars.githubusercontent.com/u/102593699?v=4");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Explain = styled.div`
  font-weight: 500;
  font-size: 30px;
  color: white;
  text-align: center;
  margin: 20px 0;
`;

export const ThumbnailElements = styled.div<{ imageUrl: string }>`
  width: 609px;
  height: 101px;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Content = styled.div`
  color: #9c9c9c;
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

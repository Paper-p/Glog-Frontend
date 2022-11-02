import styled from "@emotion/styled";

export const WriteTagLayout = styled.div`
  margin-top: 20px;
`;

export const TagInputBox = styled.div`
  width: 100%;
  height: 50px;
  background: #1a1b1e;
  padding-left: 5px;
  margin-bottom: 5px;
`;

export const TagInput = styled.input`
  width: 100%;
  height: 100%;
  background: #1a1b1e;
  border: none;
  font-size: 20px;
  color: #969696;

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

export const TagListBox = styled.div`
  width: 100%;
  height: content;
  display: flex;
  gap: 8px;
`;

export const Tag = styled.div`
  min-width: 60px;
  height: 38px;
  background: #3a3b3d;
  border-radius: 10px;
  font-size: 14px;
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

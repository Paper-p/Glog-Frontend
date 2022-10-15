import styled from "@emotion/styled";

export const SigninWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const JoinSection = styled.div`
  display: flex;
  height: calc(100vh - 170px);
  align-items: center;
  justify-content: center;
  margin-left: 366px;
`;

export const JoinBox = styled.form`
  width: 732px;
  margin-bottom: 200px;
`;

export const GifBox = styled.div`
  width: 50%;
  text-align: center;
`;

export const StyledGif = styled.img`
  width: 180px;
  height: 140px;
`;

export const InputElements = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const ErrorText = styled.div`
  display: flex;
  margin-left: 20px;
  color: #e83f28;
  align-items: center;
`;

export const HighlightText = styled.div`
  width: 366px;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  padding-top: 20px;
  color: white;
  margin-bottom: 8px;
`;

export const TextBox = styled.div`
  width: 366px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const TextUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const Text = styled.li`
  color: white;

  &:first-of-type {
    color: #39c078;
    cursor: pointer;
  }
`;

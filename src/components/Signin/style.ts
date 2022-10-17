import styled from "@emotion/styled";

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

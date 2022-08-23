import styled from "styled-components";

export const Box = styled.div`
  padding: 1rem 0.5rem;
  background-color: #000;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.4s;

  :hover {
    transform: scale(1.05);
  }
`;

export const Title = styled.div`
  color: white;
  margin: 20px 20px 0 20px;
`;

export const Date = styled.div`
  margin: 5px 0 24px 20px;
  color: #939393;
`;

export const Container = styled.div`
  position: relative;
  width: 823px;
  top: 200px;
  margin: 0 auto;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(4, 1fr);
`;

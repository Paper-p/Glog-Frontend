import styled from "@emotion/styled";

export const GifBox = styled.div`
  width: 366px;
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

export const SignupButton = styled.button`
  width: 366px;
  height: 60px;
  background: linear-gradient(95.2deg, #17d56f 45.83%, #119e6d 93.3%);
  border-radius: 10px;
  border: none;
  font-weight: 800;
  font-size: 18px;
  color: #1c1c1c;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    box-sizing: border-box;
    background: #f5f5f5;
    border: 2px solid #17d46f;
    color: #17d46f;
  }
`;

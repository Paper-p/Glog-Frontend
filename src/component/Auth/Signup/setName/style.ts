import styled from "@emotion/styled";

export const SignupWrapper = styled.div`
  display: flex;
  height: calc(100vh - 170px);
  align-items: center;
  justify-content: center;
`;

export const SignupBox = styled.div`
  width: 366px;
  margin-bottom: 300px;
`;

export const GifBox = styled.div`
  text-align: center;
`;

export const StyledGif = styled.img`
  width: 180px;
  height: 140px;
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

import styled from "@emotion/styled";

export const SignupWrapper = styled.div`
  display: flex;
  height: calc(100vh - 170px);
  align-items: center;
  justify-content: center;
`;

export const SignupBox = styled.div`
  width: 366px;
  height: 324px;
  margin-bottom: 170px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 52px;
  background: #252727;
  border-radius: 10px;
  margin-top: 20px;
  align-items: center;
`;

export const StyledInputBase = styled.input`
  width: 90%;
  height: 40px;
  border: none;
  margin: 6px;
  background: #252727;
  font-size: 16px;
  color: #ffffff7a;

  &:focus {
    outline: none;
  }
`;

export const SortInput = styled.div`
  display: flex;
  text-align: center;
  margin-left: 10px;

  & > svg {
    margin-top: 5px;
  }
`;

export const StyledSvg = styled.div`
  margin: auto;

  & > svg {
    margin-top: 1.5px;
  }
`;

export const InputName = styled(StyledInputBase)``;

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
    background: #119e6d;
  }
`;

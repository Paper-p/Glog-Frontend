import styled from "@emotion/styled";

type ButtonPropsType = {
  isFocused: boolean;
};

export const SignupWrapper = styled.div`
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

export const JoinBox = styled.div`
  width: 732px;
  margin-bottom: 170px;
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

export const SignupButton = styled.button<ButtonPropsType>`
  width: 50%;
  height: 60px;
  border-radius: 10px;
  border: none;
  font-weight: 800;
  font-size: 18px;
  margin-top: 16px;

  background: ${(e) => {
    return e.isFocused
      ? "linear-gradient(95.2deg, #17D56F 45.83%, #119E6D 93.3%)"
      : "#505151";
  }};

  color: ${(e) => {
    return e.isFocused ? "#1C1C1C" : "#9E9E9E";
  }};

  cursor: ${(e) => {
    return e.isFocused ? "pointer" : "";
  }};

  &:hover {
    ${(e) => {
      return e.isFocused
        ? "box-sizing: border-box; background: #f5f5f5; border: 2px solid #17d46f; color: #17d46f;"
        : "";
    }};
  }
`;

export const CommonText = styled.div`
  width: 50%;
  text-align: center;
  color: #eaeaea;
  font-size: 14px;
  margin-top: 6px;
`;

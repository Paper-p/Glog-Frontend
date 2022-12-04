import styled from "@emotion/styled";

export const TextareaLayout = styled.div`
  display: flex;
  width: 100%;
  margin: 15px 0 30px 0;
  background: #27282b;
  border-radius: 10px;
  align-items: baseline;
  justify-content: space-between;

  button {
    width: 3.28vw;
    min-width: 60px;
    height: 33.85px;
    font-size: 16px;
    margin-right: 10px;
    // 기본스타일 수정 (20px)
    margin-top: 0px;
  }

  textarea {
    width: 100%;
    min-height: 70px;
    background: #27282b;
    color: #fff;
    font-family: "Pretendard";
    font-size: 16px;
    line-height: 1.75rem;
    resize: none;
    border: none;
    outline: none;
    margin-bottom: 20px;
  }
`;

export const NotLogged = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: 67.5px;
  margin: 15px 0 30px 0;
  background: #27282b;
  color: #fff;
  border-radius: 10px;
`;

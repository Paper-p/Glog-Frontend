import styled from "@emotion/styled";

export const DetailsPostLayout = styled.div`
  width: 50vw;
  margin: auto;
  padding: 65px 65px;
`;

export const CommentBox = styled.div`
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
    background: #27282b;
    color: #fff;
    font-family: "Pretendard";
    font-size: 16px;
    line-height: 1.75rem;
    resize: none;
    border: none;
    outline: none;
  }
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 72.5vw;
  height: content;
  display: flex;
  gap: 8px;
`;

export const Tag = styled.div`
  height: content;
  padding: 10px 18px;
  background: #3a3b3d;
  margin-top: 22px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #969696;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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

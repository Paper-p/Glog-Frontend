import styled from "@emotion/styled";

export const DetailsPostCommentLayout = styled.div`
  width: 100%;
  margin-top: 20px;
  @keyframes fadein {
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
`;

export const Commnet = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 7px;
`;

export const UserBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const UserProfile = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50px;
  }
`;

export const UserName = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  color: #ffffff;
  margin-bottom: 2px;
`;

export const UserComment = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #ffffff;
`;

export const CommentBox = styled.div<{ isClick: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${(e) => (e.isClick ? "8px" : "14px")};
`;

export const CreatedAt = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  color: #999999;
  white-space: nowrap;
`;

export const Icon = styled.div<{ isClick: boolean }>`
  width: ${(e) => (e.isClick ? "14px" : "3px")};
  cursor: pointer;
  margin-right: ${(e) => (e.isClick ? "-5px" : "0")};

  & > div > svg {
    animation: fadein 0.2s;
    -webkit-animation: fadein 0.2s;
  }
`;

export const CommentControl = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  right: -95px;
  gap: 8px;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const ControlText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
`;

export const Edit = styled(ControlText)`
  color: #17d46f;
  animation: fadein 0.7s;
  -webkit-animation: fadein 0.7s;
`;

export const EditTextarea = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-end;
  width: 34vw;
  padding: 7px 15px;
  background: #27282b;
  border-radius: 10px;
  justify-content: space-between;

  button {
    align-items: baseline;
    width: 4.28vw;
    min-width: 60px;
    height: 27px;
    font-size: 13px;
    margin: 0 -10px 2px 7px;
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

export const Remove = styled(ControlText)`
  color: #f55f56;
  animation: fadein 1s;
  -webkit-animation: fadein 1s;
`;

export const Border = styled.div`
  width: 100%;
  height: 0px;
  border: 1px solid #484848;
  margin-top: 15px;
`;

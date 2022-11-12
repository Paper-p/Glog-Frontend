import styled from "@emotion/styled";

export const DetailsPostCommentLayout = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const CommentBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const Box = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
`;

export const UserProfile = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }

  cursor: pointer;
  margin-left: 8px;
`;

export const UserName = styled.p`
  font-weight: 350;
  font-size: 16px;
  color: #ffffff;
`;

export const CreatedAt = styled.p`
  font-weight: 350;
  font-size: 13px;
  color: #999999;
  margin-bottom: 2px;
`;

export const UserComment = styled.p`
  font-weight: 400;
  font-size: 17px;
  color: #ffffff;
`;

export const Border = styled.div`
  width: 100%;
  height: 0px;
  border: 1px solid #484848;
  margin: 15px 0;
`;

import styled from "@emotion/styled";

export const DetailsPostInfoLayout = styled.div`
  width: 100%;
  height: 37px;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const AuthorInfo = styled.div`
  display: flex;
  gap: 8px;
`;

export const Profile = styled.div`
  img {
    width: 37px;
    height: 37px;
    border-radius: 50px;
  }
`;
export const Author = styled.div`
  text-align: justify;
`;
export const Name = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;
export const createdAt = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #999999;
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
`;

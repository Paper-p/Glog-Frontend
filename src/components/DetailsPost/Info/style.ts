import styled from "@emotion/styled";

export const DetailsPostInfoLayout = styled.div`
  width: 100%;
  height: 37px;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const AuthorInfoSection = styled.section`
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

export const PostInfoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ItemBox = styled.div`
  display: flex;
  gap: 4.4px;
`;

export const Svg = styled.div`
  & > svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  &.like {
    margin-bottom: 1.4px;
  }
`;

export const ItemValue = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #929292;
  margin-top: 2px;
`;

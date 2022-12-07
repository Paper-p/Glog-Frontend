import styled from "@emotion/styled";

export const Title = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 19px;
  font-weight: 600;
  color: white;
  margin-bottom: 4.5px;
`;

export const Content = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  color: #9c9c9c;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  transition: 0.2s;

  &:hover {
    color: white;
  }
`;

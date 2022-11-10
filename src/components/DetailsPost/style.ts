import styled from "@emotion/styled";

export const DetailsPostLayout = styled.div`
  width: 72.5%;
  margin: auto;
  padding-top: 65px;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 48px;
  line-height: 57px;
  color: #ffffff;
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
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #969696;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

import styled from "@emotion/styled";

export const DetailsPostLayout = styled.div`
  width: 50%;
  margin: auto;
  padding: 65px 65px;
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

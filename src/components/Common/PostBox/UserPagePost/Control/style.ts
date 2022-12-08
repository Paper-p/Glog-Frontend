import styled from "@emotion/styled";

export const ControlBoxLayout = styled.div<{ control: boolean | undefined }>`
  display: flex;
  position: absolute;
  right: 0;
  gap: 15px;

  & > div {
    display: ${(props) => (props.control ? "flex" : "none")};
    gap: 10px;
  }
`;

export const KebobBox = styled.span`
  cursor: pointer;
`;

export const Modify = styled.p`
  cursor: pointer;
  color: #9a9a9a;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  animation: fadein 0.7s;
  -webkit-animation: fadein 0.7s;
`;

export const Delete = styled.p`
  cursor: pointer;
  color: #e22e2e;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  animation: fadein 0.3s;
  -webkit-animation: fadein 0.3s;
`;

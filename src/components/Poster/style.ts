import styled from "@emotion/styled";

export const Poster_Box = styled.div`
  width: 330px;
  height: 330px;
  position: relative;
  border-radius: 10px;
`;

export const Thumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto;
  border-radius: 10px;
`;

export const TextBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 145px;
  background: rgba(51, 51, 51, 0.7);
  backdrop-filter: blur(14px);
  border-radius: 10px;
  padding: 10px 12px 12px 12px;
`;

export const Title = styled.p`
  color: white;
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const Description = styled.p`
  font-size: 15px;
  color: #85888d;
  font-weight: 400;
`;

export const TextBox_Bottom = styled.div`
  position: absolute;
  bottom: 12px;
  display: flex;
`;

export const LikeBox = styled.div`
  display: flex;
  line-height: 16px;
  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #7b7b7b;
    margin-left: 4px;
    margin-right: 10px;
  }
`;

export const ViewsBox = styled.div`
  display: flex;
  line-height: 16px;
  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #7b7b7b;
    margin-left: 4px;
    margin-right: 10px;
  }
`;

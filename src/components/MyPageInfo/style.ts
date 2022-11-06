import styled from "@emotion/styled";

export const MyPosts_Layout = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 330px);
  gap: 24px 24px;
`;

export const Profile_Layout = styled.div`
  width: 100%;
  height: 330px;
  background-color: #1f2125;
  display: flex;
  justify-content: center;
`;

export const Profile_Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  width: 164px;
  height: 164px;
  border-radius: 100px;
  object-fit: cover;
`;

export const ProfileName = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
  margin-top: 16px;
  text-align: center;
`;

export const MyPost = styled.div`
  background-color: #33333399;
  width: 117px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 10px;
  color: #969696;
  margin: 40px 0 20px 13.4%;
`;

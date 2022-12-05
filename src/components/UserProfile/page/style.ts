import styled from "@emotion/styled";

export const MyPostsLayout = styled.div`
  width: 72.5%;
  margin: auto;

  @media screen and (max-width: 1350px) {
    width: 90vw;
  }

  @media screen and (max-width: 1100px) {
    width: 95vw;
  }

  @media screen and (max-width: 750px) {
    width: 75vw;
  }
`;

export const CategoryBox = styled.div`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 16px;
`;

export const MyPostsBox = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 2vw 1.5vw;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProfileLayout = styled.div`
  width: 100%;
  height: 330px;
  background-color: #1f2125;
  display: flex;
  justify-content: center;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const ProfileImage = styled.img`
  width: 164px;
  height: 164px;
  border-radius: 100px;
  object-fit: cover;
  cursor: pointer;
`;

export const ProfileName = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
  margin: 16px 0 20px 0;
  text-align: center;
  cursor: pointer;
`;

export const EditProfileButton = styled.div`
  width: 130px;
  height: 40px;
  margin: 0 auto;
  background: #1a1b1e;
  color: #cccccc;
  font-size: 14px;
  text-align: center;
  line-height: 36px;
  border: #cccccc 1px solid;
  cursor: pointer;

  &:hover {
    background: #25262b;
  }
`;

export const Logout = styled.p`
  color: red;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  margin-top: 10px;
`;

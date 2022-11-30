import styled from "@emotion/styled";

export const MyPostsLayout = styled.div`
  width: 72.5%;
  margin: auto;
`;

export const CategoryBox = styled.div`
  padding-top: 30px;
  padding-bottom: 16px;
`;

export const MyPostsBox = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25vw 1.25vw;

  @media screen and (max-width: 1100px) {
    width: 75vw;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 750px) {
    width: 70vw;
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 600px) {
    width: 70vw;
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
  margin-top: 16px;
  text-align: center;
  cursor: pointer;
`;

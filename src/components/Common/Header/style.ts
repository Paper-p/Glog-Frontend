import styled from "@emotion/styled";

//공통속성----------
//----------------

export const HeaderBox = styled.div`
  width: 100%;
  padding-top: 100px;
  display: flex;
  justify-content: center;

  .right-part {
    justify-content: end;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 36.25%;
  height: 70px;
  background: #1a1b1e;
`;

export const HeaderElementsList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 20px;
`;

export const HeaderElements = styled.li`
  font-size: 18px;
  font-weight: 600;
  color: #9d9d9d;
  cursor: pointer;

  .user-profile {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.div`
  height: 30px;
`;

export const Username = styled.p`
  font-size: 18px;
  margin-right: 12px;
`;

export const Profile = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 20px;
  margin-right: 20px;
`;

import styled from "@emotion/styled";

export const HeaderLayout = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 102px;
`;

export const Header = styled.header`
  display: flex;
  width: 72.5%;
  height: 100%;
  margin: auto;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderElements = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  color: #9d9d9d;

  input {
    height: 17px;
    font-size: 16px;
    margin-left: 3px;
    color: rgba(255, 255, 255, 0.56);
  }

  .logo {
    cursor: pointer;
  }

  .input {
    width: 27vw;
    height: 36px;
    margin-right: 88px;
  }

  .search {
  }

  .search-box {
    margin-top: 0;
  }

  .search-bar {
    margin-left: 0;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #9d9d9d;
  gap: 16px;

  p {
    cursor: pointer;
  }

  p.home {
    margin-left: 10px;
  }

  p.user-name {
    color: #ffffff;
  }
`;

export const Profile = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 20px;
`;

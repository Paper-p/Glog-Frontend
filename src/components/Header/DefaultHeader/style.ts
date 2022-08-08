import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  background: rgba(217, 217, 217, 0.13);
  backdrop-filter: blur(48px);
  z-index: 6;
`;

export const Inner = styled.div`
  display: block;
  width: 1080px;
  height: 70px;
  margin: auto;
  line-height: 70px;
`;

export const Logo = styled.div`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: inline-block;
  width: 173px;
  height: 25px;
  margin: auto;
  cursor: pointer;
`;

export const Login = styled.div`
  font-size: 17px;
  font-weight: 400;
  display: block;
  float: right;
  line-height: 63px;
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  li {
    margin-right: 18px;
    color: #000;
  }
  a {
    text-decoration: none;
  }
`;

export const BottomLine = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10%;
  border-bottom: 1px solid #000000;
`;
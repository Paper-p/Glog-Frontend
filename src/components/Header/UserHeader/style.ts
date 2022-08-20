import styled from "styled-components";

export const Login = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: #000;
  line-height: 63px;
  float: right;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  li:nth-last-child(1) {
    margin-right: 125px;
  }
  li:nth-last-child(2) {
    line-height: 78px;
  }
  a {
    text-decoration: none;
  }
`;

export const ProfileCircle = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 50px;
  margin-right: 10px;
  margin-top: 18px;
`;

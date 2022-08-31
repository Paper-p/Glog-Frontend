import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  display: block;
  width: 500px;
  height: 516px;
  background-color: black;
  top: 27vh;
  left: 50%;
  margin: 0 0 0 -250px;
  box-shadow: 2px 2px 2px 2px #999;
`;

export const ModalText1 = styled.div`
  position: absolute;
  display: block;
  top: 25px;
  left: 50%;
  margin: 0 0 0 -46.25px;
  height: 31px;
  line-height: 31px;
  font-size: 26px;
  font-weight: 700;
  color: white;
  text-align: center;
`;

export const ModalText2 = styled.div`
  position: absolute;
  top: 63px;
  left: 50%;
  margin: 0 0 0 -116.93px;
  height: 22px;
  line-height: 21.78px;
  font-size: 18px;
  font-weight: 500;
  color: white;
  text-align: center;
`;

export const NameTxt = styled.div<{ result: string }>`
  position: absolute;
  width: 60px;
  height: 17px;
  background-color: black;
  top: 115px;
  left: 45px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  line-height: 20px;
  z-index: 3;

  color: ${(props) => (props.result === "false" ? "#DC3D32" : "#ffffff")};
`;

export const IdTxt = styled.div<{ result: string }>`
  position: absolute;
  width: 70px;
  height: 17px;
  background-color: black;
  top: 185px;
  left: 45px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  line-height: 20px;
  z-index: 3;

  color: ${(props) => (props.result === "false" ? "#DC3D32" : "#ffffff")};
`;

export const PwTxt = styled.div`
  position: absolute;
  width: 70px;
  height: 17px;
  background-color: black;
  top: 255px;
  left: 45px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  line-height: 20px;
  z-index: 3;
`;

export const CheckNameBtn = styled.div`
  position: absolute;
  width: 69px;
  height: 29px;
  background-color: #3ad413;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  line-height: 29px;
  cursor: pointer;
  top: 133px;
  left: 50%;
  margin: 0 0 0 135px;
  z-index: 5;
  &:hover {
    color: #3ad413;
    background-color: rgba(255, 255, 255, 1);
    border: 2px solid #3ad413;
    box-sizing: border-box;
    line-height: 24.5px;
    transition: 0.1s;
  }
`;

export const CheckIdBtn = styled.div`
  position: absolute;
  width: 69px;
  height: 29px;
  background-color: #3ad413;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  line-height: 29px;
  cursor: pointer;
  top: 203px;
  left: 50%;
  margin: 0 0 0 135px;
  z-index: 5;
  &:hover {
    color: #3ad413;
    background-color: rgba(255, 255, 255, 1);
    border: 2px solid #3ad413;
    box-sizing: border-box;
    line-height: 24.5px;
    transition: 0.1s;
  }
`;

export const InputNameBorder = styled.div<{ result: string }>`
  position: absolute;
  width: 426px;
  height: 45px;
  top: 125px;
  left: 50%;
  margin: 0 0 0 -213px;
  box-sizing: border-box;
  border: 1px solid #ffffff;

  border: ${(props) =>
    props.result === "false" ? "1px solid #DC3D32" : "1px solid #ffffff"};
`;

export const InputIdBorder = styled.div<{ result: string }>`
  position: absolute;
  width: 426px;
  height: 45px;
  top: 195px;
  left: 50%;
  margin: 0 0 0 -213px;
  box-sizing: border-box;
  border: 1px solid #ffffff;

  border: ${(props) =>
    props.result === "false" ? "1px solid #DC3D32" : "1px solid #ffffff"};
`;

export const InputPwBorder = styled.div`
  position: absolute;
  width: 426px;
  height: 45px;
  top: 265px;
  left: 50%;
  margin: 0 0 0 -213px;
  box-sizing: border-box;
  border: 1px solid #ffffff;
`;

export const InputName = styled.input`
  position: absolute;
  width: 390px;
  height: 18px;
  top: 50%;
  margin: -9px 0 0 13px;
  outline: none;
  color: white;
  font-size: 14px;
  background-color: transparent;
  border: 0px solid;
`;

export const InputId = styled.input`
  position: absolute;
  width: 390px;
  height: 18px;
  top: 50%;
  margin: -9px 0 0 13px;
  outline: none;
  color: white;
  font-size: 14px;
  background-color: transparent;
  border: 0px solid;
`;

export const InputPw = styled.input`
  position: absolute;
  width: 390px;
  height: 18px;
  top: 50%;
  margin: -9px 0 0 13px;
  outline: none;
  color: white;
  font-size: 14px;
  background-color: transparent;
  border: 0px solid;
`;

export const FailedIcon = styled.div<{ result: string }>`
  position: absolute;
  top: 326px;
  left: 38px;
  display: ${(props) => (props.result === "false" ? "block" : "none")};
`;

export const ErrorText = styled.div<{ result: string }>`
  color: red;
  position: absolute;
  top: 325px;
  left: 60px;
  display: ${(props) => (props.result === "false" ? "block" : "none")};
`;

export const SignUpBtn = styled.div`
  position: absolute;
  cursor: pointer;
  width: 426px;
  height: 55px;
  bottom: 90px;
  left: 50%;
  margin: 0 0 0 -213px;
  color: #2c2a2a;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  line-height: 55px;
  background-color: #3ad413;
  &:hover {
    color: #3ad413;
    background-color: rgba(255, 255, 255, 1);
    border: 2px solid #3ad413;
    box-sizing: border-box;
    line-height: 51px;
    transition: 0.1s;
  }
`;

export const FindPassword = styled.div`
  position: absolute;
  font-size: 16px;
  font-weight: 400;
  color: #cacaca;
  cursor: pointer;
  bottom: 50px;
  left: 50%;
  margin: 0 0 0 -124.115px;
`;

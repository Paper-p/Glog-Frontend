import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  display: block;
  top: 225px;
  width: 500px;
  height: 451px;
  background-color: black;
  left: 50%;
  margin: 0 0 0 -250px;
  box-shadow: 2px 2px 2px 2px #999;

  @media (max-width: 768px) {
    top: 170px;
  }
`;

export const ModalText1 = styled.div`
  position: absolute;
  display: block;
  top: 25px;
  left: 50%;
  margin: 0 0 0 -31.25px;
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
  margin: 0 0 0 -77.21px;
  height: 22px;
  line-height: 21.78px;
  font-size: 18px;
  font-weight: 500;
  color: white;
  text-align: center;
`;

export const IdTxt = styled.div`
  position: absolute;
  width: 60px;
  height: 17px;
  background-color: black;
  top: 115px;
  left: 45px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #FFFFFF;
  line-height: 20px;
  z-index: 3;
`;

export const PwTxt = styled.div`
  position: absolute;
  width: 70px;
  height: 17px;
  background-color: black;
  top: 185px;
  left: 45px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #FFFFFF;
  line-height: 20px;
  z-index: 3;
`;

export const InputIdBorder = styled.div`
  position: absolute;
  width: 426px;
  height: 45px;
  top: 125px;
  left: 50%;
  margin: 0 0 0 -213px;
  box-sizing: border-box;
  border: 1px solid #FFFFFF;
`;

export const InputPwBorder = styled.div`
  position: absolute;
  width: 426px;
  height: 45px;
  top: 195px;
  left: 50%;
  margin: 0 0 0 -213px;
  box-sizing: border-box;
  border: 1px solid #FFFFFF;
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

export const LoginBtn = styled.div`
  position: absolute;
  cursor: pointer;
  width: 426px;
  height: 55px;
  bottom: 90px;
  left: 50%;
  margin: 0 0 0 -213px;
  color: #2C2A2A;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  line-height: 55px;
  background-color: #3AD413;
  &:hover {
    color: #3AD413;
    background-color: rgba( 255, 255, 255, 1);
    border: 2px solid #3AD413;
    box-sizing: border-box;
    line-height: 51px;
    transition: 0.1s;
  };
`;

export const FindPassword = styled.div`
  position: absolute;
  font-size: 16px;
  font-weight: 400;
  color: #CACACA;
  cursor: pointer;
  bottom: 50px;
  left: 50%;
  margin: 0 0 0 -65.8px;
`;
import styled from "@emotion/styled";

export const EditProfileModal = styled.div`
  width: 500px;
  height: 400px;
  background: #252727;
  border-radius: 15px;
`;

export const ProfileBox = styled.div`
  width: 90%;
  margin: auto;
  text-align: center;
  margin-top: 40px;
`;

export const ImageBox = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 40px;

  input {
    display: none;
  }
`;

export const ImageChangeBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60px;
  height: 30px;
  background: #1a1b1e;
  position: absolute;
  bottom: 10%;
  left: 30%;
  cursor: pointer;

  p {
    color: white;
    font-size: 14px;
  }
`;

export const EditSvg = styled.div`
  width: 17px;
  height: 17px;

  & > svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  object-fit: cover;
`;

export const Nickname = styled.input`
  width: 80%;
  height: 35px;
  padding: 10px;
  border-radius: 5px;
  background: #252727;
  color: white;
  border: #cccccc 1px solid;

  &:focus {
    outline: none;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #252727 inset !important;
    box-shadow: 0 0 0 30px #252727 inset !important;
  }
`;

export const MoveBox = styled.div`
  width: 65%;
  cursor: pointer;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;

export const Exit = styled.div`
  color: #18d570;
  font-size: 15px;
`;

export const Edit = styled.div`
  color: #18d570;
  font-size: 15px;
`;

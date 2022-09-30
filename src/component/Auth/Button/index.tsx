import * as S from "./style";

type PropsType = {
  buttonText: string;
};

const AuthButton: React.FC<PropsType> = ({ buttonText }) => {
  return <S.AuthButton>{buttonText}</S.AuthButton>;
};

export default AuthButton;

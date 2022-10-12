import * as S from "./style";

interface Props {
  text: string;
}

const Button: React.FC<Props> = ({ text }) => {
  return <S.Button>{text}</S.Button>;
};

export default Button;

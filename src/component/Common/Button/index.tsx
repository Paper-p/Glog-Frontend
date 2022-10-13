import { type PropsWithChildren } from "react";
import * as S from "./style";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...rest }: PropsWithChildren<Props>) => {
  return <S.Button>{children}</S.Button>;
};

export default Button;

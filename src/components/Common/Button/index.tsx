import * as S from "./style";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...rest }: Props) {
  return <S.Button {...rest}>{children}</S.Button>;
}

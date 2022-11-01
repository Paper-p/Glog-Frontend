import * as S from "./style";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  width?: string;
  background?: string;
}

export default function Button({
  width,
  background,
  children,
  ...rest
}: Props) {
  const custom = (data: Props) =>
    css({ width: data.width }, { background: data.background });

  const data = {
    width,
    background,
  };

  return (
    <>
      {data ? (
        <S.Button css={custom(data)} {...rest}>
          {children}
        </S.Button>
      ) : (
        <S.Button {...rest}>{children}</S.Button>
      )}
    </>
  );
}

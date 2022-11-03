import * as S from "./style";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
}

export default function Button({ width, height, children, ...rest }: Props) {
  const custom = (data: Props) =>
    css({ width: data.width }, { height: data.height });

  const data = {
    width,
    height,
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

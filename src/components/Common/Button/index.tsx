import * as S from "./style";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  background?: string;
}

export default function Button({
  width,
  height,
  background,
  children,
  ...rest
}: Props) {
  const custom = (data: Props) =>
    css(
      { width: data.width },
      { height: data.height },
      { background: data.background }
    );

  const data = {
    width,
    height,
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

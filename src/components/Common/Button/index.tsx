import * as S from "./style";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  isButton?: boolean;
  width?: string;
  height?: string;
  background?: string;
}

export default function Button({
  isButton,
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
        <S.Button
          css={custom(data)}
          type={isButton ? "button" : "submit"}
          {...rest}
        >
          {children}
        </S.Button>
      ) : (
        <S.Button {...rest}>{children}</S.Button>
      )}
    </>
  );
}

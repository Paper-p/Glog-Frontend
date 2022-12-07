import React from "react";
import * as S from "./style";

interface Props extends React.HTMLAttributes<HTMLFormElement> {
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
}

function AuthLayout({ children, onSubmit }: Props) {
  return (
    <>
      <S.AuthLayout>
        <S.AuthWrapper>
          <S.AuthForm onSubmit={onSubmit}>{children}</S.AuthForm>
        </S.AuthWrapper>
      </S.AuthLayout>
    </>
  );
}

export default AuthLayout;

import React from "react";
import * as S from "./style";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  onSubmit?: any;
}

function AuthSecition({ children, onSubmit }: Props) {
  return (
    <>
      <S.AuthSection>
        <S.AuthBox>
          <S.AuthForm onSubmit={onSubmit}>{children}</S.AuthForm>
        </S.AuthBox>
      </S.AuthSection>
    </>
  );
}

export default AuthSecition;

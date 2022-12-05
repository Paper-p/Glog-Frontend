import React from "react";
import * as S from "./style";
import * as I from "Assets/svg";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  register?: any;
  isError?: boolean | undefined;
  purpose: string;
}

export default function Input({
  register,
  isError,
  purpose,
  children,
  ...rest
}: Props) {
  const inputRendering = (): any => {
    const returnInput: any[] = [];
    switch (purpose) {
      case "userId":
        returnInput.push(
          <React.Fragment key="id">
            <S.StyledSvg className="need-margin">
              <I.IdAndName />
            </S.StyledSvg>
            <S.Input type="text" {...register} {...rest} />
          </React.Fragment>
        );
        break;
      case "password":
        returnInput.push(
          <React.Fragment key="password">
            <S.StyledSvg>
              <I.Password />
            </S.StyledSvg>
            <S.Input type="password" {...register} {...rest} />
          </React.Fragment>
        );
        break;
      case "searchBar":
        returnInput.push(
          <React.Fragment key="search">
            <S.StyledSvg className="search">
              <I.Search />
            </S.StyledSvg>
            <S.Input type="text" {...rest} />
          </React.Fragment>
        );
        break;
    }
    return returnInput;
  };

  return (
    <S.InputElements className="search-box">
      <S.InputBox isError={isError ? isError : false} className="input">
        <S.SortInput className="search-bar">
          <>{inputRendering()}</>
        </S.SortInput>
      </S.InputBox>
      {children}
    </S.InputElements>
  );
}

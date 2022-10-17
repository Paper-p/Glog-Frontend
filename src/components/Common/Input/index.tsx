import * as S from "./style";
import * as I from "assets/svg";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  sortation: boolean;
  register: any;
  isError: boolean;
}

export default function Input({
  sortation,
  register,
  isError,
  children,
  ...rest
}: Props) {
  return (
    <>
      {sortation ? (
        <S.InputElements>
          <S.InputBox isError={isError}>
            <S.SortInput>
              <S.StyledSvg>
                <I.IdAndName />
              </S.StyledSvg>
              <S.Input type="text" {...register} {...rest} />
            </S.SortInput>
          </S.InputBox>
          {children}
        </S.InputElements>
      ) : (
        <S.InputElements>
          <S.InputBox isError={isError}>
            <S.SortInput>
              <S.StyledSvg>
                <I.Password />
              </S.StyledSvg>
              <S.Input type="password" {...register} {...rest} />
            </S.SortInput>
          </S.InputBox>
          {children}
        </S.InputElements>
      )}
    </>
  );
}

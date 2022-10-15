import * as S from "./style";
import * as I from "Assets/svg";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  sortation: boolean;
  register: any;
  isError: boolean;
}

export default function Input({
  sortation,
  register,
  isError,
  ...rest
}: Props) {
  return (
    <>
      {sortation ? (
        <S.Container>
          <S.InputWrapper isError={isError}>
            <S.SortInput>
              <S.StyledSvg>
                <I.IdAndName />
              </S.StyledSvg>
              <S.Input type="text" {...register} {...rest} />
            </S.SortInput>
          </S.InputWrapper>
        </S.Container>
      ) : (
        <S.Container>
          <S.InputWrapper isError={isError}>
            <S.SortInput>
              <S.StyledSvg>
                <I.Password />
              </S.StyledSvg>
              <S.Input type="password" {...register} {...rest} />
            </S.SortInput>
          </S.InputWrapper>
        </S.Container>
      )}
    </>
  );
}

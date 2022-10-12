import * as S from "./style";
import * as I from "Assets/svg";

interface Props {
  sortation: boolean;
  placeholder: string;
  register: any;
  isError: boolean;
}

const Input: React.FC<Props> = ({
  sortation,
  placeholder,
  register,
  isError,
}) => {
  return (
    <>
      {sortation ? (
        <S.Container>
          <S.InputWrapper isError={isError}>
            <S.SortInput>
              <S.StyledSvg>
                <I.IdAndName />
              </S.StyledSvg>
              <S.Input type="text" {...register} placeholder={placeholder} />
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
              <S.Input
                type="password"
                {...register}
                placeholder={placeholder}
              />
            </S.SortInput>
          </S.InputWrapper>
        </S.Container>
      )}
    </>
  );
};

export default Input;

import * as S from "./style";
import * as I from "Assets/svg";

interface Props {
  sortation: boolean;
}

const Input: React.FC<Props> = ({ sortation }) => {
  return (
    <>
      {sortation ? (
        <S.Container>
          <S.InputWrapper isError={false}>
            <S.SortInput>
              <S.StyledSvg>
                <I.IdAndName />
              </S.StyledSvg>
              <S.Input />
            </S.SortInput>
          </S.InputWrapper>
        </S.Container>
      ) : (
        <S.Container>
          <S.InputWrapper isError={false}>
            <S.SortInput>
              <S.StyledSvg>
                <I.Password />
              </S.StyledSvg>
              <S.Input />
            </S.SortInput>
          </S.InputWrapper>
        </S.Container>
      )}
    </>
  );
};

export default Input;
